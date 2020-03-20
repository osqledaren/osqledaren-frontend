import React, { FunctionComponent } from 'react';
import FilterButton from '../atoms/FilterButton';
import styled from '../styles/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Category } from '../utils/types';

const Filterbar: FunctionComponent = () => {
  const {
    allSanityCategory,
  }: {
    allSanityCategory: { edges: Array<{ node: Category }> };
  } = useStaticQuery(graphql`
    query {
      allSanityCategory {
        edges {
          node {
            ...Category
          }
        }
      }
    }
  `);
  return (
    <Bar>
      {allSanityCategory.edges
        .filter(({ node }) => node.menu)
        .sort((a, b) => a.node.order - b.node.order)
        .map(({ node }) => (
          <FilterButton
            to={node.slug.current}
            key={node.slug.current}
            name={node.title}
            background={node.color.hex}
          ></FilterButton>
        ))}
      <FilterButton
        to="/podcasts"
        name="Podcasts"
        background="#999"
      ></FilterButton>
    </Bar>
  );
};
const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 72vw;
  padding-bottom: 2%;
  max-height: 2vw;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 100%;
    position: fixed;
    top: 0;
  }
`;

export default Filterbar;
