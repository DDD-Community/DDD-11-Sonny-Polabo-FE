import { ReactNode } from 'react'

const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="mb-3 text-lg font-semiBold">{children}</h1>
)

export default Title
