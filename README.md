# MyList

App **MyList** (lista de tarefas) feito em React Native a partir da imagem do layout.

O que foi desenvolvido:

1. **Cabeçalho** com a imagem da logo
2. Componentes **Input** e **Button**
3. **Labels** com a quantidade de itens criados e concluídos
4. **Lista de tarefas** salva no celular com `AsyncStorage` (sem tarefas repetidas)
5. **Remoção animada** (aula "Telas que se mexem"): arrastar a tarefa para a esquerda revela uma lixeira; tocando nela e confirmando, o card desliza para fora e só depois as tarefas de baixo sobem

O contador "Concluídas" ainda fica em 0: marcar uma tarefa como concluída é a próxima prática.

## Como rodar

```bash
npm install
npx expo start
```

Depois, leia o QR code com o app **Expo Go** (versão atual da loja, compatível com o Expo SDK 57). Para abrir no navegador, use `npm run web`, mas teste a remoção no celular: no navegador o `Alert` de confirmação não aparece.

Se o arrastar não funcionar depois de instalar as bibliotecas, rode `npx expo start -c` para limpar o cache.

## Tecnologias

| Biblioteca | Para quê |
|---|---|
| Expo (SDK 57) + React Native | Base do app, rodando no Expo Go |
| JavaScript | Linguagem do projeto |
| `react-native-svg` | Ícone do botão desenhado em SVG |
| `react-native-safe-area-context` | Respeitar o notch e a status bar do celular |
| `@expo-google-fonts/inter` | Fonte Inter (Regular e Bold) |
| `@react-native-async-storage/async-storage` | Salvar a lista no celular |
| `react-native-reanimated` + `react-native-worklets` | Animações de entrada, saída e reposicionamento dos itens |
| `react-native-gesture-handler` | Arrastar a tarefa para revelar a lixeira (`ReanimatedSwipeable`) |
| `phosphor-react-native` | Ícone da lixeira |

## Estrutura de pastas

```
App.js                    carrega as fontes e renderiza a Home
src/
  screens/
    Home/                 monta a tela, guarda a lista e adiciona/remove tarefas
  components/             peças reutilizáveis (uma pasta por componente)
    Header/               cabeçalho com a logo
    Input/                campo de texto
    Button/               botão de adicionar
    Label/                título + contador ("Criadas 5")
    Item/                 tarefa da lista, com arraste e animações
  assets/
    images/               logo em 3 tamanhos (1x, 2x e 3x)
    icons/                ícone SVG em forma de componente
  global/styles/theme.js  cores e fontes do layout
```

Toda tela e todo componente tem dois arquivos:

- `index.js`: a estrutura (o JSX).
- `styles.js`: os estilos, criados com `StyleSheet.create`.

## Componentes

| Componente | O que faz |
|---|---|
| `Header` | Faixa cinza do topo com a logo (`Image`) centralizada |
| `Input` | `TextInput` estilizado. Aceita as props do `TextInput` (`placeholder`, `value`, `onChangeText`...) |
| `Button` | Botão azul de 52×52 com o ícone "+". Aceita as props do `TouchableOpacity` (`onPress`...) |
| `Label` | Título colorido + contador. Props: `title`, `count` e `color` |
| `Item` | Card da tarefa: entra com `FadeIn`, sai com `SlideOutLeft` e revela a lixeira ao arrastar. Props: `titulo` e `onRemove` |

## Decisões de estilização

- **Tema central.** As cores e fontes vêm de `theme.js`. Nenhum componente escreve cor direto no código.
- **Medidas do layout.** Os valores seguem o frame de 375 de largura: margem lateral de 24, input com 54 de altura, botão de 52×52, cantos arredondados de 6 e 4 de espaço entre o input e o botão.
- **Formulário sobre o cabeçalho.** O input e o botão ficam metade no cabeçalho e metade no corpo da tela. Isso é feito com `marginTop: -31` no formulário, que sobe por cima do final do cabeçalho.
- **Área segura.** O espaço do topo do cabeçalho soma a altura da status bar (`useSafeAreaInsets`). Com a status bar de 44 do layout, o cabeçalho fica com 173 de altura e a logo a 70 do topo, e em outros aparelhos ele se adapta.
- **Contador.** O `borderRadius: 999` deixa as laterais totalmente arredondadas, e a largura cresce junto com o número.
- **Linha divisória.** É a borda de baixo da área dos labels, alinhada com as margens de 24.
- **Ícone do botão.** Componente feito com `react-native-svg` (círculo + "+"), nítido em qualquer tela.

## Logo

O arquivo original da logo não veio junto com a atividade, então a imagem foi recriada a partir do layout: o ícone de lista com o "check" e o texto "MyList" em Inter, nas mesmas cores. Para usar a logo oficial, basta substituir os arquivos `logo.png`, `logo@2x.png` e `logo@3x.png` em `src/assets/images/`.
