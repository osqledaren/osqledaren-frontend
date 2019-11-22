import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const Layout: FunctionComponent = ({ children }) => (
  <Container>
    <div>header</div>
    <main>{children}</main>
    <div>footer</div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
