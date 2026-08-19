# 🛒 E-Commerce API - TechFlow / Forja

---

## 📌 Introdução
* **Projeto:** Backend E-Commerce TechFlow
* **Problema que resolve:** Prover uma infraestrutura escalável e segura para cadastro, gerenciamento e consulta de produtos e usuários para uma plataforma de e-commerce de eletrônicos e periféricos.
* **Público-Alvo:** Clientes finais e administradores da loja.
   
* E o front se comunica com o backend através da http
---

## 🛠️ Tecnologias Utilizadas
* **Linguagem:** TypeScript
* **Runtime:** Node.js
* **Framework Web:** Express
* **ORM:** Prisma ORM
* **Banco de Dados:** MySQL (via XAMPP)
* **Documentação de API:** Swagger UI
* **Segurança:** CORS Middleware

---

## 🏗️ Arquitetura do Sistema
O backend foi construído seguindo o padrão de **Camadas (Controller/Service)** e arquitetura REST:


[ Frontend / Mobile ] ──(HTTP JSON)──> [ Express Router ]
│
[ Controllers ]
│
[ Services ]
│
[ Prisma Client ]
│
[ Banco MySQL ]


---

## 📋 Rotas da API

| Método | Rota            | Descrição                            |  Status HTTP  |
| :----- | :-------------- | :----------------------------------- | :-----------: |
| `POST` | `/usuarios`     | Cadastra um novo usuário/cliente     |     `201`     |
| `POST` | `/login`        | Autenticação de usuário              | `200` / `401` |
| `GET`  | `/produtos`     | Listagem completa de produtos        |     `200`     |
| `GET`  | `/produtos/:id` | Busca detalhes de um produto por ID  | `200` / `404` |
| `POST` | `/produtos`     | Cadastra um novo produto no catálogo |     `201`     |

> 💡 A documentação interativa das rotas pode ser acessada em `http://localhost:8080/api-docs` via Swagger com a API rodando.

---

## 🗄️ Estrutura do Banco de Dados (MySQL)

Tabela **`produto`**:
* `id` (String / UUID - Chave Primária)
* `nome` (String)
* `descricao` (Text)
* `preco` (Decimal)
* `imageUrl` (String)
* `categoria` (String)
* `criadoEm` (Timestamp)
* `atualizadoEm` (Timestamp)

Tabela **`usuarios`**:
* `id` (String / UUID - Chave Primária)
* `nome` (String)
* `email` (String - Único)
* `senha` (String - Hash)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado
* XAMPP (servidor MySQL ativo na porta 3306)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone <(https://github.com/Xand1nho/E-CommerceDoForja_Backend.git)>

2. **Navegar para a pasta do backend:**
   ```bash
   cd AssistenciaTecnicaForja_Backend

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Configurar as Variáveis de Ambiente:**
 Crie um arquivo .env na raiz do projeto backend com as seguintes configurações:
 DATABASE_URL="mysql://root:@localhost:3306/techflow_db"
 PORT=8080

5. **Configurar o Banco de Dados (Prisma):**
Execute o db push para sincronizar o schema do Prisma com o MySQL:

Bash
npx prisma db push


6. **Popular o Banco de Dados (Seed):**
Popule o banco com os produtos iniciais cadastrados:

Bash
npx tsx prisma/seed.ts


7. **Iniciar o Servidor em Modo de Desenvolvimento:**

Bash
npm run dev

A API estará rodando em http://localhost:8080.


**🔒 Segurança e Tratamento de Erros**

*Criptografia de Senhas*: Utilização do pacote bcrypt para geração de hash de senhas antes de salvar no banco de dados.

CORS: Middleware cors habilitado para permitir requisições com a origem do Frontend Next.js (http://localhost:3000).

Validação de Erros: Respostas tratadas em padrão JSON contendo mensagens amigáveis em caso de exceções (400 Bad Request, 401 Unauthorized, 404 Not Found).

👥 Integrantes do Projeto
Samuel / Alexandre   Equipe Forja — Desenvolvimento Full Stack (Backend & Frontend)

📜 Licença
Este projeto foi desenvolvido estritamente para fins acadêmicos como parte do Trabalho de Conclusão de Curso (TCC).