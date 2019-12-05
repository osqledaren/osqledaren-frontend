import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '../styles/styled';
import H1 from '../atoms/H1';

const Article: FunctionComponent<ArticleProps> = ({ reverse }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-black.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <ArticleWrapper reverse={reverse}>
      <Color></Color>
      <Image fluid={data.logo.childImageSharp.fluid} />
      <Text>
        <H1>Titel</H1>
        BeskrivningBeskrivningBeskrivningBeskrivningah
        fahadklsöakdlasklösadklöaksölfjadkhakdakdlöaskd
        löasköldaskslöasdklaöskdlöaskdlöasköldskaöldkaöl
        BeskrivningBeskrivningBeskrivningBeskrivningjBeskr
        ivningBeskrivningBeskrivningBeskrivning
      </Text>
    </ArticleWrapper>
  );
};

interface ArticleProps {
  reverse?: boolean;
}

const ArticleWrapper = styled.div<ArticleProps>`
  display: flex;
  flex-direction: ${props => {
    return props.reverse ? 'row-reverse' : 'row';
  }};
  height: 13rem;
  align-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 90%;
  }
`;

const Color = styled.div`
  background: red;
  width: 2%;
  margin: 1rem;
  border-radius: 25px;
`;
const Image = styled(Img)`
  align-self: center;
  width: 50%;
`;

const Text = styled.div`
  width: 40%;
  word-wrap: break-word;
  overflow: hidden;
  padding-left: 1rem;
`;

export default Article;
