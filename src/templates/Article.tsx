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
import TwitterIcon from '../images/Twitter_Logo_Blue.svg';

interface Props {
  data: {
    sanityArticle: Article;
  };
}
const creators = [
  {
    name: 'Skrivare Skrivarsson',
    mail: 'skrivare@osqledaren.se',
    contribution: 'Författare',
  },
  {
    name: 'Fotare Fotarsson',
    mail: 'fotare@osqledaren.se',
    contribution: 'Fotograf',
  },
];

const ArticleTemp: FC<Props> = ({ data }) => {
  return (
    <Layout>
      <InfoWrapper>
        <ArticleWrapper>
          <H variant="1" color={data.sanityArticle.category.color.hex}>
            {data.sanityArticle.title}
          </H>

          <CreatorsWrapper>
            {creators.map(creator => (
              <Creator key={creator.name}>
                <CreatorImg
                  fluid={data.sanityArticle.mainImage.asset.fluid}
                ></CreatorImg>
                <CreatorInfo>
                  <span>{creator.name + ' - ' + creator.contribution}</span>
                  <a href={'mailto:' + creator.mail}>{creator.mail}</a>
                </CreatorInfo>
              </Creator>
            ))}
          </CreatorsWrapper>

          <P size="22" lh="30">
            {data.sanityArticle.ingress}
          </P>
          <MainImg fluid={data.sanityArticle.mainImage.asset.fluid}></MainImg>
          <Content
            blocks={data.sanityArticle._rawContent}
            imageOptions={{ width: 250 }}
            projectId="ih69fm79"
            dataset="production"
          ></Content>
          <P>Publicerad: {data.sanityArticle.publishDate}</P>
          <Twitter
            href={
              'https://twitter.com/share?url=https://osqledaren.se/' +
              data.sanityArticle.category.slug.current +
              '/' +
              data.sanityArticle.slug.current
            }
            target="_blank"
            className="twitter-share-button"
            data-show-count="false"
          >
            <img src={TwitterIcon} alt="Twitter logo" />
          </Twitter>
        </ArticleWrapper>
      </InfoWrapper>
    </Layout>
  );
};

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 2% 10%;
  background-color: white;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16), 0 4px 5px rgba(0, 0, 0, 0.22);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    padding: 0 5%;
    background-color: white;
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

const CreatorInfo = styled(P)`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 20px;
  height: 100%;
  justify-content: center;
`;
const MainImg = styled(Img)`
  width: 90%;
  align-self: center;
  margin: 5vh 0;
`;
const Content = styled(BlockContent)`
  font-size: 22px;
  font-family: Avenir;
  font-weight: 500;
`;

const Twitter = styled.a`
  width: 80px;
  align-self: flex-end;
`;

export default ArticleTemp;

export const query = graphql`
  query ArticlePage($slug: String!) {
    sanityArticle(slug: { current: { eq: $slug } }) {
      ...Article
    }
  }
`;
