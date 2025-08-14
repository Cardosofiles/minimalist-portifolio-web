/* eslint-disable @next/next/no-img-element */

import { socialMedia } from '@/data'
import { IconForms } from '@tabler/icons-react'
import { ContactForm } from './ui/ContactForm'
import MagicButton from './ui/MagicButton'
import { Popover, PopoverContent, PopoverTrigger } from './ui/Popover'

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-40" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="footer-img"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading text-center text-xl tracking-widest text-blue-200 lg:max-w-[45vw]">
          Pronto para levar seus{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
            Websites
          </span>{' '}
          ao proximo nível?
        </h1>
        <p className="my-5 text-center text-white-100 md:mt-10">
          Entre em contato comigo, vamos trabalhar juntos para alcançar o
          sucesso.
        </p>

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MagicButton
              title="Formulário"
              icon={<IconForms />}
              position="right"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="mb-2 bg-black-100">
            <ContactForm />
          </DropdownMenuContent>
        </DropdownMenu> */}

        {/* <a
          className="flex items-center justify-center"
          href="mailto:cardosofiles@outlook.com"
        >
          <MagicButton
            title="Contact-me"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="flex items-center"
          />
        </a> */}

        <Popover>
          <PopoverTrigger asChild>
            <MagicButton
              title="Formulário"
              icon={<IconForms />}
              position="right"
            />
          </PopoverTrigger>
          <PopoverContent
            align="center"
            className="mb-4 w-96 max-w-3xl bg-black-100 lg:w-11/12"
          >
            <ContactForm />
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between space-y-5 md:mb-5 md:flex-row lg:mt-28">
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map(info => (
            <a
              href={info.link}
              target="_blank"
              key={info.id}
              className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              rel="noreferrer"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
        <p className="text-sm font-light text-white md:mt-4 md:text-base md:font-normal">
          Copyright © 2024 João Batista
        </p>
      </div>
    </footer>
  )
}

export default Footer
