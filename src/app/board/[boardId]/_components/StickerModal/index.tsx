'use client'

import Menu0 from 'public/stickers/0.svg'
import Menu1 from 'public/stickers/1.svg'
import Header from './Header'
import Menu from './Menu'
import { StickerProvider } from './StickerContext'

const CreateSticker = () => {
  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col bg-gray-1000/70 py-10 backdrop-blur-md">
      <Header />
      <StickerProvider>
        <Menu>
          <Menu.Item icon={<Menu0 />} menuNum={0} />
          <Menu.Item icon={<Menu1 />} menuNum={1} />
        </Menu>
      </StickerProvider>
    </div>
  )
}

export default CreateSticker
