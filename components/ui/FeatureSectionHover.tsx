import { cn } from "@/utils/cn";
import {
  IconAutomation,
  IconBook,
  IconDevices,
  IconLock,
  IconReplaceUser,
  IconRocket,
  IconTargetArrow,
  IconTrophyFilled,
} from "@tabler/icons-react";

export function FeaturesSectionHover() {
  const features = [
    {
      title: "Aprendizado Contínuo",
      description:
        "Comprometido com a evolução constante, busco aprimorar minhas habilidades em JavaScript, TypeScript e frameworks modernos.",
      icon: <IconBook />,
    },
    {
      title: "Projetos Práticos",
      description:
        "Desenvolvendo aplicações completas, integrando APIs e banco de dados para entregar soluções funcionais e escaláveis.",
      icon: <IconRocket />,
    },
    {
      title: "Design Resposvivo UI/UX",
      description:
        "Valorizo a experiência do usuário, aplicando versatilidade para criar interfaces intuitivas e adaptáveis a diferentes dispositivos.",
      icon: <IconDevices />,
    },
    {
      title: "Segurança em Foco",
      description:
        "Estudando cibersegurança para implementar práticas que garantam a proteção de dados e a integridade das aplicações.",
      icon: <IconLock />,
    },
    {
      title: "Colaboração em Equipe",
      description:
        "Experiência em ambientes colaborativos, utilizando Git e plataformas como GitHub para controle de versão e integração contínua.",
      icon: <IconReplaceUser />,
    },
    {
      title: "Formação Acadêmica",
      description:
        "ursando Análise e Desenvolvimento de Sistemas, aplico os conhecimentos adquiridos para resolver problemas reais, unido boas práticas de desenvolvimento",
      icon: <IconTrophyFilled />,
    },
    {
      title: "Automação de Processos",
      description:
        "Utilizo ferramentas como Docker e scripts de automação para otimizar fluxos de trabalho, melhorando a eficiência nas implantações de aplicações.",
      icon: <IconAutomation />,
    },
    {
      title: "Objetivos Futuros",
      description:
        "Almejo atuar como desenvolvedor full stack, aprofundando meus conhecimentos em back-end e cibersegurança de forma inovadora.",
      icon: <IconTargetArrow />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-white/[0.1]",
        (index === 0 || index === 4) && "lg:border-l border-white/[0.1]",
        index < 4 && "lg:border-b border-white/[0.1]"
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)",
      }}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-violet-950 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-violet-950 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
