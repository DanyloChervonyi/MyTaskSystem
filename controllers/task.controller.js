import Task from '../models/task.model.js';

export const createTask = async (requset, response) => { // Создание новой задачи
    try {
        const { title, description, status, deadline } = requset.body;
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
export const getTasks = async (requset, response) => { // Получение списка задач текущего пользователя
    try {
        const tasks = await Task.find({ owner: requset.user.id });
        response.json(tasks);
    } catch (error) {
        response.status(500).json({ message: 'Error getting task' });
    }
};
export const updateTask = async (requset, response) => { // Обновление задачи по ID
    try {
        const { id } = requset.params;
        // Обновляем задачу, принадлежащую текущему пользователю
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, owner: requset.user.id },
            req.body,
            { new: true }
        );
        response.json(updatedTask);
    } catch (error) {
        response.status(500).json({ message: 'Error updating task' });
    }
};
export const deleteTask = async (requset, response) => { // Удаление задачи по ID
    try {
        const { id } = req.params;
        await Task.findOneAndDelete({ _id: id, owner: req.user.id });
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task' });
    }
};