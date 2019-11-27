import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Header: FunctionComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(
                relativePath: { eq: "logo-black.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Container>
            <Logo fluid={data.logo.childImageSharp.fluid} />
            <div>Filterbar</div>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 3%;
`;

const Logo = styled(Img)`
    width: 46%;
`;

export default Header;

