import React from 'react'
import Header from '@/components/Header'

interface SelectHeaderProps {
  total: number
  selected: number
}

const SelectHeader = ({ total, selected }: SelectHeaderProps) => {
  return (
    <Header
      title={
        <div className="flex flex-col items-center justify-center gap-[3px] text-center text-md font-semiBold leading-6">
          <h1>꾸미고 싶은 폴라로이드를 골라주세요</h1>
          <h2 className="flex gap-0.5">
            <span className="text-gray-400">{selected}</span>
            <span className="text-gray-400">/</span>
            <span>{total}</span>
          </h2>
        </div>
      }
      className="bg-transparent"
      shadow={false}
    />
  )
}

export default SelectHeader
