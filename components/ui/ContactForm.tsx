'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { IconBrandWhatsapp, IconMailFilled } from '@tabler/icons-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import z from 'zod'

import { cn } from '@/utils/cn'
import { Input } from './Input'
import { Label } from './Label'
import { TextArea } from './Textarea'

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'Digite seu primeiro nome.' }),
  lastName: z.string().min(2, { message: 'Digite seu sobrenome.' }),
  email: z.string().email({ message: 'Digite um e-mail válido.' }),
  telephone: z
    .string()
    .optional()
    .refine(val => !val || /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(val), {
      message: 'Telefone inválido. Use o formato (00) 00000-0000',
    }),
  message: z
    .string()
    .min(5, { message: 'A mensagem precisa ter pelo menos 5 caracteres.' }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Mensagem enviada com sucesso!')
        reset()
      } else {
        alert('Falha ao enviar a mensagem.')
      }
    } catch (error) {
      console.error(error)
      alert('Erro inesperado.')
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-none shadow-input md:rounded-2xl md:px-8">
      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Deixe sua mensagem
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Responderei o mais breve possível
      </p>

      <form className="my-8" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstName">Nome</Label>
            <Input
              id="firstName"
              {...register('firstName')}
              name="firstName"
              placeholder="Tyler"
            />

            {errors.firstName && (
              <span className="text-xs text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input
              id="lastName"
              {...register('lastName')}
              name="lastName"
              placeholder="Durden"
            />

            {errors.lastName && (
              <span className="text-xs text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="flex items-center gap-2">
            Email Address
            <IconMailFilled className="size-3.5" />
          </Label>
          <Input
            id="email"
            {...register('email')}
            name="email"
            placeholder="example@mail.com"
          />

          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="flex items-center gap-2" htmlFor="telephone">
            Contato (opcional)
            <IconBrandWhatsapp className="size-3.5" />
          </Label>

          <InputMask mask="(99) 99999-9999" {...register('telephone')}>
            {inputProps => (
              <Input
                {...inputProps}
                id="telephone"
                name="telephone"
                placeholder="(34) 99999-9999"
              />
            )}
          </InputMask>

          {errors.telephone && (
            <span className="text-xs text-red-500">
              {errors.telephone.message}
            </span>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Assunto</Label>
          <TextArea
            id="message"
            {...register('message')}
            name="message"
            placeholder="Digite sua mensagem..."
          />

          {errors.message && (
            <span className="text-xs text-red-500">
              {errors.message.message}
            </span>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Enviar
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        {/* <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  )
}
