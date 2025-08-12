import Task from '../models/task.model.js';

export const createTask = async (request, response) => { // Создание новой задачи
    try {
        const { title, description, status, deadline } = request.body;
        const task = new Task({ // Создаём задачу, привязываем к пользователю по его ID
            title,
            description,
            status,
            deadline,
            owner: requset.user.id
        });
        await task.save();
        response.status(201).json(task);
    } catch (error) {
        response.status(500).json({ message: 'Task creation error' });
    }
};
export const getTasks = async (request, response) => { // Получение списка задач текущего пользователя
    try {
        const tasks = await Task.find({ owner: request.user.id });
        response.json(tasks);
    } catch (error) {
        response.status(500).json({ message: 'Error getting task' });
    }
};
export const updateTask = async (request, response) => { // Обновление задачи по ID
    try {
        const { id } = request.params;
        // Обновляем задачу, принадлежащую текущему пользователю
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: request.user.id },
            req.body,
            { new: true }
        );
        response.json(updatedTask);
    } catch (error) {
        response.status(500).json({ message: 'Error updating task' });
    }
};
export const deleteTask = async (request, response) => { // Удаление задачи по ID
    try {
        const { id } = request.params;
        await Task.findOneAndDelete({ _id: id, owner: request.user.id });
        response.json({ message: 'Task deleted' });
    } catch (error) {
        response.status(500).json({ message: 'Error deleting task' });
    }
};