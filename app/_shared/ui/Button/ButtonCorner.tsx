import { cn } from '@/app/_shared/lib/tailwindUtils'

export const ButtonCorner = ({ className }: { className: string }) => {
  return (
    <svg
      className={cn('h-full absolute top-0 bottom-0 fill-current', className)}
      viewBox="0 0 24 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.5 0H17.1788C14.2886 0 11.6231 1.5589 10.2062 4.07791L1.40571 19.7232C-0.0703248 22.3472 0.0518688 25.5778 1.72191 28.0829L4.62507 32.4376C6.10879 34.6632 8.60664 36 11.2815 36H23.5V16.5V14.5V0Z" />
    </svg>
  )
}
