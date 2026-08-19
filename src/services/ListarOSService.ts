// src/services/ListarOSService.ts
import { prisma } from '../../config/prisma';

class ListarOSService {
  async execute() {
    // Busca todas as ordens de serviço de eletrônicos salvas
    const ordens = await prisma.ordemServico.findMany({
      orderBy: {
        criadoEm: 'desc' // Mostra as mais recentes primeiro
      }
    });

    return ordens;
  }
}

export { ListarOSService };