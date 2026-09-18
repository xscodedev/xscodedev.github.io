import { steps } from '../data/approach'

export function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">/ Approach</div>
          <h2 className="section-title">Four phases, no surprises.</h2>
          <p className="section-lede">
            The same engineering discipline used at larger companies, sized down for projects
            that need to ship and stay alive.
          </p>
        </div>
        <div className="approach">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
