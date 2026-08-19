import { prisma } from '../../config/prisma';

interface LoginUsuarioRequest {
    email: string;
    senha: string;
}

export class LoginUsuarioService {
    async execute({ email, senha }: LoginUsuarioRequest) {
        if (!email || !senha) {
            throw new Error('Preencha e-mail e senha');
        }

        const usuario = await prisma.usuario.findUnique({
            where: { email }
        });

        if (!usuario || usuario.senha !== senha) {
            throw new Error('E-mail ou senha incorretos');
        }

        return {
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            mensagem: 'Login realizado com sucesso'
        };
    }
}