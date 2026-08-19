import { Request, Response } from 'express';
import { CriarUsuarioService } from '../services/CriarUsuarioService';

export class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    const criarUsuarioService = new CriarUsuarioService();

    try {
      const usuario = await criarUsuarioService.execute({
        nome,
        email,
        senha,
      });

      return res.status(201).json(usuario);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }
}