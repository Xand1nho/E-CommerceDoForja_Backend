import { Request, Response } from 'express';
import { ListarProdutosService } from '../services/ListarProdutosService';

export class ListarProdutosController {
  async handle(req: Request, res: Response) {
    const listarProdutosService = new ListarProdutosService();

    try {
      const produtos = await listarProdutosService.execute();
      return res.json(produtos);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }
}