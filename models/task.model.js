import mongoose from 'mongoose';

export const taskSchema = new mongoose.Schema({ // Схема коллекции задач
    title: { type: String, required: true, trim: true },
    description: { type: String },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
    deadline: { type: Date },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', taskSchema);