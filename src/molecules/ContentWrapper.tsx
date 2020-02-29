import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Filterbar from '../molecules/FilterBar';
import theme from '../styles/theme';
import Header from './header';

const ContentWrapper: FunctionComponent = ({ children }) => (
  <div>
    <Filterbar />
    <Content>{children}</Content>
  </div>
);

const Content = styled.div`
  width: 72vw;
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 100vw;
  }
`;

export default ContentWrapper;
