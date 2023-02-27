import { app } from '../../app'
import bodyParser from 'body-parser'
import { openaiTextCompletion } from '../../utils/openai-text-completion'

app.use(bodyParser.json())
app.post('/answer-question', (req, res) => {
  void openaiTextCompletion(req.body.text)
    .then(result => {
      console.log(result)
      res.send(result)
    })
})
