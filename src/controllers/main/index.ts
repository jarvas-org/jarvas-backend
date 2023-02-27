import { type Request, type Response } from 'express'
import { app } from '../../app'

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to JARVAS')
})
