const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getTasks } = require('../controllers/taskController');

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/', getTasks);

module.exports = router;
