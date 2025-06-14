/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

import { cn } from '@/utils/cn'
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [scope.current])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={word + idx}
              className={`${
                idx > 6
                  ? 'bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent'
                  : 'text-white'
              } opacity-0`}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-5">
        <div className="sleading-snug tracking-wide text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
