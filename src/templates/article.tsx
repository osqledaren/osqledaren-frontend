import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import { graphql } from 'gatsby';
import H from '../atoms/H';
import P from '../atoms/P';

interface Article {
  title: string;
  publishDate: string;
  category?: {
    title: string;
  };
}

interface Props {
  data: {
    sanityArticle: Article;
  };
}

const Article: FunctionComponent<Props> = ({
  data: { sanityArticle: article },
}) => (
  <Layout>
    <H variant="2">{article.title}</H>
    <P>{article.publishDate}</P>
  </Layout>
);

export default Article;

export const query = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      title
      publishDate
      category {
        title
      }
    }
  }
`;
