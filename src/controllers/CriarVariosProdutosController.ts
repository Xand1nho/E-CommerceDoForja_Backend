import { Request, Response } from "express";
import { CriarVariosProdutosService } from "../services/CriarVariosProdutosService";

export class CriarVariosProdutosController {
  async handle(request: Request, response: Response) {
    const produtos = request.body; // Recebe a lista do frontend/Swagger

    const service = new CriarVariosProdutosService();
    const resultado = await service.execute(produtos);

    return response.status(201).json(resultado);
  }
}