import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from '../molecules/header';

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <Header />
    {children}
    <div>footer</div>
  </LayoutWrapper>
);

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
