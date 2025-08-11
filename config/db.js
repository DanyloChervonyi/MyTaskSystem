import mongoose from 'mongoose';

export const connectDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL, { // Подключаемся к MongoDB с указанными параметрами
            useNewUrlParser: true, // новый парсер URL
            useUnifiedTopology: true // новый движок управления подключением
        });
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ Error connecting to DB:', error);
        process.exit(1); // Завершаем процесс, если подключение провалилось
    }
};