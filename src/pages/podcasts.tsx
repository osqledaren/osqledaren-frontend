import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import { Article } from '../utils/types';
import ContentWrapper from '../molecules/ContentWrapper';
import InfoWrapper from '../molecules/InfoWrapper';

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
    <InfoWrapper>
      <PodcastWrapper>
        <H variant="4">
          Här kommer du snart att kunna lyssna på podcasts från OL! <br />
          <br /> (Podcasts from OL coming soon)
        </H>
      </PodcastWrapper>
    </InfoWrapper>
  </Layout>
);

export default Podcasts;

const PodcastWrapper = styled.div`
  text-align: center;
  align-self: center;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.podcast};
`;
