import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.PORT ?? 3000

export const nodeEnv = process.env.NODE_ENV

export const timeoutMs = Number(process.env.TIMEOUT_MS ?? 4900)

export const openAIToken = process.env.OPENAI_TOKEN
if (openAIToken == null) {
  console.log('Open AI token not found')
  process.exit(1)
}
