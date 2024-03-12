import React, { FunctionComponent } from "react";
import { Link as InternalLink } from "gatsby";
import styled from "../styles/styled";
import P from "../atoms/P";
import ExternalLink from "../atoms/Link";
import OlLogo from "../images/OL-logga-vit.png";
//import twitter from '../images/twitter-white.png';
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import github from "../images/github.png";

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <LogoContainer to="/">
        <Logo src={OlLogo} />
      </LogoContainer>
      <SocialMedia>
        <ExternalLink to="https://www.facebook.com/osqledaren">
          <Facebook src={facebook} />
        </ExternalLink>
        <ExternalLink to="https://www.instagram.com/osqledaren/">
          <SocialIcon src={instagram} />
        </ExternalLink>
        <ExternalLink to="https://github.com/osqledaren">
          <SocialIcon src={github} />
        </ExternalLink>
      </SocialMedia>
      <InfoWrapper>
        <Links>
          <PageLink to="/about">
            <P color="white">Om oss</P>
          </PageLink>
          <PageLink to="/advertise">
            <P color="white">Annonsera</P>
          </PageLink>
          <ExternalLink to="https://docs.google.com/document/d/1bIo8LqcSZzrZMCEG1R0_nQvBQuTCY5o9LpmodeoE8PI/">
            <UnderlineP color="white">Insändare</UnderlineP>
          </ExternalLink>
        </Links>
        <P size="16pt" color="white">
          Ansvarig utgivare: Raquel Frescia <br />© 2008 -{" "}
          {new Date().getFullYear()} Osqledaren.
        </P>
      </InfoWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  padding-left: 4vw;
  padding-right: 4vw;
  margin-top: 5vh;
  background-color: black;
`;

const LogoContainer = styled(InternalLink)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 16vw;
  max-width: 140px;
  min-width: 80px;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    width: 60vw;
  }
`;

const SocialIcon = styled.img`
  width: 4vw;
  max-width: 70px;
  min-width: 35px;
  :hover {
    cursor: pointer;
  }
`;

const Facebook = styled(SocialIcon)`
  width: 2vw;
  max-width: 33px;
  min-width: 18px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const PageLink = styled(InternalLink)`
  color: white;
  :hover {
    text-decoration: none;
  }
`;

const UnderlineP = styled(P)`
  text-decoration: underline;
`;

export default Footer;
