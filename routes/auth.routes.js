import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register); // POST /api/auth/register — регистрация нового пользователя
router.post('/login', login); // POST /api/auth/login — вход пользователя

export default router;