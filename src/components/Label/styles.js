import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    lineHeight: 17,
  },
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999, // deixa as laterais totalmente arredondadas
    backgroundColor: theme.colors.gray400,
  },
  count: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.gray100,
  },
});
