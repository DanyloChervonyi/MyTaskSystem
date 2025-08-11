import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({ // Описание схемы коллекции пользователей
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);