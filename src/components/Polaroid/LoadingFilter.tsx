import ReactDOM from 'react-dom'
import Loader from '../Loading'

const Loading = ({ message }: { message: string }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-0 z-10">
      <div className="max-w-md mx-auto min-h-screen px-5 py-10 flex flex-col justify-center items-center gap-2">
        <Loader message={message} />
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default Loading
