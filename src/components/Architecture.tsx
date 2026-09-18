import { accentVar, callouts } from '../data/architecture'

export function Architecture() {
  return (
    <section className="section" id="architecture" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head">
          <div className="section-tag">/ Architecture</div>
          <h2 className="section-title">Every layer engineered on purpose.</h2>
          <p className="section-lede">
            A modern product is seven coordinated layers. We don't bolt them together — we
            design the seams so the system stays maintainable, secure, and cheap to evolve.
          </p>
        </div>
        <div className="arch-callouts">
          {callouts.map((c) => (
            <div className="callout" key={c.tag}>
              <span className="callout-bar" style={{ background: accentVar[c.accent] }} />
              <div className="callout-tag">{c.tag}</div>
              <div className="callout-body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
