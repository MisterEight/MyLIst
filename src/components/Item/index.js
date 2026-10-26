import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { FadeIn, SlideOutLeft } from 'react-native-reanimated';
import { TrashIcon } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

// Passo 5: tempo da saída, em ms. Exportado porque a Home usa o mesmo tempo no passo 9
export const EXIT_DURATION = 300;
const saida = SlideOutLeft.duration(EXIT_DURATION); // fora do componente para não recriar a cada render

// Tarefa da lista: arrastar para a esquerda revela a lixeira
export function Item({ titulo, onRemove }) {
  // Passo 6: botão revelado pelo arraste. O Swipeable chama com 3 argumentos;
  // o terceiro tem os métodos close(), reset()...
  function renderLixeira(progress, translation, swipeable) {
    return (
      <RectButton
        style={styles.remove}
        onPress={() => {
          swipeable.close();
          onRemove();
        }}
      >
        <TrashIcon size={24} color={theme.colors.gray100} />
      </RectButton>
    );
  }

  // Passo 7: o Animated.View anima a entrada e a saída; o Swipeable cuida do arraste
  return (
    <Animated.View entering={FadeIn} exiting={saida}>
      <Swipeable overshootRight={false} renderRightActions={renderLixeira}>
        <View style={styles.container}>
          <Text style={styles.text}>{titulo}</Text>
        </View>
      </Swipeable>
    </Animated.View>
  );
}
