import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import H from '../atoms/H';
import P from '../atoms/P';
import styled from '../styles/styled';
import InfoWrapper from '../molecules/InfoWrapper';
import Backside from '../images/baksida.png';
import HalfPage from '../images/halvsida.png';
import WholePage from '../images/helsida.png';
import QuarterPage from '../images/kvart.png';

const Advertise: FunctionComponent = () => (
  <Layout>
    <InfoWrapper>
      <AdvertiseContainer>
        <Infotext>
          <About>
            <H variant="3">Annonsera</H>
            <P>
              Med sin upplaga på ca 10 000 ex är Osqledaren Sveriges största
              tekniska studenttidning. Tidningen är helt annonsfinansierad och
              skickas kostnadsfritt hem till alla kårmedlemmar vid Kungliga
              tekniska högskolan (KTH) i Stockholm fyra gånger per läsår.
              Osqledaren är det bästa sättet att nå studenter på KTH. Osqledaren
              drivs ideellt av studenter under ledning av en heltidsarvoderad
              chefredaktör (tillika ansvarig utgivare).
            </P>
            <P>
              Tillsammans skriver vi om det som händer på KTH, studentkåren,
              nöje, teknik, arbetsmarknad och annat som intresserar studenterna.
              Ambitionerna är höga både vad gäller det redaktionella innehållet
              såväl som produktionen. Osqledaren är ett utmärkt
              annonseringsalternativ för er som vill nå KTH-studenter eftersom
              vi kommunicerar med framtidens KTHingenjörer på ett naturligt och
              välbekant sätt, regelbundet och i stor volym.{' '}
            </P>
          </About>

          <Contact>
            <H variant="3">Kontakt</H>
            <P>
              Vill ni annonsera i Osqledaren? <br></br>
              <b>
                Maila oss:{' '}
                <a href="mailto:osqledaren@ths.kth.se">osqledaren@ths.kth.se</a>{' '}
              </b>
            </P>
          </Contact>
        </Infotext>
        <Plan>
          <H variant="3">Utgivningsplan</H>
          <Dates>
            <Date>
              <H variant="4">Utgåva 1</H>
              <P size="17" lh="22">
                Manusstopp: 10/9 {<br />} Utgivning: 8/10
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 2</H>
              <P size="17" lh="22">
                Manusstopp: 24/10 {<br />} Utgivning: 19/11
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 3</H>
              <P size="17" lh="22">
                Manusstopp: 14/1 {<br />} Utgivning: 11/2
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 4</H>
              <P size="17" lh="22">
                Manusstopp: 25/3 {<br />} Utgivning: 19/4
              </P>
            </Date>
          </Dates>
        </Plan>
        <Physical>
          <H variant="3">Annons i fysisk tidning</H>
          <Sections>
            <Section>
              <H variant="4">Info</H>
              <P>Tryckteknik: Fyrafärgs CMYK.</P>
              <P>Upplösning: 300 dpi</P>
              <P>Utfall: 3mm</P>
              <P>Inlaga: 120g TF Obestruket Offset</P>
              <P>Omslag: 240g TF Obestruket Offset</P>
            </Section>
            <Section>
              <H variant="4">Baksida</H>
              <SectionContent>
                <img src={Backside}></img>
                <P>
                  Mått: 208 x 230 mm <br />
                  <b>32 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Halvsida liggande/stående</H>
              <SectionContent>
                <img src={HalfPage}></img>
                <P>
                  Mått: 208 x 135 mm / 104 x 270 mm <br />
                  <b>15 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Helsida, första uppslaget</H>

              <SectionContent>
                <img src={WholePage}></img>
                <P>
                  Mått: 208 x 270 mm <br />
                  <b>26 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Kvartssida stående</H>
              <SectionContent>
                <img src={QuarterPage}></img>
                <P>
                  Mått: 52 x 67,5 mm <br />
                  <b>10 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Helsida, inlaga</H>
              <SectionContent>
                <img src={WholePage}></img>
                <P>
                  Mått: 208 x 270 mm <br />
                  <b>24 000 kr</b>
                </P>
              </SectionContent>
            </Section>
          </Sections>
        </Physical>
      </AdvertiseContainer>
    </InfoWrapper>
  </Layout>
);

export default Advertise;

const AdvertiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: white;
  padding: 5%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const Infotext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid lightgray 1px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const About = styled.div`
  width: 60%;
  max-width: 1000px;
  margin-right: 4vw;
`;

const Plan = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 60%;
  }
`;

const Dates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Date = styled.div`
  min-width: 150px;
  margin-right: 5px;
`;

const Physical = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Sections = styled(Dates)`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
  }
`;
const Section = styled.div`
  width: 30%;
  margin-right: 5px;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 40%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 100%;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 100%;
    height: 100%;
    margin-right: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: row;
    width: 100%;
    > img {
      width: 50%;
    }
  }
`;

const Contact = styled.div`
  margin-top: 20px;
`;
