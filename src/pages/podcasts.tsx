import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import { Article } from '../utils/types';
import InfoWrapper from '../molecules/InfoWrapper';

import H from '../atoms/H';
import P from '../atoms/P';
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

const episodeIds = [
  '7wOAce2SReVmZr4vnTawyd',
  '5Zvd2LGCh4m3yGUbgutZv9',
  '7zdCVyLC1gLmPnz9uqu7HQ',
  '2CqmKNEIX6GOO3lO0VbmAO',
  '431KSt20plP1z014CKHic8',
];

const Podcasts: FC<Props> = () => (
  <Layout>
    <InfoWrapper>
      <PodcastContainer>
        <PodcastText>
          <H variant="3">Podcasts</H>
          <P>
            Here you can listen to Osqledaren's podcasts:
            </P>
        </PodcastText>
        {episodeIds.map(episodeId => (
          <PodcastItem key={episodeId}>
            <iframe src={`https://open.spotify.com/embed-podcast/episode/${episodeId}`} width="100%" height="232" frameBorder="0" allow="encrypted-media"></iframe>
          </PodcastItem>
        ))}
        <P></P>
      </PodcastContainer>
    </InfoWrapper>
  </Layout>
);

export default Podcasts;

const PodcastContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 10px;
  padding: 2% 10%;
  background-color: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16), 0 4px 5px rgba(0, 0, 0, 0.22);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    padding: 0 5%;
  }
`;

const PodcastText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const PodcastItem = styled.div`
  margin: 5px 0;
`;
