export const navItems = [
  { name: "Início", link: "#home" },
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Educação", link: "#knowledge" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Colaboração com cliente, promovendo a comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/background.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comunicações flexível em diferentes fusos horários",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Linguagens",
    description: "Estou constantemente me atualizando com as",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center ",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia com paixão pelo desenvolvimento",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Atualmente cursando ADS",
    description: "Unitri Uberlândia",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer começar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portifólio WEB",
    des: "Desenvolvido com HTML, CSS, jQuery e PHP, este projeto visa apresentar meu currículo e certificados de forma acessível e organizada para recrutadores.",
    img: "/web-portifolio.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/three.svg", "/fm.svg"],
    link: "https://newportifoliocardosofiles.netlify.app/",
  },
  {
    id: 2,
    title: "Dashboard UI / UX",
    des: "Desenvolvido com TypeScript e Next.Js junto com as bibliotecas: AutoAnimate, Framer Motion, Lucide, Tailwind Variants e Radix UI. layout responsivo com tema dark e light.",
    img: "/tailwind-course.png",
    iconLists: ["/ts.svg", "/tail.svg", "/next.svg", "/radix.svg", "/c.svg"],
    link: "https://tailwind-course-cardosofiles.vercel.app/",
  },
  {
    id: 3,
    title: "Social Feed",
    des: "Projeto para implementar os conceitos fundamentais do ReactJS, sendo eles, estado, propriedade e componente.",
    img: "/home-page.png",
    iconLists: ["/re.svg", "/css.svg", "/ts.svg", "/vitejs.svg", "/c.svg"],
    link: "https://social-feed-reactjs.vercel.app/",
  },
  {
    id: 4,
    title: "Jogo da Memória",
    des: "Criado com HTML, CSS e JavaScript, afim de Praticar a Lógica de Programação",
    img: "/memory-game.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/sass.svg", "/gsap.svg"],
    link: "https://memorygamecardosofiles.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "O curso de Análise e Desenvolvimento de Sistema tem como objetivo me desenvolver para implementar, manter e gerenciar infraestruturas de TI, utilizando ferramentas computacionais, equipamentos de informática e metodologias de projetos. Foca na atuação de desenvolvimento WEB com usabilidade, robustez, integridade e segurança dos sistemas, preparando para utilizar as tecnologias do mercado empresarial e administrativo.",
    name: "Análise e Desenvolvimento de Sistemas",
    title: "Faculdade Anhanguera - São José dos Campos",
    image: "/image.png",
  },
  {
    quote:
      "O curso de Full Stack JavaScript da OneBitCode tem uma imersão completa nas tecnologias mais utilizadas no desenvolvimento web moderno. Ao longo do curso, adquiriri habilidades práticas em diversas linguagens e frameworks essenciais, como HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js, Node.js, APIs, MongoDB, SQL, PostgreSQL e Figma, tornando-se um desenvolvedor full stack competente.",
    name: "Full Stack JavaScript",
    title: "OneBitCode",
    image: "/oneBitCode.jpg",
  },
  {
    quote:
      "Uma formação abrangente em Python com foco em pandas, pyautogui, selenium, MongoDB e SQLite abrange desde os fundamentos básicos do Python até a manipulação avançada de dados com pandas, automação de tarefas com pyautogui, testes automatizados em navegadores web usando selenium, e o uso de bancos de dados MongoDB e SQLite para armazenamento e manipulação de dados. Essa formação oferece habilidades solidas na automação de tarefas.",
    name: "Python Automações",
    title: "OneBitCode",
    image: "/oneBitCode.jpg",
  },
  {
    quote:
      "A formação em React.js pela Rocketseat proporciona uma imersão profunda nas tecnologias mais avançadas do ecossistema JavaScript moderno. Fui capaz de desenvolver habilidades práticas com TypeScript, React, Next.js, Vite, e TailwindCSS, além de Styled Components para estilização, Radix UI e Shadcn UI para criação de interfaces acessíveis e personalizadas. A formação também inclui o uso de ferramentas poderosas como Axios para consumo de APIs, Prisma para banco de dados, e gerenciamento de estado com Zustand e Redux, tornando-se um desenvolvedor front-end completo e capacitado.",
    name: "React JS",
    title: "Rocketseat",
    image: "/rocketseat.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/TypeScript-Logo.wine.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/nextjs-svgrepo-com.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/tail.svg",
    nameImg: "/tailwindcss-logotype.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "JavaScript Full Stack",
    desc: "Certificados Expedidos pela OneBitCode",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://drive.google.com/drive/folders/1YQCwZjknnI4wHt_e7FqIkpUW9Fd-genD",
  },
  {
    id: 2,
    title: "Python Análise de Dados",
    desc: "Certificados Expedidos pela OneBitCode",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    link: "https://drive.google.com/drive/folders/1rcs2PlKlg-_Yj5M5pge31SbC_O-nnkGe",
  },
  {
    id: 3,
    title: "ReactJS",
    desc: "Certificados Expedidos pela Rocketseat",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    link: "https://drive.google.com/drive/folders/1Q0WceS27ytEnYEQPWvemNxQuA1k6jId8?usp=sharing",
  },
  {
    id: 4,
    title: "Futura Especialização Dev",
    desc: "Próximo curso",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jo%C3%A3o-batista-2b0442268/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/Cardosofiles",
  },
  {
    id: 3,
    img: "/discord.svg",
    link: "https://discord.gg/98spMasfdX",
  },
];

export const languagens = [
  {
    id: 1,
    title: "Front-end",
    desc: "Tecnologias para Desenvolvimento WEB",
    iconsList: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    id: 2,
    title: "Back-end",
    desc: "Tecnologias para Automações e desenvolvimento de API",
    iconsList: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
  {
    id: 3,
    title: "Banco de Dados",
    desc: "Armazenamento e gerenciamento de dados essenciais para aplicações.",
    iconsList: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  },
];
