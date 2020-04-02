import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';
import { navigate } from 'gatsby';

interface Props {
  name: string;
  background: string;
  to: string;
}

interface FilterButtProps {
  background: string;
}

const FilterButton: FunctionComponent<Props> = ({ name, background, to }) => (
  <FilterButt
    background={background}
    onClick={() => {
      navigate(to);
    }}
  >
    <span>{name}</span>
  </FilterButt>
);

const FilterButt = styled.div<FilterButtProps>`
  background: ${props => {
    return props.background;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35vw;
  width: 72vw;
  color: ${props => {
    return props.background == props.theme.colors.underhallning
      ? 'black'
      : 'white';
  }};
  line-height: 12px;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  font-size: 1vw;
  height: 2vw;
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
    height: 7vw;
    font-size: 0.5em;
    :hover {
      height: 7vw;
    }
  }
`;

export default FilterButton;
