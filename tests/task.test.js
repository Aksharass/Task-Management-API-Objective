require('dotenv').config();
process.env.NODE_ENV = 'test';

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');
const Task = require('../models/Task');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

beforeEach(async () => {
  await User.deleteMany({});
  await Task.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Task API', () => {
  let userId;

  beforeEach(async () => {
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'Test User', email: `test${Date.now()}@example.com` });
    userId = userRes.body._id;
  });

  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Task 1',
        description: 'First task',
        status: 'pending',
        deadline: '2025-09-30',
        assignedUser: userId,
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Task 1');
    expect(res.body).toHaveProperty('assignedUser', userId);
  });

  it('should fetch all tasks', async () => {
    await request(app).post('/api/tasks').send({
      title: 'Task A',
      description: 'Desc A',
      status: 'pending',
      deadline: '2025-09-30',
      assignedUser: userId,
    });

    const res = await request(app).get('/api/tasks');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch tasks filtered by status', async () => {
    await request(app).post('/api/tasks').send({
      title: 'Pending Task',
      description: 'Pending desc',
      status: 'pending',
      deadline: '2025-09-30',
      assignedUser: userId,
    });

    await request(app).post('/api/tasks').send({
      title: 'Completed Task',
      description: 'Completed desc',
      status: 'completed',
      deadline: '2025-09-30',
      assignedUser: userId,
    });

    const res = await request(app).get('/api/tasks?status=completed');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty('status', 'completed');
  });

  it('should update a task', async () => {
    const task = await request(app).post('/api/tasks').send({
      title: 'Task B',
      description: 'Desc B',
      status: 'pending',
      deadline: '2025-09-30',
      assignedUser: userId,
    });

    const res = await request(app)
      .put(`/api/tasks/${task.body._id}`)
      .send({ status: 'completed' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'completed');
  });

  it('should delete a task', async () => {
    const task = await request(app).post('/api/tasks').send({
      title: 'Task C',
      description: 'Desc C',
      status: 'pending',
      deadline: '2025-09-30',
      assignedUser: userId,
    });

    const res = await request(app).delete(`/api/tasks/${task.body._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});
