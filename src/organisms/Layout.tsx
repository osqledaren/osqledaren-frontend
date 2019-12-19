import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from '../molecules/header';
import Filterbar from '../molecules/FilterBar';

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Filterbar></Filterbar>
    <main>{children}</main>
    <div>footer</div>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
