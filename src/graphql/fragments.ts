import { graphql } from 'gatsby';

export const articleFragment = graphql`
  fragment Article on SanityArticle {
    title
    id
    mainImage {
      asset {
        fluid(maxWidth: 960) {
          ...GatsbySanityImageFluid
        }
      }
    }
    publishDate
    ingress
    category {
      ...Category
    }
    slug {
      current
    }
    _rawContent
  }
`;

export const categoryFragment = graphql`
  fragment Category on SanityCategory {
    title
    description
    slug {
      current
    }
    color {
      hex
    }
  }
`;
