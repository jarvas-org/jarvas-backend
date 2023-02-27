import { app } from '../src/app'
import request from 'supertest'
import '../src'

describe('Main', () => {
  it('should return "Welcome to JARVAS"', async () => {
    const res = await request(app).get('/')
    expect(res.text).toBe('Welcome to JARVAS')
  })
})
