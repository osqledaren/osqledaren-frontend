import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import ContentFeed from '../organisms/ContentFeed';
import { useStaticQuery, graphql } from 'gatsby';
import { Article } from '../utils/types';

const Index: FunctionComponent = () => {
  const {
    allSanityArticle,
  }: {
    allSanityArticle: {
      edges: Array<{
        node: Article;
      }>;
    };
  } = useStaticQuery(graphql`
    query {
      allSanityArticle(limit: 100) {
        edges {
          node {
            ...Article
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <ContentFeed content={allSanityArticle.edges} />
    </Layout>
  );
};
export default Index;
