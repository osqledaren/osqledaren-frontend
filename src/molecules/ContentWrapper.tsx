import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Filterbar from '../molecules/FilterBar';
import theme from '../styles/theme';

const ContentWrapper: FunctionComponent = ({ children }) => (
  <div>
    <Filterbar />
    <Content>{children}</Content>
  </div>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 72vw;
  @media (max-width: ${theme.breakpoints.sm + 'px'}) {
    width: 100vw;
  }
  @media (min-width: ${theme.breakpoints.xl + 'px'}) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default ContentWrapper;