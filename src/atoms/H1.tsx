import React, { FunctionComponent } from 'react';

interface H1Props {
  text: string;
}

const H1: FunctionComponent<H1Props> = props => (
  <h1
    style={{
      color: 'hotpink',
    }}
  >
    {props.text}
  </h1>
);

export default H1;
