import request from "supertest";
import {app} from "../src/app";
import '../src'

describe('ChatGPT', () => {
  it('should return the answer of the question', async () => {
    const res = await request(app).post('/chat').send({
      messages: [
        {role: 'system', 'content': 'Welcome to Jarvas'},
        {role: 'user', 'content': 'Reply "Yes"'},
      ]
    })
    expect(res.statusCode).toBe(200)
  })
})
