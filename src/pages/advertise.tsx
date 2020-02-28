import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import styled from '@emotion/styled';

const Advertise: FunctionComponent = () => (
  <Layout>
    <Infotext>
      <About>Här är lite info...</About>
      <Plan>Mer info</Plan>
    </Infotext>
    <Physical></Physical>
  </Layout>
);

const Infotext = styled.div`
  display: flex;
  position: static;
`;

const About = styled.div``;

const Plan = styled.div``;

const Physical = styled.div``;

export default Advertise;
