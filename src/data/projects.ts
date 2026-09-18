export type ProjectStatus = 'in-progress' | 'soon'

export type Project = {
  readonly name: string
  readonly kind: string
  readonly status: ProjectStatus
  readonly glyph: string
}

export const projects: readonly Project[] = [
  { name: 'Client portal', kind: 'Web app', status: 'in-progress', glyph: 'PORTAL' },
  { name: 'AI knowledge assistant', kind: 'AI integration', status: 'soon', glyph: 'RAG' },
  { name: 'Internal ops dashboard', kind: 'Internal tool', status: 'soon', glyph: 'OPS' },
] as const

export const statusLabel: Record<ProjectStatus, string> = {
  'in-progress': 'In progress',
  soon: 'Soon',
}
