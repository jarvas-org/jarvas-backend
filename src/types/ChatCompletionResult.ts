export interface ChatCompletionResult {
  id: string
  object: string
  created: number
  model: string
  choices: Array<{
    delta: {
      role?: string
      content?: string
    }
    index: number
    finish_reason: string | null
  }>
}
