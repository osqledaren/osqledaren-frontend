import React, { FC } from 'react';
import Layout from '../organisms/Layout';
import { graphql } from 'gatsby';
import { Article } from '../utils/types';
import Img from 'gatsby-image';
import H from '../atoms/H';
import P from '../atoms/P';
import InfoWrapper from '../molecules/InfoWrapper';
import BlockContent from '@sanity/block-content-to-react';
import styled from '../styles/styled';
import TwitterLogo from '../images/Twitter_Logo_Blue.svg';
import smallOL from '../images/logo-small.png';

interface Props {
  data: {
    sanityArticle: Article;
  };
}

const ArticleTemplate: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <InfoWrapper>
        <ArticleWrapper>
          <H variant="2" color={data.sanityArticle.category.color.hex}>
            {data.sanityArticle.title}
          </H>
          <CreatorsWrapper>
            {data.sanityArticle.creators.map(contribution => (
              <Creator key={contribution.creator.id}>
                {contribution.creator.profilePicture ? (
                  <CreatorImg
                    fluid={contribution.creator.profilePicture.asset.fluid}
                  />
                ) : (
                  <NoProfilePic src={smallOL} />
                )}
                <CreatorInfo size="16pt">
                  <span>
                    {contribution.creator.name + ' - ' + contribution.role.name}
                  </span>
                  {contribution.creator.mail ? (
                    <a href={'mailto: ' + contribution.creator.mail}>
                      {contribution.creator.mail}
                    </a>
                  ) : (
                    <a href="mailto: osqledaren@ths.kth.se">
                      osqledaren@ths.kth.se
                    </a>
                  )}
                </CreatorInfo>
              </Creator>
            ))}
          </CreatorsWrapper>

          <P>{data.sanityArticle.ingress}</P>
          <MainImg fluid={data.sanityArticle.mainImage.asset.fluid}></MainImg>
          <Content
            blocks={data.sanityArticle._rawContent}
            projectId="ih69fm79"
            dataset="production"
          ></Content>
          <BottomRow>
            <P size="16">Publicerad: {data.sanityArticle.publishDate}</P>
            <Twitter
              href={
                'https://twitter.com/share?url=https://osqledaren.se/' +
                data.sanityArticle.category.slug.current +
                '/' +
                data.sanityArticle.slug.current
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="Twitter logo" />
            </Twitter>
          </BottomRow>
        </ArticleWrapper>
      </InfoWrapper>
    </Layout>
  );
};

const ArticleWrapper = styled.div`
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

const CreatorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    margin-bottom: 0px;
  }
`;

const Creator = styled.div`
  display: flex;
  height: 50px;
  margin: 10px 50px 10px 0;
`;

const CreatorImg = styled(Img)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
`;

const NoProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
`;

const CreatorInfo = styled(P)`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 20px;
  height: 100%;
  justify-content: center;
  word-break: normal;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
`;

const MainImg = styled(Img)`
  width: 90%;
  align-self: center;
  margin: 5vh 0;
`;

const Content = styled(BlockContent)`
  font-size: ${({ theme }) => theme.pSize};
  line-height: ${({ theme }) => theme.pLineHeight};
  @media (min-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    font-size: ${({ theme }) => theme.pSizeXl};
    line-height: ${({ theme }) => theme.pLineHeightXl};
  }
  font-family: Avenir;
  font-weight: 500;
  > figure {
    margin: 0;
    > img {
      width: 100%;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Twitter = styled.a`
  width: 80px;
`;

export default ArticleTemplate;

export const query = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      ...Article
    }
  }
`;
