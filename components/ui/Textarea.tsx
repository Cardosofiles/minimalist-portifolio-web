'use client'

import { cn } from '@/utils/cn'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import * as React from 'react'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {} // 👈 correto aqui

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>( // 👈 correto aqui
  ({ className, ...props }, ref) => {
    const radius = 100
    const [visible, setVisible] = React.useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/textarea rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `dark:placeholder-text-neutral-600 duration-400 h-25 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black shadow-input transition placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/textarea:shadow-none dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }
)

TextArea.displayName = 'TextArea'

export { TextArea }
