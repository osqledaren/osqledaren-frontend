import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';

const ContentWrapper: FunctionComponent = ({ children }) => (
  <Content>{children}</Content>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72vw;
  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 100vw;
  }
`;

export default ContentWrapper;
