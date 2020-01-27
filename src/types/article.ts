import { Category } from './category';

export interface Article {
  slug: {
    current: string;
  };
  title: string;
  id: string;
  category: Category;
  ingress: string;
  publishDate: string;
  __rawContent: any;
}
