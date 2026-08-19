import { Request, Response } from 'express';
import { BuscarProdutoPorIdService } from '../services/BuscarProdutoPorIdService';

export class BuscarProdutoPorIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const buscarProdutoPorIdService = new BuscarProdutoPorIdService();

    try {
      const produto = await buscarProdutoPorIdService.execute(id as string);
      return res.json(produto);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }
}