import { openai } from '../../openai'

export const openaiTextCompletion = (textInput: string, onText: (txt: string | null) => void): void => {
  void openai.createCompletion(
    {
      model: 'text-davinci-003',
      prompt: textInput,
      max_tokens: 1000,
      stream: true
    }, {
      responseType: 'stream'
    })
    .then((completionResult: any) => {
      completionResult.data.on('data', (data: Buffer) => {
        try {
          const text = data.toString().slice(5)
          if (text.includes('[DONE]')) {
            onText(null)
          } else {
            const newText: string = JSON.parse(text).choices[0].text
            onText(newText)
          }
        } catch (e) {
        }
      })
    })
}
