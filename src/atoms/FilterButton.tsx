import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface Props {
    name: string;
    background: string;
}

interface FilterButtProps {
    background: string;
}

const FilterButton: FunctionComponent<Props> = ({name, background}) => (
  <FilterButt background={background}>
    <div className='segment'>{name}</div>
  </FilterButt>
);

const FilterButt = styled.div<FilterButtProps>`
  background: ${   props => {
      return props.background
      }   };
  width: 10%;
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 5px;
`;

export default FilterButton;
