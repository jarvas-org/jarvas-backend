import { app } from '../../app'
import bodyParser from 'body-parser'
import { openaiChatCompletion } from '../../utils/openai-chat-completion'
import { type ChatCompletionRequestMessage } from 'openai'

app.use(bodyParser.json())
app.post<
unknown,
unknown,
{
  messages: ChatCompletionRequestMessage[]
}
>('/chat', (req, res) => {
  openaiChatCompletion(req.body.messages, (txt) => {
    if (txt !== null) {
      res.write(txt)
    } else {
      res.end()
    }
  })
})
