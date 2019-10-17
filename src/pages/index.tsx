import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import H1 from '../atoms/H1';

const Index: FunctionComponent = () => (
  <main>
    <H1 text="Osqledaren" />
    <Link to="/about">About</Link>
  </main>
);

export default Index;
