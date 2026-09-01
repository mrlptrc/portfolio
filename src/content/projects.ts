export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  decisions: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  github: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "subapp",
    title: "Subapp",
    eyebrow: "SaaS · pagamentos",
    year: "2025",
    description: "Estudo de uma aplicação para organizar assinaturas e explorar um fluxo de pagamento recorrente.",
    overview: "Subapp explora uma experiência de gestão de assinaturas: cadastro, autenticação, planos e uma área protegida baseada no status da assinatura.",
    problem: "Cobranças recorrentes pedem um fluxo claro entre cadastro, pagamento e controle de acesso — áreas que precisam manter estado consistente.",
    solution: "O projeto combina uma interface em Next.js com Supabase para autenticação e dados, além de Stripe Checkout e webhooks para explorar o ciclo de pagamento.",
    decisions: [
      "Next.js reúne interface e rotas de API no mesmo projeto.",
      "Supabase fornece autenticação e uma base PostgreSQL para o estudo.",
      "Stripe Checkout e verificação de assinatura do webhook estruturam o fluxo de pagamento.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Docker Compose"],
    image: "/images/signal.svg",
    imageAlt: "Representação visual do fluxo de assinaturas do Subapp",
    github: "https://github.com/mrlptrc/subapp",
    metrics: [{ label: "Tipo", value: "Estudo SaaS" }, { label: "Foco", value: "Pagamentos" }],
  },
  {
    slug: "shoeapi",
    title: "ShoeAPI + ShoeInterface",
    eyebrow: "E-commerce · full stack",
    year: "2024",
    description: "Estudo de e-commerce que separa uma API REST em Java de uma interface Angular.",
    overview: "O projeto reúne o back-end ShoeAPI e a interface ShoeInterface para praticar a divisão de responsabilidades entre cliente web e serviço de dados.",
    problem: "Uma experiência de e-commerce exige que interface e API possam evoluir com responsabilidades bem definidas.",
    solution: "A proposta combina uma API em Spring Boot com um front-end Angular e uma modelagem orientada a documentos para o domínio de calçados.",
    decisions: [
      "Spring Boot estrutura a camada de API e os serviços da aplicação.",
      "Angular mantém a interface independente do back-end.",
      "MongoDB foi usado para explorar uma modelagem flexível de catálogo.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "TypeScript", "MongoDB"],
    image: "/images/ledger.svg",
    imageAlt: "Representação visual da arquitetura do ShoeAPI e ShoeInterface",
    github: "https://github.com/mrlptrc/ShoeAPI",
    metrics: [{ label: "Tipo", value: "Estudo full stack" }, { label: "Domínio", value: "E-commerce" }],
  },
  {
    slug: "microservices",
    title: "Architecture Playground",
    eyebrow: "Arquitetura · proof of concept",
    year: "2024",
    description: "Ambiente de estudo para explorar dependências comuns de sistemas distribuídos em containers.",
    overview: "Um proof of concept que organiza um ambiente local com serviços de dados, cache e mensageria para apoiar o estudo de uma arquitetura modular.",
    problem: "Antes de separar serviços de verdade, é importante compreender como banco relacional, cache e mensageria coexistem em um ambiente reproduzível.",
    solution: "O repositório configura PostgreSQL, Redis e RabbitMQ com Docker Compose e inicia uma aplicação Spring Boot como base para os próximos experimentos.",
    decisions: [
      "Docker Compose torna a infraestrutura local reproduzível.",
      "RabbitMQ foi incluído para estudar comunicação assíncrona.",
      "Redis e PostgreSQL permitem explorar cache e persistência relacional no mesmo ambiente.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "Docker Compose"],
    image: "/images/field-notes.svg",
    imageAlt: "Representação visual de serviços de infraestrutura do projeto",
    github: "https://github.com/mrlptrc/microsservices-arch-monorepo",
    metrics: [{ label: "Tipo", value: "Proof of concept" }, { label: "Foco", value: "Infraestrutura local" }],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
