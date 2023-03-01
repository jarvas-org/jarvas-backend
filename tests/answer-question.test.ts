import { app } from '../src/app'
import request from 'supertest'
import '../src'

describe('Answer Question', () => {
  it('should return the answer of the question', async () => {
    const res = await request(app).post('/answer-question').send({ text: 'Please reply "yes"' })
    expect(res.statusCode).toBe(200)
  })
})
