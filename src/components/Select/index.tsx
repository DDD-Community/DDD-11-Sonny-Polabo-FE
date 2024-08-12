'use client'

import ArrowUpIcon from 'public/icons/arrow_up.svg'
import ArrowDownIcon from 'public/icons/arrow_down.svg'
import CheckIcon from 'public/icons/check.svg'
import { useState } from 'react'

interface SelectOptionProps {
  text: string
  selected: boolean
  onSelect: (value: string) => void
}

const SelectOption = ({ text, selected, onSelect }: SelectOptionProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(text)}
      className="ml-1.5 grid grid-cols-[13px_minmax(0,1fr)] items-center justify-items-start gap-1 border-b-[0.5px] border-b-gray-200 py-1.5 text-sm active:bg-gray-100"
    >
      {selected ? <CheckIcon /> : <div />}
      {text}
    </button>
  )
}

interface SelectProps {
  value: string
  options: string[]
  onSelect: (value: string) => void
}

const Select = ({ value, options, onSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onSelectItem = (selectedValue: string) => {
    onSelect(selectedValue)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className={`flex h-12 w-full items-center justify-between rounded-md border ${isOpen ? 'border-gray-400' : 'border-gray-800'} px-3.5`}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{value}</span>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 z-10 mt-1 flex w-full flex-col rounded-md border border-gray-400 bg-gray-0">
          {options.map((option) => (
            <SelectOption
              key={option}
              text={option}
              selected={value === option}
              onSelect={onSelectItem}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
