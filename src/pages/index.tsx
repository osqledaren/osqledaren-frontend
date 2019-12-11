import React, { FunctionComponent } from 'react';
import H from '../atoms/H';
import Layout from '../organisms/Layout';
import P from '../atoms/P';
import B from '../atoms/B';
import Article from '../molecules/Article';

const Index: FunctionComponent = () => (
  <Layout>
    <H>Main content</H>
    <P>
      Hej <B>bold</B>
    </P>
    <Article category="red"></Article>
    <Article category="blue" reverse></Article>
  </Layout>
);

export default Index;
