# projeto-midware

Projeto Node.js utilizando Express, Sequelize e MySQL para operações CRUD de usuários.

## Descrição

Este projeto implementa um middleware de servidor com operações CRUD (Criar, Ler, Atualizar, Deletar) para usuários, utilizando Sequelize como ORM para MySQL. O projeto inclui exemplos de uso das funções CRUD e configuração via variáveis de ambiente.

## Estrutura do Projeto

- `crud.js`: Implementação das funções CRUD usando Sequelize.
- `server_middleware.js`: (Arquivo principal do servidor Express, a ser implementado ou expandido).
- `test.js`: Exemplos de uso das funções CRUD.
- `.env.example`: Exemplo de configuração das variáveis de ambiente.
- `package.json`: Dependências e scripts do projeto.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/diego-escouto/projeto_midware_sequelize.git
   cd projeto_midware_sequelize
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure o arquivo `.env` com as informações do seu banco de dados, baseado em `.env.example`:
   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_NAME=sua_base
   DB_PASS=sua_senha
   ```

4. Certifique-se de ter um banco MySQL rodando e com a base criada.

## Uso

### Executando operações CRUD

Você pode testar as funções CRUD editando e descomentando as chamadas no arquivo [`test.js`](test.js):

```js
const { inserirUsuario, listarUsuarios, atualizarUsuario, excluirUsuario } = require("./crud");

// Inserir um usuário
// inserirUsuario("Bruno Souza", "bruno@email.com", "senha123", 48);

// Listar usuários
// listarUsuarios();

// Atualizar um usuário
// atualizarUsuario(1, "Maria Pereira");

// Excluir um usuário
// excluirUsuario(1);
```

Execute o arquivo para testar:
```sh
node test.js
```

### Estrutura da tabela `usuarios`

O Sequelize irá criar (ou alterar) a tabela `usuarios` com os seguintes campos:

- `id`: INTEGER, auto-incremento, chave primária
- `nome`: STRING, obrigatório
- `email`: STRING, obrigatório, único
- `senha`: STRING, obrigatório
- `idade`: INTEGER, obrigatório

## Dependências

- [express](https://www.npmjs.com/package/express)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Observações

- O arquivo [`server_middleware.js`](server_middleware.js) pode ser expandido para expor as operações CRUD via API REST.
- O projeto já está preparado para uso com variáveis de ambiente.

## Licença

ISC

---

Desenvolvido por Diego Escouto em caráter acadêmico.
