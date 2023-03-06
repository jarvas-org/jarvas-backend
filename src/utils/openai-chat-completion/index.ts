import { openai } from '../../openai'
import { type ChatCompletionRequestMessage } from 'openai/api'
import { type ChatCompletionResult } from '../../types/ChatCompletionResult'

const parseCompletionResultBufferData = (data: Buffer): ChatCompletionResult | null => {
  const completionResultStringData = data.toString().slice(5)
  let completionResultObj: ChatCompletionResult | null = null
  try {
    completionResultObj = JSON.parse(completionResultStringData)
  } catch (e) {
  }
  return completionResultObj
}

export const openaiChatCompletion = (messages: ChatCompletionRequestMessage[], onText: (txt: string | null) => void): void => {
  void openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    stream: true
  }, {
    responseType: 'stream'
  }).then((completionResult: any) => {
    completionResult.data.on('data', (data: Buffer) => {
      const result = parseCompletionResultBufferData(data)
      if (result != null) {
        if (result.choices[0].finish_reason === null) {
          const txt = result.choices[0].delta.content
          if (txt !== undefined) {
            onText(txt)
          }
        } else {
          onText(null)
        }
      }
    })
  })
}
