import styled from '../styles/styled';
import theme from '../styles/theme';

interface Props {
  size?: string;
}

const P = styled.p<Props>`
  font-family: Avenir;
  color: black;
  font-weight: 500;
  font-size: ${({ size }) => (size ? size + 'px' : theme.pSize)};
`;

export default P;
