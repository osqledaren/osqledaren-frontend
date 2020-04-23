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
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 1vh 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    margin-top: 50px;
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
