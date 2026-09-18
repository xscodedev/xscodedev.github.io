export type NavLink = {
  readonly href: string
  readonly label: string
}

export const navLinks: readonly NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#approach', label: 'Approach' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
] as const
