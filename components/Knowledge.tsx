/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards'

const Knowledge = () => {
  return (
    <div>
      <h1 className="heading" id="knowledge">
        <span className="text-white">Educação e</span>{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Capacitações
        </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative mt-4 flex h-[50vh] flex-col items-center justify-center overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(company => (
            <React.Fragment key={company.id}>
              <div className="flex max-w-32 gap-2 sm:h-full md:max-h-full md:max-w-60">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-5 md:w-10"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-20 md:w-24"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Knowledge
