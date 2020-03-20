import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import Layout from '../organisms/Layout';
import Link from '../atoms/Link';

const About: FunctionComponent = () => (
  <Layout>
    <AboutContainer>
      <AboutText>
        <H variant="3">Om Osqledaren</H>
        <P size="17" lh="20">
          Osqledaren är Tekniska Högskolans Studentkårs tidning som når ut till
          alla KTHs kårmedlemmar i cirka 10 000 exemplar, fyra gånger per läsår.
          Tidningen har till uppgift att bevaka kåren och KTH, men skriver också
          om andra ämnen som kan vara intressanta för teknologstudenter; som
          till exempel nöje, teknik, karriär och utbildning.
        </P>
        <Link to="/">Sök till OL</Link>
      </AboutText>
      <Contact>
        <H variant="3">Kontaktuppgifter</H>
        <ContactList>
          <P size="17" lh="20">
            <li>Chefredaktör och ansvarig utgivare:</li>
            <li>Simon Sundin</li>
            <li>076 58 74 666</li>
            <li>
              <a href="mailto:osqledaren@ths.kth.se">osqledaren@ths.kth.se</a>
            </li>
            <br />
            <li>Kårhuset Nymble, Drottning Kristinas väg 19 </li>
            <li>Osqledaren, THS, 100 44 Stockholm</li>
          </P>
        </ContactList>
        <Link to="/">Annonsera</Link>
      </Contact>
    </AboutContainer>
  </Layout>
);

export default About;

const Contact = styled.div`
  margin-top: 20px;
`;
const ContactList = styled.ol`
  list-style: none;
  padding: 0px;
`;

const AboutText = styled.div`
  margin-right: 5vw;
  margin-top: 20px;
  max-width: 800px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    margin-right: 0px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 5%;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;
