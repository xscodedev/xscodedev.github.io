export type Service = {
  readonly n: string
  readonly title: string
  readonly desc: string
  readonly tags: readonly string[]
}

export const services: readonly Service[] = [
  {
    n: '01',
    title: 'Web applications',
    desc: 'End-to-end product engineering. Dashboards, portals, SaaS platforms — designed around real service boundaries and a typed contract from the browser to the database, not patched together.',
    tags: ['Angular', 'React', 'TypeScript', 'C#/.NET', 'Node.js'],
  },
  {
    n: '02',
    title: 'AI-enabled systems',
    desc: 'LLMs, retrieval, and agents wired into your real data and workflows — with guardrails and evals so quality is measurable, not vibes. Not a chatbot bolted onto a marketing page.',
    tags: ['LLM orchestration', 'RAG', 'Agents', 'Guardrails', 'Evals'],
  },
  {
    n: '03',
    title: 'Architecture & platform',
    desc: 'The seams that keep a system maintainable — API contracts, auth and access control, data modeling, CI/CD, containers, observability. The unglamorous decisions that decide whether you can still ship in year three.',
    tags: ['REST APIs', 'OAuth2/OIDC', 'RDBMS', 'Docker/K8s', 'Observability'],
  },
  {
    n: '04',
    title: 'Internal tools & automation',
    desc: 'The software that quietly runs your business — admin portals, ETL pipelines, integrations between the SaaS tools you already pay for. Built to be operated, not babysat.',
    tags: ['Internal portals', 'Workflows', 'Integrations', 'Reporting'],
  },
] as const
