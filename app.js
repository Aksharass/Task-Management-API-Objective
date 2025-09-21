const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

// Only connect to MongoDB if not in test mode
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGO_URI);
}

module.exports = app;
