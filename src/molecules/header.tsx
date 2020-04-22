import React, { FunctionComponent } from 'react';
import logo from '../images/Osqledaren_logga_svart.png';
import styled from '../styles/styled';
import { Link } from 'gatsby';

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper to="/">
      <img src={logo} style={{ width: '50vw' }} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Link)`
  width: 50%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2%;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 80%;
    margin-top: 50px;
  }
`;

export default Header;
