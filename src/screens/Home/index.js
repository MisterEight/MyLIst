import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { LinearTransition } from 'react-native-reanimated';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Item, EXIT_DURATION } from '../../components/Item';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const STORAGE_KEY = '@mylist:lista';

// Passo 9: os itens de baixo só sobem depois que o removido saiu da tela
const reposicionar = LinearTransition.delay(EXIT_DURATION);

export function Home() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Carrega a lista salva no celular quando a tela abre
  useEffect(() => {
    async function loadList() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setList(JSON.parse(saved));
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadList();
  }, []);

  async function handleAddItem() {
    const task = inputValue.trim();
    if (!task) {
      return;
    }

    // A key de cada item é o próprio texto: tarefas repetidas teriam a mesma key
    if (list.includes(task)) {
      return Alert.alert('Tarefa já adicionada', 'Digite outra tarefa');
    }

    const newList = [...list, task];
    setList(newList);
    setInputValue('');

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch (error) {
      console.error(error);
    }
  }

  // Passo 3: filter cria um array novo só com as tarefas que ficam
  async function removeItem(item) {
    const newList = list.filter((task) => task !== item);

    setList(newList); // 1. tira da lista (tela)

    try {
      // 2. salva a lista nova (celular)
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch (error) {
      console.error(error);
    }
  }

  // Passo 4: só remove se o usuário confirmar
  function handleRemoveItem(item) {
    Alert.alert('Remover tarefa', `Deseja remover "${item}"?`, [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive', // vermelho no iOS
        onPress: () => removeItem(item),
      },
    ]);
  }

  // Passo 2: GestureHandlerRootView no lugar da View externa, senão os gestos não funcionam
  return (
    <GestureHandlerRootView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <Input
          placeholder="Adicione algo a sua lista"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleAddItem}
        />
        <Button onPress={handleAddItem} />
      </View>

      {/* Concluídas fica em 0 até a tarefa poder ser marcada (prática do slide 38) */}
      <View style={styles.labels}>
        <Label title="Criadas" count={list.length} color={theme.colors.cyan} />
        <Label title="Concluídas" count={0} color={theme.colors.blue} />
      </View>

      {/* Passo 8: Animated.FlatList anima quem ficou quando um item sai */}
      <Animated.FlatList
        data={list}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <Item titulo={item} onRemove={() => handleRemoveItem(item)} />
        )}
        itemLayoutAnimation={reposicionar}
        contentContainerStyle={styles.list}
      />
    </GestureHandlerRootView>
  );
}
