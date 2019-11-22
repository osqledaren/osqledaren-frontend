import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'

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
        <main>
            <Img fluid={data.file.childImageSharp.fluid} />
        </main>
    )
}
    
export default Header;

