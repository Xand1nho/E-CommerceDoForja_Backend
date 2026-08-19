# 🖥️ TechFlow - E-commerce de Hardware e Eletrônicos

> **Trabalho de Conclusão de Curso (TCC)** — Curso de Desenvolvimento de Sistemas  
> **Integrantes do Grupo:** [Samuel], [Alexandre]  
> **Tema:** Plataforma de E-commerce focada na venda e exibição de componentes de hardware, notebooks, celulares e periféricos gamer.

---

## 📌 1. Documentação Geral do Projeto

### Introdução
* **Nome do Projeto:** TechFlow
* **Problema que Resolve:** A necessidade de uma plataforma centralizada, ágil e intuitiva para busca, navegação e gerenciamento de estoque de componentes de hardware, periféricos e eletrônicos de alto desempenho.
* **Objetivo:** Desenvolver uma aplicação Web completa (estilo KaBuM!, Terabyte e Pichau) que permite aos usuários navegar por categorias de produtos, visualizar especificações técnicas e preços em tempo real, além de fornecer um painel para administração de estoque.
* **Público-Alvo:** Entusiastas de tecnologia, público gamer, clientes buscando peças de computador/celulares e administradores do catálogo do e-commerce.

---

### Tecnologias Utilizadas

#### Backend (API REST)
* **Linguagem:** Node.js (TypeScript)
* **Framework Web:** Express.js
* **ORM:** Prisma ORM
* **Documentação da API:** Swagger UI (`swagger-ui-express`)
* **Execução / Dev:** `tsx` / `ts-node`

#### Banco de Dados
* **SGBD:** MySQL / MariaDB (gerenciado via phpMyAdmin / XAMPP)
* **Nome do Banco:** `techflow_db`

#### Frontend Web
* **Tecnologias:** HTML5, CSS3, JavaScript / TypeScript (React.js)
* **Comunicação com API:** Axios / Fetch API

---

### Arquitetura do Sistema

O backend foi desenvolvido seguindo a arquitetura em camadas (**Controller-Service-Data Layer**), garantindo separação de responsabilidades e facilitando a manutenção do código:

```text
[ Frontend Web / Swagger UI ]
              │
        HTTP  │  (Requisições JSON: GET, POST, PUT, DELETE)
              ▼
       [ Controllers ]   --> Validação das requisições e respostas HTTP
              │
              ▼
        [ Services ]     --> Regras de negócio do e-commerce
              │
              ▼
      [ Prisma Client ]  --> Mapeamento Objeto-Relacional (ORM)
              │
              ▼
     [ MySQL / MariaDB ] --> Banco de Dados Relacional (techflow_db)