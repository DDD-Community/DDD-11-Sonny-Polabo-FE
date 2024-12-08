import React from 'react'

interface BoardDecoratePageProps {
  searchParams: {
    polaroidIds: string[]
  }
}

const BoardDecoratePage = ({ searchParams }: BoardDecoratePageProps) => {
  return (
    <div>
      {searchParams.polaroidIds.map((polaroidId: string) => (
        <span key={polaroidId}>{polaroidId}</span>
      ))}
    </div>
  )
}

export default BoardDecoratePage
