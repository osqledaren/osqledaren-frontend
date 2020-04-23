import React, { FunctionComponent } from 'react';
import { GatsbyLinkProps } from 'gatsby';
import styled from '../styles/styled';

interface Props extends GatsbyLinkProps<{}> {
  defaultStyling?: boolean;
}

const Link: FunctionComponent<Props> = ({ children, to, ref }) => {
  return (
    <StyledLink href={to} ref={ref} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLink>
  );
};
export default Link;

const StyledLink = styled.a`
  font-family: Avenir, Arial, Helvetica, sans-serif;
  color: black;
  :hover {
    text-decoration: none;
  }
`;
