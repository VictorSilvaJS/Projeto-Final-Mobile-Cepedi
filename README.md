# Projeto Final - Trilha Mobile 

## VagaCerta - Sistema de Gerenciamento de Vagas de Emprego
O **VagaCerta** é uma aplicação Mobile desenvolvida como parte da Unidade 10 da Trilha de Mobile do programa de residência da ResTIC36 - CEPEDI. Este projeto integra backend e frontend para o gerenciamento de vagas de emprego. 

---

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para criação de APIs e rotas.
- **Sequelize**: ORM que facilita o gerenciamento de banco de dados.
- **SQLite**: Banco de dados SQL leve e embutido.
- **CORS**: Middleware para habilitar compartilhamento de recursos entre origens diferentes.
- **Nodemon**: Utilitário para monitoramento e reinício automático do servidor em desenvolvimento.

### Frontend
- **React Native**: Framework para criação de aplicativos móveis nativos.
- **Expo**: Ferramenta que simplifica o desenvolvimento e testes de aplicativos React Native.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, melhorando a manutenção do código.

---

## Principais Funcionalidades
- **Gerenciamento de Usuários**: Operações completas de CRUD (Criar, Ler, Atualizar, Deletar).
- **Gerenciamento de Vagas de Emprego**: Criação e controle detalhado de vagas.
- **Filtragem de Vagas**: Busca avançada por status (aberta/fechada).
- **Autenticação de Usuários**: Controle de acesso seguro com autenticação.
- **Persistência de Dados**: Armazenamento local utilizando SQLite.
- **Integração Backend-Frontend**: Comunicação eficiente e confiável entre cliente e servidor.

---

## Estrutura do Projeto
- **backend/**: Contém o código, modelos e configurações da API.
- **frontend/**: Contém o código da aplicação React Native.

---

## Como Testar o Aplicativo

### Pré-requisitos
- **Node.js**: Faça o download em [nodejs.org](https://nodejs.org/).
- **Expo CLI**: Instale globalmente com:
  ```bash
  npm install -g expo-cli
  ```
- **Git**: Necessário para clonar o repositório.
- **Yarn**: Instale globalmente com:
  ```bash
  npm install -g yarn
  ```

### Passos para Testar

#### 1. Clone o Repositório
```bash
git clone https://github.com/VictorSilvaJS/Projeto-Final-Mobile-Cepedi.git
cd VagaCerta
```

#### 2. Configuração do Backend
1. Acesse a pasta do backend:
   ```bash
   cd backend-app-vagacerta
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
   
#### 3. Configuração do Frontend
1. Acesse a pasta do frontend:
   ```bash
   cd frontend-app-vagacerta
   ```
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```

#### Para Executar o aplicativo use o Expo Go ou use Emulador Android

## Conexão com a API

Devido a problemas com o Axios, não é possível acessar os endpoints usando `http://localhost:3000` como `baseURL`. Para solucionar:

1. Utilize o IP do emulador: `http://10.0.2.2:3000`.
2. Para máquinas Windows com Android Studio, o IP acima deve funcionar. Alternativamente, teste `localhost` ou o IP da máquina.

### Obtendo o IP Correto
- **Windows**:
  - No Prompt de Comando, execute:
    ```bash
    ipconfig
    ```
  - Use o "Endereço IPv4".

- **Linux**:
  - No Terminal, execute:
    ```bash
    hostname -I
    ```
    Ou:
    ```bash
    ip addr show
    ```
  - Encontre o IP em `eth0` ou `wlan0`.

- **Mac**:
  - No Terminal, execute:
    ```bash
    ifconfig
    ```
  - Encontre o IP em `en0` para Wi-Fi.

Para o **Expo GO**, utilize o IP da máquina. Caso tenha problemas com `localhost`, teste os passos acima.

---

## Boas Práticas e Dicas
- Mantenha todas as dependências atualizadas para evitar problemas de compatibilidade.
- Certifique-se de que as variáveis de ambiente estejam configuradas corretamente.
- Utilize ferramentas como **Postman** ou **Insomnia** para testar os endpoints da API.
- Durante o desenvolvimento, acompanhe os logs do servidor e da aplicação para identificar possíveis erros rapidamente.

---

**Projeto desenvolvido pelo Grupo 01.**

