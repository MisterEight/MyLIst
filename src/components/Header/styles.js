import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 71, // com a status bar de 44 do layout, o cabeçalho fecha em 173 de altura
    backgroundColor: theme.colors.gray600,
  },
  logo: {
    width: 117,
    height: 32,
  },
});
