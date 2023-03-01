import { port, nodeEnv } from './env-reader'
import { app } from './app'

if (nodeEnv !== 'test') {
  app.listen(port, () => {
    console.log('Server started')
  })
}
