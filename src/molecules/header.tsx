import React, { FunctionComponent } from 'react';
import logo from '../images/Osqledaren_logga_svart.png';
import styled from '../styles/styled';
import { Link } from 'gatsby';

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper to="/">
      <HeaderImage src={logo} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh 0;

  /* VW Heights below set fix a flickering issue in Safari by making HeaderWrappers height static. 
  Calculated like this: height = % width of HeaderImage / 3.3 (The ratio of the sides of the logo)*/
  height: 10.6vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    height: 15.15vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    height: 25.75vw;
  }
`;

const HeaderImage = styled.img`
  width: 35%;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 85%;
  }
`;

export default Header;
