// src/controllers/ListarOSController.ts
import { Request, Response } from 'express';
import { ListarOSService } from '../services/ListarOSService';

class ListarOSController {
  async handle(req: Request, res: Response) {
    const listarOSService = new ListarOSService();

    try {
      const ordens = await listarOSService.execute();
      return res.json(ordens);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListarOSController };