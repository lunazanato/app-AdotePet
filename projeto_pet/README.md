# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).

# Nome do App
AdotePet
## Descrição
O AdotePet é um aplicativo mobile desenvolvido em React Native e Expo no qual ajudam pessoas que querem adotar um animalzinho. 
O app permite visualizar fichas de pets, filtrar por nome ou espécie, consultar detalhes sobre os pets e preencher um formulário de solicitação de adoção.

## Aluno
Luna Zanato Braga
42958636

## Telas
Home (`screens/Home.js`): Tela inicial que exibe a listagem de pets disponíveis, barra de busca em tempo real, indicador de carregamento e tratamento para listas vazias.
Detalhes (`screens/Detalhes.js`): Tela que apresenta a foto ampliada, raça, idade, porte e a descrição detalhada do pet escolhido.
Formulário (`screens/Formulario.js`): Tela com campos controlados para o usuário preencher seus dados de contato e enviar o pedido de adoção.

## Fonte de dados
ADados locais estruturados em um array de objetos (`services/petService.js`).

## Onde estão os requisitos
Componentes: `components/Cabecalho.js`, `components/Botao.js`, `components/Card.js`
Props com callback: `components/Botao.js` (utiliza a prop `aoPressionar` para comunicar cliques à tela pai)
useState: `screens/Home.js` (controle de busca, listagem e estado de carregamento) e `screens/Formulario.js` (gerenciamento de formulário com atualização imutável via spread)
useEffect:`screens/Home.js` (simulação de carregamento inicial de dados com função de limpeza / cleanup)
Navegação com parâmetros: `App.js` (configuração do Stack) e nas passagens de dados entre `Home`, `Detalhes` e `Formulario` utilizando `navigation.navigate` e `route.params`

## Vídeo de demonstração
https://youtu.be/h4QC22nYz_I?si=GnseixaALYs0tTeW

## Como executar
npm install
npx expo start

*Testei o Projeto*