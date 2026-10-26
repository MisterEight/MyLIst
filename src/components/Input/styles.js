import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a largura que sobra ao lado do botão
    minWidth: 0, // na web, sem isso o input não encolhe e empurra o botão para fora da tela
    height: 54,
    paddingHorizontal: 15, // somado à borda de 1, o texto começa a 16 da lateral
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.gray700,
    backgroundColor: theme.colors.gray500,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.gray100,
  },
});
