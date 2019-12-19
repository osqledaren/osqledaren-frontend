import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';

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
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 10%;
  min-width: 20%;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5%;
  font-size: 1vw;
  height: 1.5vw;
  word-break: break-all;
  text-align: center;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    -moz-transition: height 0.35s;
    -ms-transition: height 0.35s;
    -o-transition: height 0.35s;
    -webkit-transition: height 0.35s;
    transition: height 0.35s;
    height: 2.5vw;
    overflow: hidden;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    height: 10vw;
    color: black;
    font-size: 2.5vw;
    :hover {
      height: 13vw;
    }
  }
`;

export default FilterButton;
