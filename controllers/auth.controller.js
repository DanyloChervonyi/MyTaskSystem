import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Регистрация нового пользователя. Хэширует пароль перед сохранением.
export const register = async (request, response) => {
    try {
        const { name, email, password } = request.body;
        // Проверка: существует ли пользователь с таким email
        const existingUser = await User.findOne({ email });
        if (existingUser) return response.status(400).json({ message: 'The user already exists' });

        const hashedPassword = await bcrypt.hash(password, 10); // Хэшируем пароль
        // Создаём нового пользователя
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        response.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        response.status(500).json({ message: 'Registration error' });
    }
};
// Логин пользователя. Проверяет email и пароль, возвращает JWT токен.
export const login = async (request, response) => {
    try {
        const { email, password } = request.body;
        // Проверяем, есть ли такой пользователь
        const user = await User.findOne({ email });
        if (!user) return response.status(400).json({ message: 'User not found' });
        // Сравниваем введённый пароль с хэшированным
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return response.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign( // Генерируем JWT токен
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        response.json({ token });
    } catch (error) {
        response.status(500).json({ message: 'Login error' });
    }
};