import { FILTERS } from '../lib/constants/polaroidConfig'

export interface Polaroid {
  id: number
  imageUrl: string
  oneLineMessage: string
  nickname: string
}

export interface CreatePolaroidPayload {
  imageKey: string
  oneLineMessage: string
  nickname: string
}

export interface PolaroidImageProps {
  imageUrl: string
  filter?: keyof typeof FILTERS
}
