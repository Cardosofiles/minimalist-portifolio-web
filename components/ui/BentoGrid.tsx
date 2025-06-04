'use client'
import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import Lottie from 'react-lottie'

import { cn } from '@/utils/cn'
import { BackgroundGradientAnimation } from './BackgroundGradient'

import animationData from '@/data/confetti.json'
import GridGlobe from './GridGlobe'
import MagicButton from './MagicButton'

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

interface BentoGridItemsProps {
  id?: number
  description?: string | React.ReactNode
  className?: string
  img?: string
  imgClassName?: string
  spareImg?: string
  title?: string | React.ReactNode
  titleClassName?: string
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem: React.FC<BentoGridItemsProps> = ({
  id,
  description,
  className,
  img,
  imgClassName,
  spareImg,
  title,
  titleClassName,
}) => {
  const [copied, setCopied] = useState(false)

  const leftList = ['JavaScript', 'React.JS', 'Next.js']
  const rightList = ['TypeScript', 'MongoDB', 'PostgreSQL']

  const handleCopy = () => {
    const text = 'cardosofiles@outlook.com'
    navigator.clipboard.writeText(text)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div
      className={cn(
        className,
        'group/bento relative row-span-1 overflow-hidden rounded-3xl border border-white/[0.1] hover:shadow-xl',
        'flex flex-col justify-between space-y-4 text-white shadow-input transition duration-200 dark:shadow-none'
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full'`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>

        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'h-full w-full object-cover object-center'}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            'relative transition duration-200 group-hover/bento:translate-x-2 md:h-full',
            'flex min-h-40 flex-col p-5 px-5 lg:p-10'
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] max-sm:max-w-32 md:max-w-32 md:text-xs lg:max-w-40 lg:text-base">
            {description}
          </div>
          <div
            // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftList.map((item, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center lg:px-3 lg:py-4" />
              </div>

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center lg:px-3 lg:py-4" />
                {rightList.map((item, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                } `}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? 'Copiado!' : 'Copiar E-mail'}
                icon={<IoCopyOutline />}
                position="left"
                handleclick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
