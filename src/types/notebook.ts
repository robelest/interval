export interface Notebook {
  id: string;
  title: string;
  // BlockNote/ProseMirror JSON content structure
  content: {
    type: 'doc';
    content?: BlockContent[];
  };
  createdAt: number;
  updatedAt: number;
  plainText?: string;
}

// BlockNote block content types
export interface BlockContent {
  type: string;
  attrs?: Record<string, unknown>;
  content?: BlockContent[];
  text?: string;
  marks?: { type: string; attrs?: Record<string, unknown> }[];
}
