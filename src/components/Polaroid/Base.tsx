import { ReactNode } from 'react'

const Top = ({ children }: { children: ReactNode }) => (
  <div className="p-3 pt-5">
    <div className="w-40 h-48 overflow-hidden">{children}</div>
  </div>
)

const Bottom = ({ children }: { children: ReactNode }) => (
  <div className="px-1 pb-3 bg-gradient-polaroid">{children}</div>
)

const Base = ({ children }: { children: ReactNode }) => {
  return (
    <div className="shadow-lg rounded-lg m-4 bg-gray-200 font-hesom">
      {children}
    </div>
  )
}

Base.Top = Top
Base.Bottom = Bottom

export default Base
