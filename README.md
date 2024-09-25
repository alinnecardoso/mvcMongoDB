
# Nome do Projeto

Breve descrição do projeto. Explique o propósito da API e o que ela faz.

## Tecnologias Utilizadas

- Node.js (ou outra linguagem usada)
- Express (ou outro framework)
- MongoDB
- **Swagger** - Para documentar a API


## Endpoints da API

### `GET /usuarios`

Retorna uma lista de todos os usuários.

- **URL**: `/usuarios`
- **Método**: `GET`
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "nome": "Usuário Exemplo",
      "email": "email@example.com"
    }
  ]
  ```

### `POST /usuarios`

Cria um novo usuário.

- **URL**: `/usuarios`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "nome": "Novo Usuário",
    "email": "novoemail@example.com"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 2,
    "nome": "Novo Usuário",
    "email": "novoemail@example.com"
  }
  ```

### `DELETE /usuarios/:id`

Deleta um usuário por ID.

- **URL**: `/usuarios/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (obrigatório): O ID do usuário a ser deletado.

## Autor

- **Alinne Martins Cardoso**

## Licença

ISC