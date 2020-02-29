import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import ContentFeed from '../organisms/ContentFeed';
import { graphql } from 'gatsby';
import { Article } from '../utils/types';
import ContentWrapper from '../molecules/ContentWrapper';

interface Props {
  pageContext: {
    slug: string;
  };
  data: {
    allSanityArticle: {
      edges: Array<{
        node: Article;
      }>;
    };
  };
}

const Category: FC<Props> = ({ data: { allSanityArticle } }) => (
  <Layout>
    <ContentWrapper>
      <ContentFeed content={allSanityArticle.edges} />
    </ContentWrapper>
  </Layout>
);

export const query = graphql`
  query CategoryPage($slug: String!) {
    allSanityArticle(
      filter: { category: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
`;

export default Category;
