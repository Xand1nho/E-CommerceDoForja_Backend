import { prisma } from '../../config/prisma';

export class BuscarProdutoPorIdService {
  async execute(id: string) {
    const produto = await prisma.produto.findUnique({
      where: { id }
    });

    if (!produto) {
      throw new Error('Produto não encontrado');
    }

    return produto;
  }
}