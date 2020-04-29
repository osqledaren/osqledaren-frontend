import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import Img from 'gatsby-image';
import Layout from '../organisms/Layout';
import InfoWrapper from '../molecules/InfoWrapper';

const About: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      staff: file(relativePath: { eq: "staff.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <InfoWrapper>
        <AboutContainer>
          <AboutText>
            <H variant="3">Om Osqledaren</H>
            <P>
              Osqledaren är Tekniska Högskolans Studentkårs tidning som når ut
              till alla KTHs kårmedlemmar i cirka 10 000 exemplar, fyra gånger
              per läsår. Tidningen har till uppgift att bevaka kåren och KTH,
              men skriver också om andra ämnen som kan vara intressanta för
              teknologstudenter; som till exempel nöje, teknik, karriär och
              utbildning.
            </P>
            <P>
              Vill ni annonsera i Osqledaren?{' '}
              <Link to="/advertise">Klicka här!</Link>
            </P>
          </AboutText>

          <Contact>
            <H variant="3">Kontaktuppgifter</H>
            <ContactList>
              <P>
                <li>Chefredaktör: Robin Kammerlander</li>
                <br />
                <li>Ansvarig utgivare:</li>
                <li>Simon Sundin</li>
                <li>
                  <a href="tel:087909888">08 79 09 888</a>
                </li>
                <li>
                  <a href="mailto:osqledaren@ths.kth.se">
                    osqledaren@ths.kth.se
                  </a>
                </li>
                <br />
                <li>Kårhuset Nymble, Drottning Kristinas väg 19 </li>
                <li>Osqledaren, THS, 100 44 Stockholm</li>
              </P>
            </ContactList>
          </Contact>
          <ImageWrapper>
            <Img fluid={data.staff.childImageSharp.fluid} />
          </ImageWrapper>
        </AboutContainer>
      </InfoWrapper>
    </Layout>
  );
};
export default About;

const Contact = styled.div`
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 1000 + 'px'}) {
    order: 3;
  }
`;

const ContactList = styled.ol`
  list-style: none;
  padding: 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const AboutText = styled.div`
  margin-top: 20px;
  max-width: 800px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  padding: 0 5%;
  margin: 20px 0;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 350 + 'px'}) {
    flex-direction: column;
  }
`;
