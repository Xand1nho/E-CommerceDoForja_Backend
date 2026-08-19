import { prisma } from "../../config/prisma";

export interface CriarProdutoDTO {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
}

export class CriarVariosProdutosService {
  async execute(produtos: CriarProdutoDTO[]) {
    // Insere toda a lista de uma só vez no banco!
    const resultado = await prisma.produto.createMany({
      data: produtos,
      skipDuplicates: true, // Ignora caso já exista item duplicado
    });

    return resultado; // Retorna { count: X } com a quantidade inserida
  }
}