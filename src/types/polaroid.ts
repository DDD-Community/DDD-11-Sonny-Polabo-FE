export interface Polaroid {
  id: number
  imageUrl: string
  oneLineMessage: string
  userId?: string
}

export interface CreatePolaroidPayload {
  imageKey: string
  oneLineMessage: string
}
