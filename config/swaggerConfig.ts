import swaggerUi from 'swagger-ui-express';

const usuarioSchema = {
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        nome: { type: "string" },
        email: { type: "string" },
        senha: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" }
    }
};

const ordemServicoSchema = {
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        clienteNome: { type: "string" },
        equipamento: { type: "string" },
        defeito: { type: "string" },
        status: { type: "string", default: "ABERTA" },
        valor: { type: "number", format: "float" },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
        tecnicoId: { type: "string", format: "uuid", nullable: true }
    }
};

const produtoSchema = {
    type: "object",
    properties: {
        id: { type: "string", format: "uuid" },
        nome: { type: "string" },
        descricao: { type: "string" },
        preco: { type: "number", format: "float" },
        imagemUrl: { type: "string", nullable: true },
        categoria: { type: "string" },
        criadoEm: { type: "string", format: "date-time" },
        atualizadoEm: { type: "string", format: "date-time" }
    }
};

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "TechFlow API - Documentação",
        version: "1.0.0",
        description: "API do sistema TechFlow para gerenciamento de assistência técnica de eletrônicos."
    },
    servers: [
        {
            url: "http://localhost:8080",
            description: "Servidor Local de Desenvolvimento"
        }
    ],
    components: {
        schemas: {
            Usuario: usuarioSchema,
            OrdemServico: ordemServicoSchema,
            Produto: produtoSchema
        }
    },
    paths: {
        "/": {
            get: {
                tags: ["Status"],
                summary: "Verifica se a API está online",
                responses: {
                    200: { description: "API operando normalmente" }
                }
            }
        },
        "/usuarios": {
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar um novo técnico ou gestor",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    nome: { type: "string" },
                                    email: { type: "string" },
                                    senha: { type: "string" },
                                },
                                required: ["nome", "email", "senha"]
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário criado com sucesso" },
                    "400": { description: "Erro nos dados recebidos" }
                }
            }
        },
        "/login": {
            post: {
                tags: ["Autenticação"],
                summary: "Efetuar login no sistema (Gerar Token)",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: { type: "string" },
                                    senha: { type: "string" }
                                },
                                required: ["email", "senha"]
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Autenticado com sucesso" },
                    400: { description: "Credenciais inválidas" }
                }
            }
        },
        "/ordens": {
            post: {
                tags: ["Ordens de Serviço"],
                summary: "Cria uma nova Ordem de Serviço para aparelho eletrônico",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    clienteNome: { type: "string", example: "Carlos Henrique" },
                                    equipamento: { type: "string", example: "Samsung Galaxy S23" },
                                    defeito: { type: "string", example: "Tela quebrada e conector de carga ruim" },
                                    valor: { type: "number", example: 450.00 }
                                },
                                required: ["clienteNome", "equipamento", "defeito"]
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Ordem de Serviço aberta com sucesso" },
                    400: { description: "Erro na validação dos campos" }
                }
            },
            get: {
                tags: ["Ordens de Serviço"],
                summary: "Lista todas as Ordens de Serviço cadastradas",
                responses: {
                    200: {
                        description: "Lista de aparelhos eletrônicos em manutenção"
                    }
                }
            }
        },
        "/produtos": {
            post: {
                tags: ["Produtos"],
                summary: "Cadastra um novo produto na loja",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    nome: { type: "string", example: "REDMAGIC 11 pro" },
                                    descricao: { type: "string", example: "Smartphone Gamer topo de linha" },
                                    preco: { type: "number", example: 5299.00 },
                                    categoria: { type: "string", example: "CELULARES" },
                                    imagemUrl: { type: "string", example: "https://link-da-imagem.com/foto.jpg" }
                                },
                                required: ["nome", "descricao", "preco", "categoria"]
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Produto cadastrado com sucesso" },
                    400: { description: "Erro ao cadastrar produto" }
                }
            },
            get: {
                tags: ["Produtos"],
                summary: "Lista todos os produtos da loja",
                responses: {
                    200: { description: "Lista de produtos retornada com sucesso" }
                }
            }
        }
    }
};

export { swaggerUi, swaggerDocument };