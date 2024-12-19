import CloseIcon from 'public/icons/arrow_back_ios.svg'
import { useStickerModal } from '../../_contexts/ModalContext'

const Header = () => {
  const { closeModal } = useStickerModal()
  return (
    <header className="flex h-16 w-full justify-between px-5">
      <CloseIcon onClick={closeModal} className="cursor-pointer text-gray-0" />
      <div className="text-md font-semiBold leading-6 text-gray-0">스티커</div>
      <div className="w-6" />
    </header>
  )
}

export default Header
