import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import { graphql } from 'gatsby';
import { Article } from '../utils/types';
import Img from 'gatsby-image';
import H from '../atoms/H';
import P from '../atoms/P';
import InfoWrapper from '../molecules/InfoWrapper';

interface Props {
  data: {
    sanityArticle: Article;
  };
}

const ArticleTemp: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <InfoWrapper>
        <H variant="2">{data.sanityArticle.title}</H>
        <P>{data.sanityArticle.publishDate}</P>
        <P size="22" lh="24">
          {data.sanityArticle.ingress}
        </P>
        <Img fluid={data.sanityArticle.mainImage.asset.fluid}></Img>
      </InfoWrapper>
    </Layout>
  );
};

export default ArticleTemp;

export const query = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      ...Article
    }
  }
`;
