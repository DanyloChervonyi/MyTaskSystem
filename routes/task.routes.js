import { Router } from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../controllers/task.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authMiddleware, createTask); // POST /api/tasks — создать задачу
router.get('/', authMiddleware, getTasks); // GET /api/tasks — получить задачи пользователя
router.put('/:id', authMiddleware, updateTask); // PUT /api/tasks/:id — обновить задачу по ID
router.delete('/:id', authMiddleware, deleteTask); // DELETE /api/tasks/:id — удалить задачу по ID

export default router;