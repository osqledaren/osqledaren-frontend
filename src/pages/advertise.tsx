import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import styled from '@emotion/styled';
import H from '../atoms/H';
import P from '../atoms/P';
import theme from '../styles/theme';

const Advertise: FunctionComponent = () => (
  <Layout>
    <AdvertiseContainer>
      <Infotext>
        <About>
          <H variant="4">Annonsera</H>
          <P size="12">
            Med sin upplaga på ca 10 000 ex är Osqledaren Sveriges största
            tekniska studenttidning. Tidningen är helt annonsfinansierad och
            skickas kostnadsfritt hem till alla kårmedlemmar vid Kungliga
            tekniska högskolan (KTH) i Stockholm fyra gånger per läsår.
            Osqledaren är det bästa sättet att nå studenter på KTH. Osqledaren
            drivs ideellt av studenter under ledning av en heltidsarvoderad
            chefredaktör (tillika ansvarig utgivare). Tillsammans skriver vi om
            det som händer på KTH, studentkåren, nöje, teknik, arbetsmarknad och
            annat som intresserar studenterna. Ambitionerna är höga både vad
            gäller det redaktionella innehållet såväl som produktionen.
            Osqledaren är ett utmärkt annonseringsalternativ för er som vill nå
            KTH-studenter eftersom vi kommunicerar med framtidens KTHingenjörer
            på ett naturligt och välbekant sätt, regelbundet och i stor volym.{' '}
          </P>
        </About>
        <Plan>
          <H variant="4">Utgivningsplan</H>
          <H variant="5">Utgåva 1</H>
          <P size="12">Manusstopp: 10/9 {<br />} Utgivning: 8/10</P>
          <H variant="5">Utgåva 2</H>
          <P size="12">Manusstopp: 24/10 {<br />} Utgivning: 19/11</P>
          <H variant="5">Utgåva 3</H>
          <P size="12">Manusstopp: 14/1 {<br />} Utgivning: 11/2</P>
          <H variant="5">Utgåva 4</H>
          <P size="12">Manusstopp: 25/3 {<br />} Utgivning: 19/4</P>
        </Plan>
      </Infotext>
      <Physical></Physical>
    </AdvertiseContainer>
  </Layout>
);

export default Advertise;

const AdvertiseContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const Infotext = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 4vw;
`;

const About = styled.div``;

const Plan = styled.div``;

const Physical = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
