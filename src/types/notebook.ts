import type { XmlFragmentJSON } from '@trestleinc/replicate';

export interface Notebook {
  id: string;
  title: string;
  content: XmlFragmentJSON; // ProseMirror-compatible JSON from replicate
  createdAt: number;
  updatedAt: number;
  plainText?: string;
}
