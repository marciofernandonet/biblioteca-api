# API Biblioteca

## Desafio (API)

Uma biblioteca precisa de um sistema onde os usuários que alugam livros possam registrar sua opinião sobre os mesmos.

1. Uma tela onde administradores podem fazer cadastro, edição e remoção dos livros no sistema (CRUD completo).
2. Uma tela de avaliação para que os usuários finais selecionem um dos livros cadastrados e deem uma nota para ele.
3. Uma tela para que os administradores vejam a nota média de cada livro.

## Instalação

1. Faça o clone deste projeto com `git clone https://github.com/marciofernandonet/biblioteca-api.git`
2. Entre na pasta do projeto e instale as dependências com `npm install`

## Inicializando o Banco de Dados

O banco de dados para a aplicação é o MongoDB, para inicializá-lo é preciso executar o comando `mongod` em um terminal separado.

## Rodando a API

Na pasta do projeto digite o seguinte comando para iniciar o servidor `npm start`, duas mensgens são exibidas _"Server is running"_ e _"Database Connected"_. O arquivo de configução para o banco de dados é o _database.js_, ele está na pasta config, caso precise alterar alguma configuração de conexão basta modificar o arquivo _.env_. 

## Sobre a API

A API roda sobre o seguinte endereço `http://localhost:3001/`.

### Rotas da API

Todas as rotas da API estão no arquivo _routes.js_ que fica na pasta _src_.

