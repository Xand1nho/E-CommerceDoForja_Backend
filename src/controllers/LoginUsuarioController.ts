import { Request, Response } from 'express';
import { LoginUsuarioService } from '../services/LoginUsuarioService';

export class LoginUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;

        const loginUsuarioService = new LoginUsuarioService();

        try {
            const resposta = await loginUsuarioService.execute({ email, senha });
            return res.json(resposta);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }
}