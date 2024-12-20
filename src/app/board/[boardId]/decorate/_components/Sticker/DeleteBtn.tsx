import CloseIcon from 'public/icons/close.svg'
import { MoveableManagerInterface, Renderer } from 'react-moveable'

interface EditableProps {
  file: string
  deleteSticker: (file: string) => void
}

interface EditableState {
  pos2: [number, number]
}

const DeleteBtn = {
  name: 'editable',
  props: ['file', 'deleteSticker'],
  events: [],
  render(
    moveable: MoveableManagerInterface<EditableProps, EditableState>,
    React: Renderer,
  ) {
    const rect = moveable.getRect()
    const { pos2 } = moveable.state
    const { file, deleteSticker } = moveable.props

    const DeleteViewer = moveable.useCSS(
      'div',
      `
          {
              position: absolute;
              left: -12px;
              top: -12px;  
              z-index: 100;
          }
        `,
    )
    return (
      <DeleteViewer
        key="editable-viewer"
        className="moveable-editable"
        style={{
          transform: `translate(${pos2[0]}px, ${pos2[1]}px) rotate(${rect.rotation}deg) `,
        }}
      >
        <button
          type="button"
          className="h-6 w-6 rounded-full bg-gray-1000"
          onClick={() => deleteSticker(file)}
          aria-label="Delete sticker"
        >
          <CloseIcon className="text-gray-0" />
        </button>
      </DeleteViewer>
    )
  },
} as const

export default DeleteBtn
