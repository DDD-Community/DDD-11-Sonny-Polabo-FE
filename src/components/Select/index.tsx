'use client'

import ArrowUpIcon from 'public/icons/arrow_up.svg'
import ArrowDownIcon from 'public/icons/arrow_down.svg'
import CheckIcon from 'public/icons/check.svg'
import { useState } from 'react'

type OptionType<T> = {
  value: T
  label: string
}

interface SelectOptionProps<T> {
  option: OptionType<T>
  selected: boolean
  onSelect: (value: OptionType<T>) => void
}

const SelectOption = <T,>({
  option,
  selected,
  onSelect,
}: SelectOptionProps<T>) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(option)}
      className="ml-1.5 grid grid-cols-[13px_minmax(0,1fr)] items-center justify-items-start gap-1 border-b-[0.5px] border-b-gray-200 py-1.5 text-sm active:bg-gray-100"
    >
      {selected ? <CheckIcon /> : <div />}
      {option.label}
    </button>
  )
}

interface SelectProps<T> {
  selectedOption: OptionType<T>
  options: OptionType<T>[]
  onSelect: (value: OptionType<T>) => void
}

const Select = <T,>({ selectedOption, options, onSelect }: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const onSelectItem = (selectedValue: OptionType<T>) => {
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
