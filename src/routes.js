import { Router } from 'express';
// Controllers de Usuários e Autenticação
import { CriarUsuarioController } from './controllers/CriarUsuarioController';
import { LoginUsuarioController } from './controllers/LoginUsuarioController';
// Controllers de Produtos
import { CriarProdutoController } from './controllers/CriarProdutoController';
import { ListarProdutosController } from './controllers/ListarProdutosController';
import { BuscarProdutoPorIdController } from './controllers/BuscarProdutoPorIdController';
const router = Router();
// Instâncias
const criarUsuarioController = new CriarUsuarioController();
const loginUsuarioController = new LoginUsuarioController();
const criarProdutoController = new CriarProdutoController();
const listarProdutosController = new ListarProdutosController();
const buscarProdutoPorIdController = new BuscarProdutoPorIdController();
// Status da API
router.get('/', (req, res) => {
    return res.status(200).json({ mensagem: 'API do E-Commerce operando normalmente' });
});
// Autenticação e Usuários
router.post('/usuarios', criarUsuarioController.handle);
router.post('/login', loginUsuarioController.handle);
// Catálogo de Produtos
router.post('/produtos', criarProdutoController.handle);
router.get('/produtos', listarProdutosController.handle);
router.get('/produtos/:id', buscarProdutoPorIdController.handle);
export { router };
