import { Request, Response } from 'express';
import { CriarProdutoService } from '../services/CriarProdutoService';

export class CriarProdutoController {
  async handle(req: Request, res: Response) {
    const { nome, descricao, preco, categoria, imagemUrl } = req.body;

    const criarProdutoService = new CriarProdutoService();

    try {
      const produto = await criarProdutoService.execute({
        nome,
        descricao,
        preco,
        categoria,
        imagemUrl
      });

      return res.status(201).json(produto);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }
}