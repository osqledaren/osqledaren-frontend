import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';
import Filterbar from '../molecules/FilterBar';

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
  @media (max-width: ${props => {
      return props.theme.breakpoints.sm + 'px';
    }}) {
    width: 100vw;
  }
  @media (min-width: ${props => {
      return props.theme.breakpoints.xl + 'px';
    }}) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default ContentWrapper;
