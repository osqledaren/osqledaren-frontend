import styled from '../styles/styled';

type HVariant = '1' | '2' | '3' | '4' | '5';

interface Props {
  size?: string;
  variant?: HVariant;
  color?: string;
}

const H = styled.h1<Props>`
  font-family: Avenir;
  color: ${({ color }) => {
    return color ? color : 'black';
  }};
  font-weight: 700;
  font-size: ${({ size, variant, theme }) => {
    if (size) return size + 'px';
    if (variant) return theme.hSize[variant];
    return theme.hSize[1];
  }};
`;

export default H;
