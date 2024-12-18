import React from 'react'
import Image from 'next/image'

interface BoardDecoratePageProps {
  searchParams: {
    imageUrl: string
  }
}

const BoardDecoratePage = async ({ searchParams }: BoardDecoratePageProps) => {
  const { imageUrl } = searchParams

  return (
    <div>
      <div>
        <Image src={imageUrl} alt="screenshot" width={1080} height={1920} />
      </div>
    </div>
  )
}

export default BoardDecoratePage
