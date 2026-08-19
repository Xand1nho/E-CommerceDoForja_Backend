import { prisma } from '../../config/prisma';

interface CriarUsuarioRequest {
  nome: string;
  email: string;
  senha: string;
}

export class CriarUsuarioService {
  async execute({ nome, email, senha }: CriarUsuarioRequest) {
    if (!email || !senha) {
      throw new Error('E-mail e senha são obrigatórios');
    }

    const usuarioExiste = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExiste) {
      throw new Error('Este e-mail já está cadastrado');
    }

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
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