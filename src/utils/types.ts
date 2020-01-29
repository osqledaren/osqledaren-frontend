import { FluidObject } from 'gatsby-image';

export interface Color {
  hex: string;
}

export interface Category {
  title: string;
  description?: string;
  color: Color;
}

export interface SanityImageFluid {
  asset: {
    fluid: FluidObject;
  };
}

export type SanityRawContent = unknown;

export interface Slug {
  current: string;
}

export interface Article {
  slug: Slug;
  mainImage: SanityImageFluid;
  title: string;
  id: string;
  category: Category;
  ingress: string;
  publishDate: string;
  _rawContent: SanityRawContent;
}
