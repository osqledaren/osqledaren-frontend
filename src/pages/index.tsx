import React, { FunctionComponent } from 'react';
import H from '../atoms/H';
import Layout from '../organisms/Layout';
import P from '../atoms/P';
import B from '../atoms/B';
import Article from '../molecules/Article';
import theme from '../styles/theme';

const Index: FunctionComponent = () => (
  <Layout>
    <H>Main content</H>
    <P>
      Hej <B>bold</B>
    </P>
    <Article
      category={'branch'}
      title="En najs artikel om coola saker"
      date="2020-01-01"
    ></Article>
    <Article category={'english'} reverse="true" expand="false"></Article>
    <Article category={'olGraver'}></Article>
    <Article category={'underhallning'} reverse="true"></Article>
    <Article category={'aktuellt'}></Article>
  </Layout>
);

export default Index;
