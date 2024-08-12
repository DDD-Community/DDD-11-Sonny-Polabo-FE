import { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="mb-3.5 text-xl font-semiBold">{children}</h1>
}

export default Title
