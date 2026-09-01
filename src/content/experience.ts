export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    company: "Hendrios ACE",
    role: "Desenvolvedor Full Stack",
    period: "mai 2026 — atual",
    description:
      "Atuo no desenvolvimento e evolução de soluções digitais, conectando aplicações web, automações e integrações para apoiar as operações do negócio.",
    highlights: [
      "Desenvolvimento de funcionalidades front-end e back-end com foco em qualidade e manutenção.",
      "Automação de processos e integração entre sistemas e serviços.",
      "Apoio à melhoria contínua de fluxos internos e à confiabilidade das soluções.",
    ],
  },
  {
    company: "KTGROUP",
    role: "Desenvolvedor Fullstack · Estagiário, Time de Suporte",
    period: "jun 2024 — mai 2025 · híbrido",
    description:
      "Atuei em aplicações internas e externas, contribuindo com especificações técnicas, melhorias e novas funcionalidades em diferentes pontos do produto.",
    highlights: [
      "Trabalho com Java, Node.js, JavaScript, MongoDB e C#.",
      "Apoio a melhorias de performance, escalabilidade e automação de rotinas.",
      "Contribuição para resultados reportados de redução no tempo de resposta dos sistemas e ganho de produtividade da equipe.",
    ],
  },
  {
    company: "Gold Cred",
    role: "Desenvolvedor Front-end · Freelancer",
    period: "ago 2023 — dez 2023 · remoto",
    description:
      "Desenvolvimento de site para uma promotora de crédito, em colaboração com outros desenvolvedores e com foco em presença digital e comunicação com clientes.",
    highlights: [
      "Implementação de interfaces web e boas práticas de desenvolvimento.",
      "Contribuição para uma comunicação digital mais clara e para resultados comerciais reportados pelo negócio.",
    ],
  },
  {
    company: "Projetos independentes",
    role: "Full stack developer",
    period: "2023 — atual",
    description:
      "Desenvolvo produtos de ponta a ponta para aprofundar experiência em interfaces, APIs, pagamentos, dados e arquitetura de sistemas.",
  },
  {
    company: "Formação",
    role: "Engenharia de Software · Descomplica",
    period: "2025 — em andamento",
    description:
      "Análise e Desenvolvimento de Sistemas concluído no SENAC em 2025. Atualmente, aprofundo fundamentos de engenharia de software e sistemas distribuídos.",
  },
];
