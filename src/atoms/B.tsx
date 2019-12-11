import styled from '../styles/styled';
import theme from '../styles/theme';

interface Props {
  size?: string;
}

const B = styled.b<Props>`
  font-family: Avenir;
  color: black;
  font-weight: 700;
  font-size: ${({ size }) => (size ? size + 'px' : theme.pSize)};
`;

export default B;
