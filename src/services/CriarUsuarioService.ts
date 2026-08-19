import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";

interface RequestUsuario {
  nome: string;
  email: string;
  senha: string;
}

export class CriarUsuarioService {
  async execute({ nome, email, senha }: RequestUsuario) {
    const usuarioExiste = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExiste) {
      throw new Error("Este e-mail já está em uso.");
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    return usuario;
  }
}