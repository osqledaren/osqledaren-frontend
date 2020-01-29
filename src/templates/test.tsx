import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Article } from '../utils/types';

interface Props {
  data: {
    sanityArticle: Article;
  };
}

const TestTemplate: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.sanityArticle.title}</h1>
      <p>{data.sanityArticle.ingress}</p>
    </div>
  );
};

export const query = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      ...Article
    }
  }
`;

export default TestTemplate;
