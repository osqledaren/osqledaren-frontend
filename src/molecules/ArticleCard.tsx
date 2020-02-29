import React, { FunctionComponent, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import MediaCard from './MediaCard';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import theme from '../styles/theme';
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
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "down.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const [isExpanded, setExpand] = useState(expand);

  function checkExpand() {
    setExpand(!isExpanded);
  }

  return (
    <MediaCard category={category}>
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
      <Arrow expand={isExpanded} onClick={checkExpand}>
        <Img fluid={data.arrow.childImageSharp.fluid}></Img>
      </Arrow>
    </MediaCard>
  );
};

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
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
    margin-right: 0;
  }
  /*add the following to not reverse the articles on big screens*/
  /*@media (min-width: ${theme.breakpoints.xl + 'px'}) {
    flex-direction: row;
  }*/
`;

const Image = styled.div<{ expand: boolean }>`
  display: ${props => {
    return props.expand ? '' : 'none';
  }};
  width: 45%;
  animation: fadeIn 0s forwards;
  animation-duration: 1.5s;
  opacity: 0;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

const Text = styled.div<{ expand: boolean; reverse: boolean }>`
  width: ${props => {
    return props.expand ? '45%' : '100%';
  }};
  word-wrap: break-word;
  color: black;

  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 100%;
  }
`;

const Title = styled(H)`
  margin: 0;
  visibility: visible;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    font-size: 20px;
    padding-top: 0rem;
  }
`;

const Date = styled(B)<{ expand: boolean }>`
  display: ${props => {
    return props.expand ? '' : 'none';
  }};
  color: gray;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
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
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    font-size: 16px;
    -webkit-line-clamp: 4;
  }
`;

const Arrow = styled.div<{ expand: boolean }>`
  height: 100%;
  width: 5%;
  margin-right: 2%;
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 8%;
  }
  &:hover {
    cursor: pointer;
  }
  padding-top: 1rem;
  transform: ${props => {
    return props.expand ? 'rotate(180deg)' : '';
  }};
`;

export default ArticleCard;
