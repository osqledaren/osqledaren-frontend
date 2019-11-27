import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Layout: FunctionComponent = ({ children }) => (
  <LayoutWrapper>
    <div>header</div>
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
