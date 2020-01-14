import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
  return (
    <FooterWrapper>
      <LogoContainer>
        <Logo fluid={data.logo.childImageSharp.fluid} />
      </LogoContainer>
      <SocialMedia>
        <Facebook fluid={data.facebook.childImageSharp.fluid} />
        <Instagram fluid={data.instagram.childImageSharp.fluid} />
        <Github fluid={data.github.childImageSharp.fluid} />
      </SocialMedia>
      <Links>
        <Link>About</Link>
        <Link>Advertize</Link>
        <Link>Apply to OL</Link>
      </Links>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 24%;
  background-color: black;
`;

const LogoContainer = styled.div`
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

const Facebook = styled(Img)`
  max-width: 80%;
  height: auto;
  width: 3vh;
  margin: 10%;
`;

const Instagram = styled(Img)`
  max-width: 80%;
  height: auto;
  width: 4vh;
`;

const Github = styled(Img)`
  max-width: 80%;
  height: auto;
  width: 4vh;
`;

const Links = styled.div``;

const Link = styled.div`
  color: white;
`;

export default Footer;
