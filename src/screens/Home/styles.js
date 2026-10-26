import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray800,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -31, // sobe o formulário para ele ficar por cima do final do cabeçalho
    paddingHorizontal: 24,
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginHorizontal: 24,
    paddingBottom: 19,
    borderBottomWidth: 1, // linha que separa os contadores da lista
    borderBottomColor: theme.colors.gray400,
  },
  list: {
    gap: 8, // espaço entre as tarefas
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
