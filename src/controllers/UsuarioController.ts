import { Request, Response } from "express";
import { CriarUsuarioService } from "../services/CriarUsuarioService";
import { LoginUsuarioService } from "../services/LoginUsuarioService";

export class UsuarioController {
  // POST /usuarios
  async cadastrar(req: Request, res: Response) {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: "Preencha todos os campos." });
    }

    try {
      const criarUsuarioService = new CriarUsuarioService();
      const usuario = await criarUsuarioService.execute({ nome, email, senha });
      return res.status(201).json(usuario);
    } catch (error: any) {
      return res.status(400).json({ erro: error.message });
    }
  }

  // POST /login
  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: "E-mail e senha são obrigatórios." });
    }

    try {
      const loginUsuarioService = new LoginUsuarioService();
      const usuario = await loginUsuarioService.execute({ email, senha });
      return res.status(200).json(usuario);
    } catch (error: any) {
      return res.status(401).json({ erro: error.message });
    }
  }
}