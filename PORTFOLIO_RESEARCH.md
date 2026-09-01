# Portfolio research baseline

Updated: 2026-08-31. This is an evidence log, not portfolio copy. Repository claims were checked against public GitHub and, when present locally, their source/configuration.

## Confirmed profile facts

- GitHub profile: Murilo Patrício (`mrlptrc`), São Paulo; public bio: full-stack developer working across React/Angular and Java/Node/TypeScript. Source: [GitHub profile](https://github.com/mrlptrc).
- Education and employment below are confirmed by the résumé supplied by Murilo, not inferred from GitHub:
  - KTGROUP — Full-stack Developer, Support Team Intern, Jun 2024–May 2025, hybrid.
  - Gold Cred — Front-end Developer (freelance), Aug–Dec 2023, remote.
  - Software Engineering, Descomplica, 2025–present; Analysis and Systems Development, SENAC, completed 2025.
- Curriculum-confirmed professional skills: Java, JavaScript, TypeScript, C#, Spring Boot, React, Angular, Fastify, SQL, MongoDB, Supabase, Git/GitHub, Linux, Docker, n8n, CI/CD, JUnit and Mockito.

## Recommended selected work

### 1. Subapp — subscription-management SaaS

- **What/problem:** a web app for registering users, subscribing to plans and controlling access based on subscription status.
- **Evidence:** the public README documents a Next.js/React application using Supabase for Auth/PostgreSQL/Storage, Stripe Checkout and webhooks, server-side API routes, plus Docker Compose for local PostgreSQL and pgAdmin. Source: [README](https://github.com/mrlptrc/subapp#readme); local `subapp/webtmp/package.json`, `src/app/api/create-checkout-session/route.ts`, `src/app/api/webhook/route.ts`, and `docker-compose.yml`.
- **Safe stack:** Next.js, React, TypeScript, Stripe, Supabase, PostgreSQL, Docker Compose.
- **Technical interest:** checkout-session endpoint; webhook signature verification and handling of Stripe lifecycle events are implemented in code.
- **Content constraint:** do not claim that database updates/access gating from the webhook are complete: the webhook handlers currently contain placeholder comments for those actions, and the dashboard is labelled as a starter dashboard. Prefer “explores” / “implements the payment flow” over “production billing platform”.

### 2. ShoeAPI + ShoeInterface — e-commerce study

- **What/problem:** a paired backend and frontend study for a shoe e-commerce experience.
- **Evidence:** public profile and repository descriptions identify ShoeAPI as the Java/Spring Boot backend and ShoeInterface as its Angular/TypeScript frontend; the profile README lists MongoDB. Sources: [ShoeAPI](https://github.com/mrlptrc/ShoeAPI), [ShoeInterface](https://github.com/mrlptrc/shoeInterface), [profile README](https://github.com/mrlptrc).
- **Safe stack:** Java, Spring Boot, Angular, TypeScript, MongoDB.
- **Technical interest:** demonstrates separation of a browser client and REST backend.
- **Content constraint:** public repository descriptions call it a study. Do not claim deployed commerce, payment, microservices, or specific business capabilities without inspecting those files first.

### 3. Microservices Architecture — modular systems study

- **What/problem:** a study repository for Spring Boot with local infrastructure for relational data, caching and messaging.
- **Evidence:** the README describes Java 21, Spring Boot, Redis, RabbitMQ, PostgreSQL and Docker Compose. The local `project/pom.xml` declares Spring Web, JPA, Redis, AMQP and PostgreSQL; `project/docker/docker-compose.yml` defines PostgreSQL, Redis and RabbitMQ services.
- **Safe stack:** Java 21, Spring Boot, Maven, PostgreSQL, Redis, RabbitMQ, Docker Compose.
- **Technical interest:** a reproducible local environment with dependencies relevant to asynchronous communication and cache exploration.
- **Content constraint (important):** current checked-in Java implementation is still minimal: `ProjectApplication` and a product TODO scaffold are the only source files found. The README explicitly lists “true separate microservices,” JWT, CI/CD, tests and monitoring as next steps. Present this as an **architecture/proof-of-concept study**, never as an implemented distributed system or production microservices platform.

### 4. Luxcar — mobile vehicle-listing app

- **What/problem:** a mobile platform for listing, managing and browsing vehicle advertisements.
- **Evidence:** GitHub profile and repository description explicitly identify Kotlin, Jetpack Compose, Room and RecyclerView. Sources: [profile README](https://github.com/mrlptrc) and [luxcar](https://github.com/mrlptrc/luxcar).
- **Safe stack:** Kotlin, Jetpack Compose, Room, RecyclerView.
- **Content constraint:** public description is sufficient for a compact project card but not for detailed claims about authentication, backend, publication status or individual screens without a code-level review.

## Work and experience (not selected work)

- **KTGROUP:** use the user-supplied title, period, hybrid model and scope: internal/external applications, technical specifications, features, performance/scalability and routine automation. If metrics are included, preserve attribution: “contributed to a reported 30% reduction in response time and 25% improvement in team productivity”; do not state sole causality.
- **Gold Cred:** use the user-supplied freelance title, period, remote model and scope: website development, collaboration, practices and digital-presence improvement. If metrics are included: “contributed to a reported 20% increase in sales,” not “generated 20%.”
- **n8nCRM and operational automations:** Murilo explicitly identified these as work-project assets rather than personal projects. Keep them out of Selected Work and do not link their source or reveal internal/client details. A high-level responsibility such as “automation and systems integration” is appropriate only within the relevant work-experience entry.

## Technologies confirmed by public work

- Project evidence supports: Java, TypeScript, React, Next.js, Angular, Kotlin, Spring Boot, Stripe, Supabase, PostgreSQL, MongoDB, Docker/Docker Compose, Redis, RabbitMQ, Room and RecyclerView.
- Keep Fastify, C#, n8n, CI/CD, Linux, JUnit and Mockito in the broader skills/experience context because the supplied résumé confirms them; they are not all evidenced by the four selected public projects.

## Uncertainties / content risks

- Do not present any study repository as a client delivery, production deployment, or finished product.
- The local `luxcar_repo` is a distinct, more extensive AutoGest codebase, but its public GitHub ownership/link was not established during this review. Do not add it to the public portfolio until Murilo confirms the repository and authorship.
- The public profile has 44 repositories, but the investigated, clearly attributable entries above are the strongest documented set. `saude-memora` appears pinned under another account, so Murilo's exact contribution is unverified.
- Repository READMEs contain encoding artifacts and can overstate planned functionality. Prefer code/configuration evidence for case-study claims.
