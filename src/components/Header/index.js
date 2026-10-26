import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LogoImg from '../../assets/images/logo.png';
import { styles } from './styles';

// Cabeçalho do app: faixa cinza com a logo centralizada
export function Header() {
  const insets = useSafeAreaInsets();

  return (
    // No layout a status bar tem 44 e a logo fica a 70 do topo: 26 abaixo da status bar
    <View style={[styles.container, { paddingTop: insets.top + 26 }]}>
      <Image source={LogoImg} style={styles.logo} />
    </View>
  );
}
