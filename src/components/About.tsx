import { stackRows } from '../data/stack'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">/ About</div>
          <h2 className="section-title">Built in the open.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              <strong>XS CodeDev is a small engineering practice built around how good
              software is actually made.</strong>{' '}
              It started as a place to design, build, and operate real systems — and to do
              it in the open, where the work can be shared, studied, and improved.
            </p>
            <p>
              Some of what we build is for clients. Some of it is open source — tools,
              components, and reference architectures we publish so others can learn from
              them and build on top. Both feed the same goal: writing software that's
              honest, durable, and worth keeping.
            </p>
            <p>
              If you're a fellow builder, the door is open — contribute, fork, or just
              borrow an idea. Either way, the focus is the same: real engineering,
              end-to-end, nothing hand-waved.
            </p>
          </div>
          <aside className="about-side">
            <h4>Working stack</h4>
            {stackRows.map((row) => (
              <div className="skill-row" key={row.name}>
                <span className="name">{row.name}</span>
                <span className="stack">{row.stack}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
