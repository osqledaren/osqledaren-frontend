import React, { FunctionComponent } from 'react';
import { Link as IntLink } from 'gatsby';
import styled from '../styles/styled';
import P from '../atoms/P';
import ExtLink from '../atoms/Link';
import OlLogo from '../images/OL-logga-vit.png';
import twitter from '../images/twitter-white.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <LogoContainer to="/">
        <Logo src={OlLogo} />
      </LogoContainer>
      <SocialMedia>
        <ExtLink to="https://www.facebook.com/osqledaren">
          <Facebook src={facebook} />
        </ExtLink>
        <ExtLink to="https://www.instagram.com/osqledaren/">
          <SocialIcon src={instagram} />
        </ExtLink>
        <ExtLink to="https://twitter.com/osqledaren">
          <SocialIcon src={twitter} />
        </ExtLink>
        <ExtLink to="https://github.com/osqledaren">
          <SocialIcon src={github} />
        </ExtLink>
      </SocialMedia>
      <InfoWrapper>
        <Links>
          <PageLink to="/about">Om oss</PageLink>
          <PageLink to="/">Annonsera</PageLink>
        </Links>
        <Info>
          Ansvarig utgivare: Simon Sundin
          <br></br>© 2008 - 2020 Osqledaren.
        </Info>
      </InfoWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: inline-flex;
  justify-self: baseline;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 92vw;
  padding-left: 4vw;
  padding-right: 4vw;
  margin-top: 5vh;
  background-color: black;
`;

const LogoContainer = styled(IntLink)`
  display: inline-flex;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 140px;
  min-width: 80px;
  height: auto;
  width: 16vw;
`;

const SocialMedia = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 50vw;
  }
`;

const SocialIcon = styled.img`
  width: 5vw;
  max-width: 70px;
  min-width: 30px;
  :hover {
    cursor: pointer;
  }
`;

const Facebook = styled(SocialIcon)`
  max-width: 33px;
  width: 3vw;
  min-width: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    margin-top: 3vh;
  }
`;

const PageLink = styled(IntLink)`
  font-size: 16pt;
  color: white;
  :hover {
    text-decoration: none;
  }
`;

const Info = styled(P)`
  color: white;
`;

export default Footer;
