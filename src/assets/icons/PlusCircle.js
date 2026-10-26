import Svg, { Circle, Path } from 'react-native-svg';

import { theme } from '../../global/styles/theme';

// Ícone do botão de adicionar: um "+" dentro de um círculo
export function PlusCircle(props) {
  const color = theme.colors.gray100;

  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Circle cx={8} cy={8} r={7.25} stroke={color} strokeWidth={1.45} />
      <Path d="M 8 4.25 V 11.75 M 4.25 8 H 11.75" stroke={color} strokeWidth={1.08} />
    </Svg>
  );
}
