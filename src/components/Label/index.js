import { Text, View } from 'react-native';

import { styles } from './styles';

// Título colorido + contador, como "Criadas 5" e "Concluídas 2"
export function Label({ title, count, color }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color }]}>{title}</Text>

      <View style={styles.counter}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}
