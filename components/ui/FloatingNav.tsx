'use client'

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/utils/cn'
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  const { scrollYProgress } = useScroll()

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          'border-black/.1 fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-lg border px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:min-w-[70vw] md:px-10 lg:min-w-fit',
          className
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(17, 25, 40, 0.75)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.125)',
        }}
      >
        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              idx
            }`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 text-white hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="!cursor-pointer text-sm">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
