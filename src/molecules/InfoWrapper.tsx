import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';

const InfoWrapper: FunctionComponent = ({ children }) => (
  <Content>{children}</Content>
);

const Content = styled.div`
  width: 72vw;
  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 100vw;
  }
`;

export default InfoWrapper;
