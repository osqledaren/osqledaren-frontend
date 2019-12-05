import React, { FunctionComponent } from 'react';
import H from '../atoms/H';
import Layout from '../organisms/Layout';
import P from '../atoms/P';
import B from '../atoms/B';

const Index: FunctionComponent = () => (
  <main>
    <Layout>
      <H>Main content</H>
      <P>
        Hej <B>bold</B>
      </P>
    </Layout>
  </main>
);

export default Index;
