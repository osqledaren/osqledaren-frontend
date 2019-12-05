import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import H1 from '../atoms/H1';

interface ArticleProps {
  reverse?: boolean;
  title?: string;
  date?: string;
  description?: string;
}

const Article: FunctionComponent<ArticleProps> = ({
  reverse,
  title,
  date,
  description,
}) => {
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
    <ArticleWrapper to="/about" reverse={reverse}>
      <Color reverse={reverse}></Color>
      <Image fluid={data.logo.childImageSharp.fluid} />
      <Text>
        <Titel>{title ? title : 'Titel saknas'}</Titel>
        <Date>{date ? date : 'Datum saknas'}</Date>
        {description ? description : 'Beskrivning saknas'}
      </Text>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled(Link)<ArticleProps>`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  align-content: center;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16), 0 4px 5px rgba(0, 0, 0, 0.22);
  }
  flex-direction: ${props => {
    return props.reverse ? 'row-reverse' : 'row';
  }};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 70%;
  }
`;

const Color = styled.div<ArticleProps>`
  background: #d51217;
  width: 1.5%;
  margin: ${props => {
    return props.reverse ? '0 0 0 1rem' : '0 1rem 0 0';
  }};
`;
const Image = styled(Img)`
  align-self: center;
  width: 50%;
`;

const Titel = styled(H1)`
  margin: 0;
  color: black;
`;

const Date = styled.h5`
  margin: 1rem 0 2rem 0;
`;
const Text = styled.div`
  width: 50%;
  word-wrap: break-word;
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
  color: black;
`;

export default Article;
