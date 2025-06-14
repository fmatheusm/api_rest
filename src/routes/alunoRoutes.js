import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
const router = new Router();

router.post('/registro', alunoController.index);

export default router;
