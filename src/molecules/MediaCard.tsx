import React, { FunctionComponent } from 'react';
import styled from '../styles/styled';
import theme from '../styles/theme';

interface CardProps {
  category?: string; //Takes: branch, english, olGraver, underhallning, aktuellt, podcast as input
}

const MediaCard: FunctionComponent<CardProps> = ({ children, category }) => {
  return (
    <MediaWrapper>
      <Color category={category}></Color>
      {children}
    </MediaWrapper>
  );
};

const MediaWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 60%;
  margin-top: 2rem;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.16), 0 4px 5px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: ${theme.breakpoints.md + 'px'}) {
    width: 80%;
  }
`;

const Color = styled.div<CardProps>`
  background: ${props => {
    return theme.colors[props.category];
  }};
  width: 12px;
  min-width: 12px;
`;

export default MediaCard;
