import { type Request, type Response } from 'express'
import { app } from '../../app'

app.get('/', (req: Request, res: Response) => {
  res.send('This is the backend of JARVAS')
})
