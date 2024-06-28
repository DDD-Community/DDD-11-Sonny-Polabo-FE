export interface Polaroid {
  id: number
  boardId: number
  content: string
  text: string
}

export interface CreatePolaroidPayload {
  boardId: number
  content: string
  text: string
}
