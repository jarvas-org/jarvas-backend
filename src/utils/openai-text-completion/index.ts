import { openai } from '../../openai'

export const openaiTextCompletion = async (text: string): Promise<string> =>
  await new Promise<string>((resolve, reject) => {
    void openai.createCompletion(
      {
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: 1000,
        stream: true
      }, {
        responseType: 'stream'
      })
      .then((completionResult) => {
        let responseText = ''
        // @ts-expect-error
        completionResult.data.on('data', (data: Buffer) => {
          try {
            const text = data.toString().slice(5)
            if (text.includes('[DONE]')) {
              resolve(responseText)
            } else {
              const newText: string = JSON.parse(text).choices[0].text
              responseText += newText
            }
          } catch (e) {
          }
        })
      })
  })
