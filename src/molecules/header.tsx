import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Filterbar from '../molecules/FilterBar'
import Img from 'gatsby-image';
import styled from '../styles/styled';

const Header: FunctionComponent = () => {
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
    <HeaderWrapper>
      <Logo fluid={data.logo.childImageSharp.fluid} />
      <Filterbar></Filterbar>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3%;
  padding-bottom: 3%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 90%;
  }
`;

const Logo = styled(Img)`
  width: 100%;
`;

export default Header;
