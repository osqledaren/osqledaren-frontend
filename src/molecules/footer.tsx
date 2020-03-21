import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Footer: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "OL-logga-vit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const goTo = (url: string) => (): void => {
    window.location.href = url;
  };

  return (
    <FooterWrapper>
      <LogoContainer to="/">
        <Logo fluid={data.logo.childImageSharp.fluid} />
      </LogoContainer>
      <SocialMedia>
        <FacebookWrapper onClick={goTo('https://www.facebook.com/osqledaren')}>
          <Img fluid={data.facebook.childImageSharp.fluid} />
        </FacebookWrapper>
        <InstagramWrapper
          onClick={goTo('https://www.instagram.com/osqledaren/')}
        >
          <Img fluid={data.instagram.childImageSharp.fluid} />
        </InstagramWrapper>
        <GithubWrapper onClick={goTo('https://github.com/osqledaren')}>
          <Img fluid={data.github.childImageSharp.fluid} />
        </GithubWrapper>
      </SocialMedia>
      <Links>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/">Advertize</PageLink>
        <PageLink to="/">Apply to OL</PageLink>
      </Links>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  justify-self: last baseline;

  width: 100%;
  height: 12rem;
  margin-top: 40px;
  background-color: black;
`;

const LogoContainer = styled(Link)`
  display: inline-flex;
  margin-left: 4vw;
  align-items: center;
`;

const Logo = styled(Img)`
  max-width: 80%;
  height: auto;
  width: 16vh;
`;

const SocialMedia = styled.div`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 30vw;
`;

const FacebookWrapper = styled.div`
  max-width: 80%;
  height: auto;
  width: 3vh;
  margin: 10%;
`;

const InstagramWrapper = styled.div`
  max-width: 80%;
  height: auto;
  width: 5vh;
`;

const GithubWrapper = styled.div`
  max-width: 100%;
  height: auto;
  width: 5vh;
  margin: 10%;
`;

const Links = styled.div`
  display: block;
  position: absolute;
  right: 10%;
  margin-top: 8vh;
`;

const PageLink = styled(Link)`
  display: block;
  padding: 0.25rem;
  color: white;
`;

export default Footer;
