import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpeg";
import project5 from "../assets/projects/project-5.jpeg";

export const HERO_CONTENT = `Sou um desenvolvedor de software entusiasta, com habilidades para criar aplicações Web robustas e escaláveis. Com experiência desde 2022, possuo conhecimento em tecnologias de Front-End como React (Javascript), bem como em tecnologias de desenvolvimento Low-Code, com a plataforma Oracle Apex (PL/SQL). Meu objetivo é aproveitar minha experiência para criar soluções inovadoras que impulsionem o crescimento dos negócios e proporcionem a melhor experiência aos usuários.`;

export const ABOUT_TEXT = `Minha jornada no mundo da tecnologia começou com um amigo que me incentiva a conhecer o desenvolvimento de software. A partir disso, mergulho em uma viagem em busca de conhecimento. Minha trajetória evolui para uma carreira em que me esforço continuamente para aprender e me adaptar a novos desafios. Eu me sinto bem em ambientes colaborativos e gosto de resolver problemas que se apresentam no dia a dia. Fora da programação, sou um apaixonado por Futebol, NBA e Motos.`;

export const EXPERIENCES = [
  {
    year: "2024 - Até o momento",
    role: "Desenvolvedor Fullstack Low-Code",
    company: "Staff Informática",
    description: `Certificação em Oracle Cloud Infrastructure (OCI) 2024, com foco no desenvolvimento de aplicações e no design de interfaces de usuário utilizando Oracle APEX e PL/SQL. Responsável por modernizar o principal software da empresa, migrando-o para uma plataforma mais robusta e atualizada.`,
    technologies: ["Oracle APEX", "PL/SQL", "Javascript"],
  },
  {
    year: "2022 - 2023",
    role: "Desenvolvedor Front-End",
    company: "JWSS Software",
    description: `Atuação no desenvolvimento de aplicações com React.js, contribuindo ativamente para o desenvolvimento, gestão de backlog e manutenção do principal produto da empresa. Responsável por refatorações completas e pela implementação de melhorias nos projetos.`,
    technologies: ["React.js", "Javascript", "MongoDB", "Figma"],
  }
];

export const PROJECTS = [
  {
    title: "Agenda Quadra",
    image: project1,
    description:
      "O Agenda Quadra nasceu da necessidade de tornar mais eficiente a administração de espaços esportivos, oferecendo uma solução prática e intuitiva para administradores e usuários.",
    technologies: ["Oracle", "APEX", "Javascript", "CSS", "SQL"],
  },
  {
    title: "Automação de Processos",
    image: project2,
    description:
      "Automação de processos utilizando a plataforma N8n, com intuito de trazer mais eficiência ao gerenciamento de leads.",
    technologies: ["N8n", "Javascript", "Google Cloud"],
  },
  {
    title: "Escala Ministério de Louvor",
    image: project3,
    description:
      "Organizar escalas de ministérios de louvor nunca foi tão fácil! Este sistema foi criado para ajudar líderes e membros a se conectarem de forma prática e eficiente.",
    technologies: ["Oracle", "APEX", "Javascript", "CSS", "SQL"],
  },
  {
    title: "Landing Page Agenda Manicure",
    image: project4,
    description:
      "Landing Page desenvolvida para promoção de Aplicativo, integração com lojas de aplicativos e redes sociais.",
    technologies: ["React", "Javascript", "HTML", "CSS"],
  },
  {
    title: "Gestão de Estacionamento",
    image: project5,
    description:
      "Sistema de gerenciamento de Estacionamento, com uma interface intuitiva, permitindo gerenciar a entrada e saída de veículos de forma eficiente.",
    technologies: ["Oracle", "APEX", "Javascript", "SQL"],
  },
];

export const CONTACT = {
  address: "Rua Guarujá, Canoas, RS 10153 ",
  phoneNo: "+55 51 98494 4944",
  email: "jmellodemelo@gmail.com",
};
