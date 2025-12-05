import type { XmlFragmentJSON, XmlNodeJSON } from '@trestleinc/replicate/client';

interface ContentRendererProps {
  content: XmlFragmentJSON;
}

/**
 * Renders BlockNote/ProseMirror JSON content as static HTML for SSR.
 * Expects XmlFragmentJSON: { type: 'doc', content?: XmlNodeJSON[] }
 */
export function ContentRenderer({ content }: ContentRendererProps) {
  if (!content?.content?.length) {
    return <p className="text-muted italic">Empty page</p>;
  }

  return (
    <div className="prose prose-notebook">
      {content.content.map((block, i) => (
        <BlockRenderer key={i} node={block} />
      ))}
    </div>
  );
}

interface BlockRendererProps {
  node: XmlNodeJSON;
}

function BlockRenderer({ node }: BlockRendererProps) {
  switch (node.type) {
    case 'paragraph':
      return (
        <p>
          <InlineRenderer content={node.content} />
        </p>
      );

    case 'heading':
      const level = (node.attrs?.level as number) || 1;
      const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag>
          <InlineRenderer content={node.content} />
        </HeadingTag>
      );

    case 'bulletListItem':
      return (
        <li>
          <InlineRenderer content={node.content} />
          {node.content?.filter((c) => c.type !== 'text').map((child, i) => (
            <BlockRenderer key={i} node={child} />
          ))}
        </li>
      );

    case 'numberedListItem':
      return (
        <li>
          <InlineRenderer content={node.content} />
          {node.content?.filter((c) => c.type !== 'text').map((child, i) => (
            <BlockRenderer key={i} node={child} />
          ))}
        </li>
      );

    case 'checkListItem':
      const checked = node.attrs?.checked as boolean;
      return (
        <li className={`check-item ${checked ? 'checked' : ''}`}>
          <span className="check-box">{checked ? '☑' : '☐'}</span>
          <InlineRenderer content={node.content} />
        </li>
      );

    case 'codeBlock':
      return (
        <pre>
          <code>
            <InlineRenderer content={node.content} />
          </code>
        </pre>
      );

    case 'blockquote':
      return (
        <blockquote>
          {node.content?.map((child, i) => (
            <BlockRenderer key={i} node={child} />
          ))}
        </blockquote>
      );

    case 'image':
      return (
        <figure>
          <img
            src={node.attrs?.src as string}
            alt={node.attrs?.alt as string || ''}
          />
          {node.attrs?.caption && (
            <figcaption>{node.attrs.caption as string}</figcaption>
          )}
        </figure>
      );

    case 'table':
      return (
        <table>
          <tbody>
            {node.content?.map((row, i) => (
              <tr key={i}>
                {row.content?.map((cell, j) => (
                  <td key={j}>
                    <InlineRenderer content={cell.content} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case 'horizontalRule':
      return <hr />;

    default:
      // For unknown block types, try to render content
      if (node.content) {
        return (
          <div>
            {node.content.map((child, i) => (
              <BlockRenderer key={i} node={child} />
            ))}
          </div>
        );
      }
      return null;
  }
}

interface InlineRendererProps {
  content?: XmlNodeJSON[];
}

function InlineRenderer({ content }: InlineRendererProps) {
  if (!content) return null;

  return (
    <>
      {content.map((node, i) => {
        if (node.type === 'text') {
          let element: React.ReactNode = node.text || '';

          // Apply marks (bold, italic, etc.)
          if (node.marks) {
            for (const mark of node.marks) {
              switch (mark.type) {
                case 'bold':
                  element = <strong key={i}>{element}</strong>;
                  break;
                case 'italic':
                  element = <em key={i}>{element}</em>;
                  break;
                case 'strike':
                  element = <s key={i}>{element}</s>;
                  break;
                case 'underline':
                  element = <u key={i}>{element}</u>;
                  break;
                case 'code':
                  element = <code key={i}>{element}</code>;
                  break;
                case 'link':
                  element = (
                    <a key={i} href={mark.attrs?.href as string}>
                      {element}
                    </a>
                  );
                  break;
              }
            }
          }

          return <span key={i}>{element}</span>;
        }

        // Handle nested blocks within inline content
        return <BlockRenderer key={i} node={node} />;
      })}
    </>
  );
}
