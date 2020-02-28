import React, { FunctionComponent } from 'react';
import FilterButton from '../atoms/FilterButton';
import styled from '../styles/styled';

const Filterbar: FunctionComponent = () => (
  <Bar>
    <FilterButton name="Branch" background="#dc702d"></FilterButton>
    <FilterButton name="English" background="#374e9b"></FilterButton>
    <FilterButton name="OL Gräver" background="#008247"></FilterButton>
    <FilterButton name="Underhållning" background="#f5c832"></FilterButton>
    <FilterButton name="Aktuellt" background="#d51217"></FilterButton>
    <FilterButton name="Podcast" background="#606263"></FilterButton>
  </Bar>
);

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 72vw;
  padding-bottom: 2%;
  max-height: 2vw;
  position: sticky;
  top: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 100%;
    position: fixed;
    top: 0;
  }
`;

export default Filterbar;
