import { useEffect, useState } from 'react'
import { getBoardAvailableCount } from '@/lib'

export const useBoardAvailability = () => {
  const [isBoardAvailable, setIsBoardAvailable] = useState<boolean>(true)

  useEffect(() => {
    const checkBoardAvailability = async () => {
      const availableBoardCount = await getBoardAvailableCount()
      setIsBoardAvailable(availableBoardCount > 0)
    }

    checkBoardAvailability()
  }, [])

  return isBoardAvailable
}
