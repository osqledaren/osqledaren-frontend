import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';

const InfoWrapper: FunctionComponent = ({ children }) => (
  <Content>{children}</Content>
);

const Content = styled.div`
  width: 72vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + 'px'}) {
    width: 95vw;
  }
`;

export default InfoWrapper;
