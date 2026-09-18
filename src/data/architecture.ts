export type ArchAccent = 'brand' | 'teal' | 'orange' | 'coral'

export type ArchCallout = {
  readonly tag: string
  readonly body: string
  readonly accent: ArchAccent
}

export const callouts: readonly ArchCallout[] = [
  {
    tag: 'Delivery',
    body: 'GitHub or Azure DevOps. Source, build, test, scan, image, deploy — every commit, every time. Security scanning is in the pipeline, not an afterthought.',
    accent: 'orange',
  },
  {
    tag: 'Frontend',
    body: 'Angular, React, TypeScript. Accessible UI, real responsive behavior, design tokens, considered state management.',
    accent: 'brand',
  },
  {
    tag: 'API & Security',
    body: 'REST contracts, versioned and tested. OAuth2/OIDC, RBAC, validation, rate limiting — auth and authorization treated as a layer, not a checkbox.',
    accent: 'teal',
  },
  {
    tag: 'Application Core',
    body: 'C#/.NET, Python, Node.js. Modular services and business rules drawn around your domain — service boundaries that match the business, not your folders.',
    accent: 'brand',
  },
  {
    tag: 'AI Capability',
    body: 'LLM orchestration, RAG, tool-calling agents — integrated into real workflows. Guardrails on the way in, evals on the way out, so quality is measurable.',
    accent: 'orange',
  },
  {
    tag: 'Data & Knowledge',
    body: 'SQL Server, PostgreSQL, NoSQL, plus embeddings and a private data lake. Polyglot persistence modeled for your domain — transactional and analytical kept honest.',
    accent: 'coral',
  },
  {
    tag: 'Containers',
    body: 'Docker images, Kubernetes and a service mesh when they earn their place. Reproducible builds, zero-drift environments, rolling deployments.',
    accent: 'brand',
  },
  {
    tag: 'Cloud',
    body: 'AWS or Azure as a deliberate choice. Infrastructure as code, with observability wired in from day one — not added after the first incident.',
    accent: 'teal',
  },
] as const

export const accentVar: Record<ArchAccent, string> = {
  brand: 'var(--brand)',
  teal: 'var(--accent-teal)',
  orange: 'var(--accent-orange)',
  coral: 'var(--accent-coral)',
}
