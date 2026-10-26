import { TextInput } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Input(props) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={theme.colors.gray300}
      {...props}
    />
  );
}
