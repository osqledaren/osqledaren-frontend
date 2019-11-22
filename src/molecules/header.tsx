import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const Header: FunctionComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            file(
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
            <Image fluid={data.file.childImageSharp.fluid} />
            <Link to="/about">Search</Link>
        </Container>
    )
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

const Image = styled(Img)`
    width: 50%;
`;
  
export default Header;

