import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
      <Link to="/">
        <Logo fluid={data.logo.childImageSharp.fluid} />
      </Link>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 80%;
    margin-top: 50px;
  }
`;

const Logo = styled(Img)`
  width: 50vw;
`;

export default Header;
