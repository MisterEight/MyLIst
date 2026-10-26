import { TouchableOpacity } from 'react-native';

import { PlusCircle } from '../../assets/icons/PlusCircle';
import { styles } from './styles';

export function Button(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <PlusCircle />
    </TouchableOpacity>
  );
}
