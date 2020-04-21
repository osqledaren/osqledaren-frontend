import styled from '../styles/styled';
import theme from '../styles/theme';

interface Props {
  size?: string;
  lh?: string;
  color?: string;
}

const P = styled.p<Props>`
  font-family: Avenir;
  color: ${({ color }) => (color ? color : 'black')};
  font-weight: 500;
  line-height: ${({ lh }) => (lh ? lh + 'px' : theme.pLineHeight)};
  font-size: ${({ size }) => (size ? size + 'px' : theme.pSize)};
`;

export default P;
