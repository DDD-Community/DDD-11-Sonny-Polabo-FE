import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const PolaroidDescription = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${twMerge('flex flex-col gap-0.5 px-4 pb-2', className)}`}
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #EAEAEA',
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default PolaroidDescription
