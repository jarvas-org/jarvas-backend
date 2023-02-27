import express, { type Express } from 'express'
import { port } from './env-reader'

const app: Express = express()
app.listen(port, () => {
  console.log('Server started')
})

export { app }
