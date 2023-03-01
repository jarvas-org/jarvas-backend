import { app } from '../src/app'
import request from 'supertest'
import '../src'

describe('Main', () => {
  it('should return "This is the backend of JARVAS"', async () => {
    const res = await request(app).get('/')
    expect(res.text).toBe('This is the backend of JARVAS')
  })
})
