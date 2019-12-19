import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import theme from '../styles/theme';
import H from '../atoms/H';
import P from '../atoms/P';
import B from '../atoms/B';

interface ArticleProps {
  reverse?: string;
  title?: string;
  date?: string;
  description?: string;
  category?: string;
}

const Article: FunctionComponent<ArticleProps> = ({
  reverse,
  title,
  date,
  description,
  category,
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
    }
  `);
  return (
    <ArticleWrapper to="/">
      <Color category={category}></Color>
      <ArticleContent reverse={reverse}>
        <Image reverse={reverse}>
          <Img fluid={data.logo.childImageSharp.fluid}></Img>
        </Image>
        <Text>
          <Titel variant="4">{title ? title : 'Titel saknas'}</Titel>
          <Date size="11">{date ? date : 'Datum saknas'}</Date>
          <Description>
            {description
              ? description
              : 'Beskrivning saknas Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          </Description>
        </Text>
      </ArticleContent>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled(Link)<ArticleProps>`
  display: flex;
  flex-direction: ${props => {
    return props.reverse == 'true' ? 'row-reverse' : 'row';
  }};
  width: 60%;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-content: center;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16), 0 4px 5px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    width: 80%;
  }
`;

const Color = styled.div<ArticleProps>`
  background: ${props => {
    return theme.colors[props.category];
  }};
  width: 12px;
  min-width: 12px;
`;

const ArticleContent = styled.div<ArticleProps>`
  display: flex;
  width: 100%;
  flex-direction: ${props => {
    return props.reverse == 'true' ? 'row-reverse' : 'row';
  }};
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
  }
`;

const Image = styled.div<ArticleProps>`
  width: 50%;
  margin: ${props => {
    return props.reverse == 'true' ? '0 1rem 0 0' : '0 0 0 1rem';
  }};
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 85%;
    margin-left: 2rem;
  }
`;

const Text = styled.div`
  width: 50%;
  word-wrap: break-word;
  padding-left: 2rem;
  padding-right: 2rem;
  color: black;
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 85%;
  }
`;

const Titel = styled(H)`
  margin: 0;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    font-size: 20px;
    padding-top: 1rem;
  }
`;

const Date = styled(B)`
  color: gray;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    margin: 1rem 0 1rem 0;
  }
`;

const Description = styled(P)`
  display: block;
  overflow: hidden;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    font-size: 16px;
    -webkit-line-clamp: 4;
  }
`;

export default Article;
