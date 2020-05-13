import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';

const InfoWrapper: FunctionComponent = ({ children }) => (
  <Content>{children}</Content>
);

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
  min-height: 66vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 95vw;
  }
`;

export default InfoWrapper;
