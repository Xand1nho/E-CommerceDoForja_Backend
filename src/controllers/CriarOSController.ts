import { Request, Response } from 'express';
import { CriarOSService } from '../services/CriarOSService';

// OS = Ordem De Serviço

class CriarOSController {
  async handle(req: Request, res: Response) {
    // clienteNome: Dono do aparelho
    // equipamento: ex: "iPhone 13" ou "Notebook Dell Inspiron"
    // defeito: ex: "Tela quebrada e não liga"
    const { clienteNome, equipamento, defeito, valor, tecnicoId } = req.body;

    const criarOrdemServicoService = new CriarOSService();

    try {
      const ordemServico = await criarOrdemServicoService.execute({
        clienteNome,
        equipamento,
        defeito,
        valor,
        tecnicoId
      });

      return res.status(201).json(ordemServico);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CriarOSController };