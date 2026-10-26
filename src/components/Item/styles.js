import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    backgroundColor: theme.colors.gray500,
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.gray100,
  },
  remove: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginLeft: 8, // espaço entre o card e a lixeira
    borderRadius: 8,
    backgroundColor: theme.colors.red,
  },
});
