import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from '../molecules/header';
import Footer from '../molecules/footer';
import Filterbar from '../molecules/FilterBar';

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <Header />
    <Filterbar></Filterbar>
    <Content>{children}</Content>
    <Footer />
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 72vw;
`;

export default Layout;
