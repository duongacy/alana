import { cn } from '@/utils/cn'

export const navLinkButtonStyle = (active?: boolean) =>
  cn(
    'flex py-2 px-4 items-center gap-x-1 text-xl font-semibold leading-6 text-neutral-800 hover:text-neutral-700 active:text-neutral-600 focus:outline-none shrink-0',
    {
      'bg-neutral-100': active
    }
  )
