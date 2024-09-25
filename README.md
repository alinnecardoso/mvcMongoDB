# Persistência de Dados - Exercício Prático

Exercicío prático que documenta a API utilizando Swagger

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- **Swagger** - Para documentar a API

## Endpoints da API

### Endpoints de Usuários

---

### `GET /user`

Listar usuários registrados.

- **URL**: `/user`
- **Método**: `GET`

### `POST /user`

Criar novo usuário.

- **URL**: `/user`
- **Método**: `POST`

### `GET /user/:id`

Detalhar usuário por ID.

- **URL**: `/user/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (obrigatório): O ID do usuário a ser exibido.

### `PUT /user/:id`

Atualizar usuário por ID.

- **URL**: `/user/:id`
- **Método**: `PUT`
- **Parâmetros**:
  - `id` (obrigatório): O ID do usuário a ser atualizado.

### `DELETE /usuarios/:id`

Deletar um usuário por ID.

- **URL**: `/usuarios/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (obrigatório): O ID do usuário a ser deletado.

---

### Endpoints de Projetos

---

### `GET /project`

Listar projetos registrados.

- **URL**: `/project`
- **Método**: `GET`

### `POST /project`

Criar novo projeto.

- **URL**: `/project`
- **Método**: `POST`

### `GET /project/:id`

Detalhar projeto por ID.

- **URL**: `/project/:id`
- **Método**: `GET`
- **Parâmetros**:
  - `id` (obrigatório): O ID do projeto a ser exibido.

### `PUT /project/:id`

Atualizar projeto por ID.

- **URL**: `/project/:id`
- **Método**: `PUT`
- **Parâmetros**:
  - `id` (obrigatório): O ID do projeto a ser atualizado.

### `DELETE /project/:id`

Deletar projeto por ID.

- **URL**: `/project/:id`
- **Método**: `DELETE`
- **Parâmetros**:
  - `id` (obrigatório): O ID do projeto a ser deletado.

## Autor

- **Alinne Martins Cardoso**

## Licença

ISC
