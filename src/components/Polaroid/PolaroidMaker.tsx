'use client'

import { ChangeEvent, useState } from 'react'
import Base from './Base'

const PolaroidMaker = () => {
  const [inputEnabled, setInputEnabled] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const MAX_LENGTH = 20
  return (
    <Base>
      <Base.Top>
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
          }}
        />
      </Base.Top>
      <Base.Bottom>
        {inputEnabled ? (
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length > MAX_LENGTH) {
                e.target.value = e.target.value.slice(0, MAX_LENGTH)
              }
              setText(e.target.value)
            }}
            className="bg-transparent w-full outline-none text-sm"
            maxLength={MAX_LENGTH}
            placeholder="눌러서 텍스트를 입력하세요"
            autoFocus
          />
        ) : (
          <div
            className="text-sm cursor-pointer"
            onClick={() => setInputEnabled(true)}
          >
            눌러서 텍스트를 입력하세요
          </div>
        )}

        <p className="text-xs text-gray-400 text-right">
          {text.length}/{MAX_LENGTH}
        </p>
      </Base.Bottom>
    </Base>
  )
}

export default PolaroidMaker
