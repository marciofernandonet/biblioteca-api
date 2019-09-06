# API Biblioteca

## Instalação

1. Faça o clone deste projeto com `git clone https://github.com/marciofernandonet/biblioteca-api.git`
2. Entre na pasta do projeto e instale as dependências com `npm install`

## Inicializando o Banco de Dados

O banco de dados para a aplicação é o MongoDB, para inicializá-lo é preciso executar o comando `mongod` em um terminal separado.

## Rodando a API

Na pasta do projeto digite o seguinte comando para iniciar o servidor `npm run dev`, duas mensgens são exibidas _"Server is running"_ e _"Database Connected"_. O arquivo de configução para o banco de dados é o _database.js_, ele está na pasta config, caso precise alterar alguma configuração de conexão basta modificar o arquivo _.env_. 

## Sobre a API

A API roda sobre o seguinte endereço `http://localhost:3001/`.

### Rotas da API

Todas as rotas da API estão no arquivo _routes.js_ que fica na pasta _src_.

