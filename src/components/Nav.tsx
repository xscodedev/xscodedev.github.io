import { navLinks } from '../data/nav'
import { ArrowIcon } from './ArrowIcon'
import { Wordmark } from './Wordmark'

export function Nav() {
  return (
    <header className="nav" id="top">
      <div className="container nav-inner">
        <Wordmark />
        <div className="nav-right">
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#contact">
            New Project
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  )
}
