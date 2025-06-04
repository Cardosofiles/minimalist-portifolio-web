import { cn } from '@/utils/cn'
import {
  IconAutomation,
  IconBook,
  IconDevices,
  IconLock,
  IconReplaceUser,
  IconRocket,
  IconTargetArrow,
  IconTrophyFilled,
} from '@tabler/icons-react'

export function FeaturesSectionHover() {
  const features = [
    {
      title: 'Aprendizado Contínuo',
      description:
        'Comprometido com a evolução constante, busco aprimorar minhas habilidades em JavaScript, TypeScript e frameworks modernos.',
      icon: <IconBook />,
    },
    {
      title: 'Projetos Práticos',
      description:
        'Desenvolvendo aplicações completas, integrando APIs e banco de dados para entregar soluções funcionais e escaláveis.',
      icon: <IconRocket />,
    },
    {
      title: 'Design Responsivo UI/UX',
      description:
        'Valorizo a experiência do usuário, aplicando versatilidade para criar interfaces intuitivas e adaptáveis a diferentes dispositivos.',
      icon: <IconDevices />,
    },
    {
      title: 'Segurança em Foco',
      description:
        'Estudando cibersegurança para implementar práticas que garantam a proteção de dados e a integridade das aplicações.',
      icon: <IconLock />,
    },
    {
      title: 'Colaboração em Equipe',
      description:
        'Experiência em ambientes colaborativos, utilizando Git e plataformas como GitHub para controle de versão e integração contínua.',
      icon: <IconReplaceUser />,
    },
    {
      title: 'Formação Acadêmica',
      description:
        'Cursando Análise e Desenvolvimento de Sistemas, aplico os conhecimentos adquiridos para resolver problemas reais, unido boas práticas de desenvolvimento.',
      icon: <IconTrophyFilled />,
    },
    {
      title: 'Automação de Processos',
      description:
        'Utilizo ferramentas como Docker e scripts de automação para otimizar fluxos de trabalho, melhorando a eficiência nas implantações de aplicações.',
      icon: <IconAutomation />,
    },
    {
      title: 'Objetivos Futuros',
      description:
        'Almejo atuar como desenvolvedor full stack, aprofundando meus conhecimentos em back-end e cibersegurança de forma inovadora.',
      icon: <IconTargetArrow />,
    },
  ]
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex flex-col rounded-lg border border-white/[0.1] py-10',
        (index === 0 || index === 4) && 'rounded-lg border border-white/[0.1]',
        index < 4 && 'rounded-lg border border-white/[0.1]'
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)',
      }}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full rounded-lg bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-violet-950" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full rounded-lg bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-violet-950" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-xs text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  )
}
