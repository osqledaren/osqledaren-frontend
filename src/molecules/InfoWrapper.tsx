import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const InfoWrapper: FunctionComponent = ({ children }) => (
  <Content>{children}</Content>
);

const Content = styled.div`
  width: 72vw;
`;

export default InfoWrapper;