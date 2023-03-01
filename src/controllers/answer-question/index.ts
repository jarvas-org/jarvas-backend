import { app } from '../../app'
import bodyParser from 'body-parser'
import { openaiTextCompletion } from '../../utils/openai-text-completion'

app.use(bodyParser.json())
app.post('/answer-question', (req, res) => {
  openaiTextCompletion(req.body.text, (txt) => {
    if (txt != null) {
      res.write(txt)
    } else {
      res.end()
    }
  })
})
