'use client'

import { cn } from '@/app/_shared/lib/tailwindUtils'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

const Accordion = Root

const AccordionItem = forwardRef<ComponentRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => (
    <Item
      className={cn(
        'accordion__item rounded-lg transition-colors mb-[10px] last:mb-0 data-[state=open]:text-foreground-fourth data-[state=open]:bg-background-eight data-[state=closed]:text-foreground-eleventh data-[state=closed]:bg-transparent data-[state=closed]:hover:text-foreground-fourth',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef<
  ComponentRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="accordion__header flex my-0">
    <Trigger
      className={cn(
        'accordion__header-trigger [&[data-state=open]>div]:before:translate-x-[-50%] [&[data-state=open]>div]:before:scale-y-0 [&[data-state=closed]>div]:after:translate-y-[-50%] [&[data-state=closed]>div]:after:scale-x-100 font-main text-inherit flex flex-1 items-start justify-between p-[20px] text-left text-lg font-bold leading-[127%]',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="flex-1">{children}</span>

      <div className="accordion__header-icon flex-[0_0_auto] w-[14px] h-[14px] relative cursor-pointer inline-block ml-[20px] mt-[4px] before:content-[''] before:absolute before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:will-change-transform before:w-[3px] before:h-full before:top-0 before:left-1/2 before:translate-x-[-50%] after:content-[''] after:absolute after:bg-current after:transition-transform after:duration-300 after:ease-in-out after:will-change-transform after:w-full after:h-[3px] after:top-1/2 after:left-0 after:translate-y-[-50%]" />
    </Trigger>
  </Header>
))

AccordionTrigger.displayName = Trigger.displayName

const AccordionContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    className="group accordion__body [&[data-state=open]>div]:opacity-100 [&[data-state=closed]>div]:opacity-0 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-inherit font-main text-sm  font-bold leading-[127%] overflow-hidden px-[20px]"
    ref={ref}
    {...props}
  >
    <div className={cn('accordion__body-content transition-opacity pt-0 pb-[20px]', className)}>
      {children}
    </div>
  </Content>
))

AccordionContent.displayName = Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
