import { projects, statusLabel } from '../data/projects'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">/ Projects</div>
          <h2 className="section-title">Portfolio, in progress.</h2>
          <p className="section-lede">
            XS CodeDev is intentionally selective about the engagements.
            Real case studies will land here as projects ship.
          </p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.name}>
              <div className="project-thumb">{p.glyph} / placeholder</div>
              <div className="project-meta">
                <div>
                  <h4>{p.name}</h4>
                  <div className="kind">{p.kind}</div>
                </div>
                <div
                  className={
                    'project-status' + (p.status === 'soon' ? ' soon' : '')
                  }
                >
                  {statusLabel[p.status]}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
