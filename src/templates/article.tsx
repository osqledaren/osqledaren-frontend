import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import { graphql } from 'gatsby';
import H from '../atoms/H';
import P from '../atoms/P';

interface Props {
  data: any;
}

const Article: FunctionComponent<Props> = ({
  data: { articlesJson: article },
}) => (
  <Layout>
    <H variant="2">{article.title}</H>
    <P>{article.creators}</P>
    <P>{article.publishedAt}</P>
  </Layout>
);

export default Article;

export const query = graphql`
  query ArticlePage {
    articlesJson {
      title
      creators
      publishedAt
      category
      ingress
      content
    }
  }
`;
