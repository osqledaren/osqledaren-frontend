import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import { Article } from '../utils/types';
import ContentWrapper from '../molecules/ContentWrapper';
import H from '../atoms/H';
import styled from '../styles/styled';

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
    <ContentWrapper>
      <PodcastWrapper>
        <H variant="3">
          Här kommer du snart att kunna lyssna på podcasts från OL!
        </H>
        <H variant="3">(Podcasts from OL coming soon)</H>
      </PodcastWrapper>
    </ContentWrapper>
  </Layout>
);

export default Podcasts;

const PodcastWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`;
