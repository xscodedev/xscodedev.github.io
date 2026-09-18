export type StackRow = {
  readonly name: string
  readonly stack: string
}

export const stackRows: readonly StackRow[] = [
  { name: 'Frontend', stack: 'Angular · React · TS' },
  { name: 'API & Security', stack: 'REST · OAuth2/OIDC · RBAC' },
  { name: 'Application Core', stack: 'C#/.NET · Python · Node' },
  { name: 'Data', stack: 'SQL Server · Postgres · vectors' },
  { name: 'AI', stack: 'LLM orchestration · RAG · Evals' },
  { name: 'Infrastructure', stack: 'Docker · K8s · AWS · Azure' },
  { name: 'Delivery', stack: 'GitHub · Azure DevOps' },
] as const
