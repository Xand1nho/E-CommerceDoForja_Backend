import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes';
import { swaggerUi, swaggerDocument } from '../config/swaggerConfig';

const app = express();
const PORT = process.env.PORT || 8080; 

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.get('/health', (req, res) => {
  return res.json({ status: "TechFlow API rodando com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor TechFlow ativo na porta ${PORT}`);
  console.log(`📄 Documentação disponível em: http://localhost:${PORT}/api-docs`);
});