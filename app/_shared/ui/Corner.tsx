import { cn } from '@/app/_shared/lib/tailwindUtils'

export type ICornerTypes = 'rounded' | 'strict'

type ICorner = {
  type?: ICornerTypes
  className?: string
}

export const Corner = ({ className, type = 'rounded' }: ICorner) => {
  const classes = 'h-full absolute top-0 bottom-0 fill-current'

  if (type === 'rounded') {
    return (
      <svg
        className={cn(classes, className)}
        viewBox="0 0 24 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.5 0H17.1788C14.2886 0 11.6231 1.5589 10.2062 4.07791L1.40571 19.7232C-0.0703248 22.3472 0.0518688 25.5778 1.72191 28.0829L4.62507 32.4376C6.10879 34.6632 8.60664 36 11.2815 36H23.5V16.5V14.5V0Z" />
      </svg>
    )
  }

  return (
    <svg
      className={cn(classes, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 36"
      fill="none"
    >
      <path d="M28.6216 0H20.6215L0.62146 36H28.6216V0Z" />
    </svg>
  )
}
