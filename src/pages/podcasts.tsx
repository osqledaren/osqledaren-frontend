import React, { FC } from 'react';
import Layout from '../organisms/Layout';
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

const Podcasts: FC<Props> = () => (
  <Layout>
    <ContentWrapper>Podcasts here</ContentWrapper>
  </Layout>
);

export default Podcasts;
