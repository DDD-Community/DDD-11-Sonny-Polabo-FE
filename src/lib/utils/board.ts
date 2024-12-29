import { Board } from '@/types'
import { BOARDTHEMAS } from '@/lib'

export const getBoardStyle = (board: Board) => {
  const boardTheme = BOARDTHEMAS[board.options.THEMA].theme
  const titleClassName =
    boardTheme === 'LIGHT' ? 'text-gray-900' : 'text-gray-0'
  const selectCountClassName =
    boardTheme === 'LIGHT' ? 'text-gray-900/50' : 'text-gray-0/50'
  const backgroundImage = `/images/boardThemas/${board.options.THEMA}.png`

  return {
    titleClassName,
    selectCountClassName,
    backgroundImage,
  }
}
