import React, { FunctionComponent } from 'react';
import Layout from '../organisms/Layout';
import InfoWrapper from '../molecules/InfoWrapper';

const Subscribe: FunctionComponent = () => {

  return (
    <Layout>
      <InfoWrapper>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd9nWTHHGgAyT03t-WTH9XEgA8J-prcYSsBv_PTZNSexOkSeg/viewform?embedded=true" width="640" height="1428" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
      </InfoWrapper>
    </Layout>
  );
};
export default Subscribe;