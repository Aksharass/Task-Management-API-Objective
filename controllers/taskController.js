const Task = require('../models/Task');
const User = require('../models/User'); 

exports.createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);  
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        next(err);
    }
};

exports.deleteTask = async (req, res, next) => {                                
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' })   ;
        res.json({ message: 'Task deleted' });                      
    } catch (err) {
        next(err);
    }
};

exports.getTasks = async (req, res, next) => {
    try {
        const { status, deadline } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (deadline) filter.deadline = { $lte: new Date(deadline) };

        const tasks = await Task.find(filter)
            .populate('assignedUser');

        res.json(tasks);
    } catch (err) {
        next(err);
    }
};