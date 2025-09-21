require('dotenv').config();
process.env.NODE_ENV = 'test';

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const User = require('../models/User');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

beforeEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('User API', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Alice', email: `alice${Date.now()}@example.com` });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'Alice');
  });

  it('should fetch all users', async () => {
    await request(app)
      .post('/api/users')
      .send({ name: 'Bob', email: `bob${Date.now()}@example.com` });

    const res = await request(app).get('/api/users');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should fetch a user by ID', async () => {
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'Charlie', email: `charlie${Date.now()}@example.com` });

    const res = await request(app).get(`/api/users/${userRes.body._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', userRes.body._id);
    expect(res.body).toHaveProperty('name', 'Charlie');
  });

  it('should update a user', async () => {
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'David', email: `david${Date.now()}@example.com` });

    const res = await request(app)
      .put(`/api/users/${userRes.body._id}`)
      .send({ name: 'David Updated' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'David Updated');
  });

  it('should delete a user', async () => {
    const userRes = await request(app)
      .post('/api/users')
      .send({ name: 'Eve', email: `eve${Date.now()}@example.com` });

    const res = await request(app).delete(`/api/users/${userRes.body._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted successfully');
  });
});
