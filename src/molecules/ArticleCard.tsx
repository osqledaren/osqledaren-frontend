import React, { FunctionComponent, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import MediaCard from './MediaCard';
import Img from 'gatsby-image';
import arrowImg from '../images/down.png';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import B from '../atoms/B';
import { Article } from '../utils/types';

interface Props {
  reverse?: boolean;
  article: Article;
  expand?: boolean;
  to?: string;
}

const ArticleCard: FunctionComponent<Props> = ({
  reverse,
  article: { title, mainImage, publishDate, ingress, category },
  to = '/',
  expand = true,
}) => {
  const [isExpanded, setExpand] = useState(expand);

  function checkExpand() {
    setExpand(!isExpanded);
  }

  return (
    <MediaCard category={category}>
      <ArticleWrapper>
        <LinkWrapper to={to}>
          <ArticleContent reverse={reverse} expand={isExpanded}>
            {mainImage && (
              <Image expand={isExpanded}>
                <Img fluid={mainImage.asset.fluid}></Img>
              </Image>
            )}
            <Text expand={isExpanded} reverse={reverse}>
              <Title variant="4">{title ? title : 'Titel saknas'}</Title>
              <Date size="11" expand={isExpanded}>
                {publishDate ? publishDate : 'Datum saknas'}
              </Date>
              <Description expand={isExpanded}>
                {ingress
                  ? ingress
                  : 'Beskrivning saknas Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              </Description>
            </Text>
          </ArticleContent>
        </LinkWrapper>

        <ArrowWrapper expand={isExpanded} onClick={checkExpand}>
          <Arrow expand={isExpanded} src={arrowImg}></Arrow>
        </ArrowWrapper>
      </ArticleWrapper>
    </MediaCard>
  );
};

const ArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    flex-direction: column;
  }
`;
const LinkWrapper = styled(Link)`
  width: 95%;
  text-decoration: none;
`;
const ArticleContent = styled.div<{ reverse: boolean; expand: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  flex-direction: ${props => {
    return props.reverse && props.expand ? 'row-reverse' : 'row';
  }};
  @media (max-width: ${props => {
    return props.theme.breakpoints.sm + 'px';
  }}) {
    flex-direction: column;
    margin-right: 0;
  }
  /*remove the following to follow the reverse logic on big screens
  @media (min-width: ${props => {
    return props.theme.breakpoints.xl + 'px';
  }}) {
    flex-direction: row;
  }*/
`;

const Image = styled.div<{ expand: boolean }>`
  display: ${props => {
    return props.expand ? '' : 'none';
  }};
  width: 40%;
  align-self: center;
  animation: fadeIn 0s forwards;
  animation-duration: 1.5s;
  opacity: 0;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

const Text = styled.div<{ expand: boolean; reverse: boolean }>`
  width: ${props => {
    return props.expand ? '55%' : '100%';
  }};
  word-wrap: break-word;

  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 100%;
  }
`;

const Title = styled(H)`
  margin: 0;
  visibility: visible;
  @media (max-width: ${props => {
      return props.theme.breakpoints.md + 'px';
    }}) {
    font-size: 18px;
    padding-top: 0rem;
  }
`;

const Date = styled(B)<{ expand: boolean }>`
  display: ${props => {
    return props.expand ? '' : 'none';
  }};
  color: gray;
  @media (max-width: ${props => {
      return props.theme.breakpoints.md + 'px';
    }}) {
    margin: 1rem 0 1rem 0;
  }
  animation: fadeIn 0s forwards;
  animation-duration: 1.5s;
  opacity: 0;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Description = styled(P)<{ expand: boolean }>`
  display: ${props => {
    return props.expand ? '-webkit-box' : 'none';
  }};
  animation: fadeIn 0s forwards;
  animation-duration: 1.5s;
  opacity: 0;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${props => {
      return props.theme.breakpoints.md + 'px';
    }}) {
    font-size: 1rem;
    line-height: 1.15rem;
    -webkit-line-clamp: 4;
  }
`;

const ArrowWrapper = styled.div<{ expand: boolean }>`
  display: flex;
  height: 100% - 1rem;
  padding-top: 1rem;
  padding-right: 0.5rem;
  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 100%;
    justify-content: center;
    padding: 0 0 0.4rem 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Arrow = styled.img<{ expand: boolean }>`
  width: 25px;
  height: 25px;
  transform: ${props => {
    return props.expand ? 'rotate(180deg)' : '';
  }};
`;

export default ArticleCard;
