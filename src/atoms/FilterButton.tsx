import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface Props {
  name: string;
  background: string;
}

interface FilterButtProps {
  background: string;
}

const FilterButton: FunctionComponent<Props> = ({ name, background }) => (
  <FilterButt background={background}>
    <div className="segment">{name}</div>
  </FilterButt>
);

const FilterButt = styled.div<FilterButtProps>`
  background: ${props => {
    return props.background;
  }};
  max-width: 10%;
  min-width: 20%;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px;
  font-size: 1vw;
  height: 2.5vh;
  :hover{
  -moz-transition: height .35s;
  -ms-transition: height .35s;
  -o-transition: height .35s;
  -webkit-transition: height .35s;
  transition: height .35s;
  height: 4vh;
  overflow: hidden;
}
  }
`;

export default FilterButton;
