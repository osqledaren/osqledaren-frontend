import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import logo from '../images/Osqledaren_logga_svart.png';
import styled from '../styles/styled';

const Header: FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <img src={logo} style={{ width: '50vw' }} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
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
