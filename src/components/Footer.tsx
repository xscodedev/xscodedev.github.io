const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <div className="footer-band">
      <footer className="container footer">
        <div className="legal">© {currentYear} · XS CodeDev · xscodedev.com</div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
