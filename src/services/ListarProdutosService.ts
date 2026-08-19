import { prisma } from '../../config/prisma';

export class ListarProdutosService {
  async execute() {
    const produtos = await prisma.produto.findMany();
    return produtos;
  }
}