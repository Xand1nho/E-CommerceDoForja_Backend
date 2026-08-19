import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";

interface RequestLogin {
  email: string;
  senha: string;
}

export class LoginUsuarioService {
  async execute({ email, senha }: RequestLogin) {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      throw new Error("E-mail ou senha incorretos.");
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      throw new Error("E-mail ou senha incorretos.");
    }

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}