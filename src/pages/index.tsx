import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import H1 from '../atoms/H1';

const Index: FunctionComponent = () => (
  <main>
    <H1>Osqledaren</H1>
    <Link to="/about">About</Link>
  </main>
);

export default Index;
