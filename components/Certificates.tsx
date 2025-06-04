import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa'

import { workExperience } from '@/data'
import { Button } from './ui/MovingBorders'

const Certificates = () => {
  return (
    <div className="w-full pb-40 pt-40">
      <h1 className="heading" id="knowledge">
        <span className="text-white">Meus</span>{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Certificados
        </span>
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 max-md:grid-cols-1 lg:grid-cols-4">
        {workExperience.map(card => (
          <Link
            key={card.id}
            href={card.link}
            target="_blank"
            about="certificados"
            className="grid w-full lg:col-span-2"
          >
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              borderRadius="1.75rem"
              className="h-[180px] border-slate-800 p-5 text-white"
            >
              <div className="flex items-center justify-center gap-4 max-sm:gap-5">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-16 md:w-20 lg:w-32"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl font-bold tracking-widest md:text-2xl">
                    {card.title}
                  </h1>
                  <p className="mt-3 text-start font-semibold text-white-100">
                    {card.desc}
                  </p>
                  <p className="mt-3 flex items-center text-xs text-purple md:text-xs lg:text-sm">
                    Verifique o Link
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Certificates
