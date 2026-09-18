import { services } from '../data/services'

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">/ Services</div>
          <h2 className="section-title">Four things, done seriously.</h2>
          <p className="section-lede">
            We stay narrow on purpose. Each engagement gets the same senior attention,
            the same engineering practices, and the same end-to-end ownership.
          </p>
        </div>
        <div className="services">
          {services.map((s) => (
            <article className="service" key={s.n}>
              <div className="service-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
