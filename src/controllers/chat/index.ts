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
  let isEnd = false
  openaiChatCompletion(req.body.messages, (txt) => {
    if (txt !== null) {
      res.write(txt)
    } else {
      if (!isEnd) {
        isEnd = true
        res.end()
      }
    }
  })
  setTimeout(() => {
    if (!isEnd) {
      isEnd = true
      res.end('[OpenAI is dead]')
    }
  }, 4900)
})
