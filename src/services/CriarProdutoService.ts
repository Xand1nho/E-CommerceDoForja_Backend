import { prisma } from '../../config/prisma';

interface CriarProdutoRequest {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagemUrl: string;
}

export class CriarProdutoService {
  async execute({ nome, descricao, preco, categoria, imagemUrl }: CriarProdutoRequest) {
    if (!nome || !preco || !categoria) {
      throw new Error('Campos obrigatórios ausentes');
    }

    const produto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco: Number(preco),
        categoria,
        imagemUrl
      }
    });

    return produto;
  }
}