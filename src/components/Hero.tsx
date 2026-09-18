import { ArchitectureDiagram } from './ArchitectureDiagram'
import { ArrowIcon } from './ArrowIcon'

const highlights = [
  { title: 'Full-stack delivery', sub: 'Frontend to cloud' },
  { title: 'Modern stack', sub: 'Proven, current technologies' },
  { title: 'Built to operate', sub: 'Tested, secured, maintainable' },
] as const

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            SOFTWARE STUDIO
          </span>
          <h1 className="hero-title">
            We engineer software
            <br />
            that <em>actually ships</em>.
          </h1>
          <p className="hero-sub">
            XS CodeDev is a small, senior engineering practice. We design, build, and
            operate production systems — from the browser down to the cloud.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              New Project
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#architecture">
              How we work
            </a>
          </div>
          <div className="hero-highlights">
            {highlights.map((h) => (
              <div className="hero-highlight" key={h.title}>
                <span className="bullet" />
                <div className="text">
                  <div className="h-title">{h.title}</div>
                  <div className="h-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-illu">
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}
