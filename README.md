# ShareHeart

## Visão Geral
ShareHeart é um aplicativo desenvolvido com React Native para facilitar a conexão entre doadores e receptores de itens essenciais. Este projeto tem como objetivo criar uma plataforma colaborativa e acessível para ajudar comunidades necessitadas.

## Funcionalidades
- **Cadastro de Usuários:** Os usuários podem se cadastrar no aplicativo, fornecendo informações básicas.
- **Explorar Causas:** Os usuários podem explorar diferentes causas e projetos disponíveis para doação.
- **Visualizar Notícias:** Os usuários podem ver as notícias sobre as organizações beneficentes.
- **Realizar Doações:** Os usuários podem fazer doações para as causas de sua escolha.
- **Histórico de Doações:** Os usuários podem visualizar seu histórico de doações.

## Instalação

Siga as instruções abaixo para clonar o repositório, instalar as dependências e executar o aplicativo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/JuanHenriq/ShareHeart-ReactNative.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd ShareHeart-ReactNative
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o aplicativo no emulador ou dispositivo:

    Para Android:
    ```bash
    npx react-native run-android
    ```

    Para iOS:
    ```bash
    npx react-native run-ios
    ```

## Configuração do Firebase

É necessário criar um arquivo `firebaseconfig.js` no diretório do projeto com o seguinte conteúdo:

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

## Requisitos

- Node.js
- npm ou yarn
- React Native CLI

## Configuração

Para configurar o ambiente de desenvolvimento, siga os passos detalhados na [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup).

