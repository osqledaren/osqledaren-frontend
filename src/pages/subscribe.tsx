import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import InfoWrapper from '../molecules/InfoWrapper';

const Subscribe: FunctionComponent = () => {

  return (
    <Layout>
      <InfoWrapper>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvwSrOgJ9GiJ0whnDvjKNvmfiffqGAC2z3PjxVeLoFKbZf4g/viewform?embedded=true" width="640" height="1130" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
      </InfoWrapper>
    </Layout>
  );
};
export default Subscribe;