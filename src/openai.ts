import { Configuration, OpenAIApi } from 'openai'
import { openAIToken } from './env-reader'

const configuration = new Configuration({
  apiKey: openAIToken
})

export const openai = new OpenAIApi(configuration)
