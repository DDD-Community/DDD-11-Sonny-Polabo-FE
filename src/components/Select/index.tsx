'use client'

import ArrowUpIcon from 'public/icons/arrow_up.svg'
import ArrowDownIcon from 'public/icons/arrow_down.svg'
import CheckIcon from 'public/icons/check.svg'
import { useState } from 'react'

export type SelectOptionType = {
  value: unknown
  label: string
}

interface SelectOptionProps<T extends SelectOptionType> {
  option: T
  selected: boolean
  onSelect: (value: T) => void
}

const SelectOption = <T extends SelectOptionType>({
  option,
  selected,
  onSelect,
}: SelectOptionProps<T>) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      className="ml-3 grid grid-cols-[13px_minmax(0,1fr)] items-center justify-items-start gap-2 border-b-[0.5px] border-b-gray-200 py-1.5 text-sm active:bg-gray-100"
    >
      {selected ? <CheckIcon /> : <div />}
      {option.label}
    </button>
  )
}

interface SelectProps<T extends SelectOptionType> {
  selectedOption: T
  options: T[]
  onSelect: (value: T) => void
}

const Select = <T extends SelectOptionType>({
  selectedOption,
  options,
  onSelect,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const onSelectItem = (value: T) => {
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className={`flex h-12 w-full items-center justify-between rounded-md border ${isOpen ? 'border-gray-400' : 'border-gray-800'} px-3.5`}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedOption.label}</span>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 z-10 mt-1 flex w-full flex-col rounded-md border border-gray-400 bg-gray-0">
          {options.map((option) => (
            <SelectOption<T>
              key={option.label}
              option={option}
              selected={selectedOption.value === option.value}
              onSelect={onSelectItem}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
