import React, { FunctionComponent, useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import MediaCard from './MediaCard';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import theme from '../styles/theme';
import H from '../atoms/H';
import P from '../atoms/P';
import B from '../atoms/B';

interface ArticleProps {
  reverse?: boolean;
  title?: string;
  date?: string;
  description?: string;
  category?: string; //Takes: branch, english, olGraver, underhallning, aktuellt or podcast as input
  expand?: boolean;
  to?: string;
}

const ArticleCard: FunctionComponent<ArticleProps> = ({
  reverse,
  title,
  date,
  description,
  category,
  to = '/',
  expand = true,
}) => {
  //Update how to fetch images when the cms is ready, this only fetches a local image./Johannes
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "test.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
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
    if (isExpanded) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }

  return (
    <MediaCard category={category}>
      <LinkWrapper to={to}>
        <ArticleContent reverse={reverse} expand={isExpanded}>
          <Image expand={isExpanded}>
            <Img fluid={data.logo.childImageSharp.fluid}></Img>
          </Image>
          <Text expand={isExpanded} reverse={reverse}>
            <Titel variant="4">{title ? title : 'Titel saknas'}</Titel>
            <Date size="11" expand={isExpanded}>
              {date ? date : 'Datum saknas'}
            </Date>
            <Description expand={isExpanded}>
              {description
                ? description
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
const ArticleContent = styled.div<ArticleProps>`
  display: flex;
  margin: 1rem;
  flex-direction: ${props => {
    return props.reverse && props.expand ? 'row-reverse' : 'row';
  }};
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const Image = styled.div<ArticleProps>`
  display: ${props => {
    return props.expand ? '' : 'none';
  }};
  width: 50%;
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

const Text = styled.div<ArticleProps>`
  width: ${props => {
    return props.expand ? '100%' : '50%';
  }};
  padding: ${props => {
    if (props.expand) {
      return props.reverse ? '0 1rem 0 0' : '0 0 0 1rem';
    } else {
      return '0';
    }
  }};
  word-wrap: break-word;
  color: black;

  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 100%;
    padding: 0;
  }
`;

const Titel = styled(H)`
  margin: 0;
  visibility: visible;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    font-size: 20px;
    padding-top: 0rem;
  }
`;

const Date = styled(B)<ArticleProps>`
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

const Description = styled(P)<ArticleProps>`
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

const Arrow = styled.div<ArticleProps>`
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
