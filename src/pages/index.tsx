import React, { FunctionComponent } from 'react';
import H1 from '../atoms/H1';
import Layout from '../organisms/Layout';
import Article from '../molecules/Article';
import theme from '../styles/theme';

const Index: FunctionComponent = () => (
  <Layout>
    <Article
      title="Bra titel"
      date="Idag"
      description="test"
      category={theme.colors.primary}
    ></Article>
    <Article reverse={true} category={theme.colors.primary}></Article>
  </Layout>
);

export default Index;
