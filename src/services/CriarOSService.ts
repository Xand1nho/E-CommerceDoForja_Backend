import { prisma } from '../../config/prisma';

interface CriarOSRequest {
  clienteNome: string;
  equipamento: string;
  defeito:     string;
  valor?:      number;
  tecnicoId?:  string; // Pode vir atrelado a um técnico ou não no início
}

class CriarOSService {
  async execute({ clienteNome, equipamento, defeito, valor, tecnicoId }: CriarOSRequest) {
    // Validação básica de campos obrigatórios
    if (!clienteNome || !equipamento || !defeito) {
      throw new Error("Cliente, equipamento e defeito são campos obrigatórios.");   
    }

    // Criando o registro no banco de dados
    const novaOS = await prisma.ordemServico.create({
      data: {
        clienteNome,
        equipamento,
        defeito,
        valor: valor ? Number(valor) : null,
        status: "ABERTA", // Toda OS começa com o status padrão ABERTA
        tecnicoId: tecnicoId || null
      }
    });

    return novaOS;
  }
}

export { CriarOSService };