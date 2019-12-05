import React, { FunctionComponent } from 'react';
import H1 from '../atoms/H1';
import Layout from '../organisms/Layout';
import Article from '../molecules/Article';

const Index: FunctionComponent = () => (
  <Layout>
    <H1>Main content</H1>
    <Article></Article>
    <Article reverse={true}></Article>
  </Layout>
);

export default Index;
