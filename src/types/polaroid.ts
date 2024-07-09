import { FILTERS } from '../lib/constants/polaroidConfig'

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

export interface PolaroidImageProps {
  imageUrl: string
  filter?: keyof typeof FILTERS
}
