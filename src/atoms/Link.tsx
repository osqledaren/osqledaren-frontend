import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import styled from '../styles/styled';

interface Props extends GatsbyLinkProps<{}> {
  defaultStyling?: boolean;
}

const Link: FunctionComponent<Props> = ({ children, to, ref, ...other }) => {
  return (
    <StyledLink
      href={to}
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
      {...other}
    >
      {children}
    </StyledLink>
  );
};
export default Link;

const StyledLink = styled.a`
  font-family: Avenir, Arial, Helvetica, sans-serif;
  color: black;
  :visited {
    color: ${({ theme }) => theme.colors.english};
  }
  :hover {
    text-decoration: none;
  }
`;
