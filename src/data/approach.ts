export type ApproachStep = {
  readonly n: string
  readonly title: string
  readonly body: string
}

export const steps: readonly ApproachStep[] = [
  {
    n: '01',
    title: 'Discover',
    body: 'We map the problem, the constraints, and the boring realities — data, integrations, who actually uses this. Most of the architecture is decided here, before a line of code commits you to anything.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Wireframes, data model, service boundaries, auth, the infrastructure plan. You see the whole shape — and the trade-offs behind it — before we build. Where it matters, the call gets written down as an ADR.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Short cycles, working software in your hands every week. Tests, CI, and security scanning from day one — wired into the pipeline, not bolted on before launch.',
  },
  {
    n: '04',
    title: 'Operate',
    body: "Observability, runbooks, security reviews. Where there's AI in the system, evals come too — so quality stays measurable. We hand over something you (or we) can run for years, not a demo.",
  },
] as const
