import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Middleware для проверки авторизации пользователя.
// Проверяет наличие и валидность JWT токена в заголовке запроса.
export const authMiddleware = (req, res, next) => {
    // Получаем токен из заголовка Authorization
    const token = req.headers['authorization']?.split(' ')[1]; // формат: "Bearer <token>"
    if (!token) return res.status(401).json({ message: 'No token' });

    try {
        // Проверяем и декодируем токен
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // сохраняем данные пользователя в объект запроса
        next(); // передаём управление следующему обработчику
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};