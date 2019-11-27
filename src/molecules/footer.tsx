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
    }
  `);
  return (
    <FooterWrapper>
      <Logo fluid={data.logo.childImageSharp.fluid} />
      <SocialMedia></SocialMedia>
      <Links></Links>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3%;
`;

const Logo = styled(Img)`
  width: 46%;
`;

const SocialMedia = styled.div``;

const Links = styled.div``;

export default Footer;
