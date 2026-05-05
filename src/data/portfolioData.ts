export type NavTopic = {
  label: string;
  href: string;
};

export type ActivityCard = {
  id: string;
  title: string;
  period: string;
  summary: string;
  status?: "ongoing" | "open" | "soon";
};

export type ProjectCard = {
  id: string;
  title: string;
  summary: string;
  period: string;
  technologies: string[];
  link?: string;
};

export type ExperienceCard = {
  id: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
};

export type SkillCard = {
  id: string;
  label: string;
  type: "frontend" | "backend" | "database" | "devops" | "softskill" | "all";
};

export type MemberHighlight = {
  id: string;
  name: string;
  area: string;
  bio: string;
};

export type TestimonialCard = {
  id: string;
  name: string;
  photo: string;
  workplace: string;
  quote: string;
};

export const navTopics: NavTopic[] = [
  { label: "Cargos", href: "#cargos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Turmas", href: "#turmas" },
  { label: "Sobre nos", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const activitiesData: ActivityCard[] = [
  {
    id: "trilha-logica",
    title: "Trilha de Logica para Ensino Medio",
    period: "Turmas semestrais",
    summary:
      "Ensinamos o basico de logica de programacao para alunos de escola publica do ensino medio.",
    status: "ongoing",
  },
  {
    id: "monitoria-semeia",
    title: "Monitoria SemeiaCOde",
    period: "Inscricoes no inicio de cada semestre",
    summary:
      "Universitarios voluntarios apoiam os alunos durante os desafios praticos e monitorias em laboratorio.",
    status: "open",
  },
  {
    id: "oficina-base",
    title: "Oficina de Fundamentos",
    period: "Ao longo do semestre",
    summary:
      "Conteudos de variaveis, condicoes, repeticoes e resolucao de problemas com pensamento computacional.",
    status: "soon",
  },
  {
    id: "projeto-final",
    title: "Projeto Final das Turmas",
    period: "Setembro 2026",
    summary:
      "Encerramento com apresentacoes de mini projetos construidos pelos alunos durante a jornada.",
    status: "soon",
  },
];

export const experiencesData: ExperienceCard[] = [
  {
    id: "origem-semeia",
    title: "Quem somos",
    role: "Extensao universitaria em programacao",
    period: "2024 - Atual",
    summary:
      "A SemeiaCOde e a primeira organizacao de extensao em programacao da Unicamp Limeira, criada para aproximar universidade e escola publica.",
    achievements: [
      "Foco em ensino de base para alunos do ensino medio.",
      "Aulas com acompanhamento proximo e linguagem acessivel.",
      "Formacao de comunidade entre alunos, mentores e universidade.",
    ],
  },
  {
    id: "metodologia",
    title: "Como ensinamos",
    role: "Aulas praticas e acompanhamento",
    period: "2025 - Atual",
    summary:
      "Combinamos teoria curta, exercicios guiados e desafios reais para fortalecer pensamento logico e autonomia.",
    achievements: [
      "Apoio continuo com monitores universitarios.",
      "Ritmo adaptado para iniciantes em programacao.",
      "Evolucao semestral com projetos de encerramento.",
    ],
  },
];

export const projectsData: ProjectCard[] = [
  {
    id: "trilha-2025-1",
    title: "Trilha 2025.1",
    summary:
      "Primeiro ciclo da trilha com foco em logica, fluxogramas e resolucao de problemas em grupo.",
    period: "2025.1",
    technologies: ["pensamento-logico", "algoritmos", "softskill"],
  },
  {
    id: "trilha-2025-2",
    title: "Trilha 2025.2",
    summary:
      "Consolidacao de estruturas condicionais e repeticao com desafios praticos para ensino medio.",
    period: "2025.2",
    technologies: ["condicionais", "repeticao", "softskill"],
  },
  {
    id: "trilha-2026-1",
    title: "Trilha 2026.1",
    summary:
      "Turma com projeto final integrando fundamentos de logica e colaboracao entre alunos.",
    period: "2026.1",
    technologies: ["projeto-final", "algoritmos", "softskill"],
  },
];

export const membersHighlights: MemberHighlight[] = [
  {
    id: "coord-exec",
    name: "Coordenador Executivo",
    area: "Gestao geral da organizacao",
    bio: "Responsavel por estrategia, planejamento das frentes e articulacao institucional da SemeiaCOde.",
  },
  {
    id: "coord-edu",
    name: "Coordenador Educacional",
    area: "Planejamento pedagogico",
    bio: "Define trilhas, organiza aulas e acompanha a evolucao didatica das turmas do ensino medio.",
  },
  {
    id: "professor",
    name: "Professor",
    area: "Conducao de aulas",
    bio: "Ministra os encontros, explica fundamentos de logica e apoia os alunos na resolucao dos exercicios.",
  },
  {
    id: "monitor",
    name: "Monitor",
    area: "Apoio pratico e acompanhamento",
    bio: "Acompanha atividades em sala, tira duvidas e oferece suporte individual durante os desafios.",
  },
];

export const testimonialsData: TestimonialCard[] = [
  {
    id: "alumni-1",
    name: "Ana Clara Mendes",
    photo: "/LogoSemeiaCode.png",
    workplace: "Engenheira de Software na Mottu",
    quote:
      "A SemeiaCOde me mostrou que ensinar programacao tambem e transformar futuro. Foi onde aprendi a liderar com empatia e impacto real.",
  },
  {
    id: "alumni-2",
    name: "Lucas Henrique Silva",
    photo: "/LogoSemeiaCode.png",
    workplace: "Desenvolvedor Backend na iFood",
    quote:
      "Participar da organizacao me ensinou a explicar logica de forma simples. Ver alunos de escola publica criando seus primeiros algoritmos foi inesquecivel.",
  },
  {
    id: "alumni-3",
    name: "Mariana Souza",
    photo: "/LogoSemeiaCode.png",
    workplace: "Product Manager na Nubank",
    quote:
      "A cultura da SemeiaCOde e unica: colaboracao, metodo e proposito. A organizacao me formou para o mercado e para a vida.",
  },
];

export const cohortsData = ["2025.1", "2025.2", "2026.1"];

export const skillsData: SkillCard[] = [
  { id: "nextjs", label: "Next.js", type: "frontend" },
  { id: "react", label: "React", type: "frontend" },
  { id: "typescript", label: "TypeScript", type: "all" },
  { id: "node", label: "Node.js", type: "backend" },
  { id: "postgres", label: "PostgreSQL", type: "database" },
  { id: "docker", label: "Docker", type: "devops" },
  { id: "comunicacao", label: "Comunicacao", type: "softskill" },
  { id: "lideranca", label: "Lideranca", type: "softskill" },
];

export const socialLinks = {
  github: "https://github.com/JPCalsavara",
  linkedin: "https://www.linkedin.com/in/joaopedrocalsavara/",
  email: "mailto:jpcalsavara@gmail.com",
};
