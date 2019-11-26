import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
            search: file(
                relativePath: { eq: "search.png" }) {
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
            <Search fluid={data.search.childImageSharp.fluid}/>                        
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const Logo = styled(Img)`
    width: 50%;
`;

const Search = styled(Img)`
    width: 2%;
`;
  
export default Header;

