import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';

dotenv.config(); // Загружаем переменные из .env
const app = express();
app.use(express.json()); // Для работы с JSON в теле запроса
app.use(cors());

app.use('/api/auth', authRoutes); // Роуты
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 4200;
connectDB(process.env.DB_URL); // Подключение к базе и запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});