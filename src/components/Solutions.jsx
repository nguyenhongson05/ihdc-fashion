import { solutions } from '../data/homeData'

export default function Solutions() {
  return (
    <section className="solutions section page-shell" id="giai-phap">
      <div className="section-heading category-heading">
        <div><p className="eyebrow">01 · Danh mục</p><h2>Thiết kế theo<br />từng tập thể.</h2></div>
      </div>
      <div className="category-grid">
        {solutions.map((item) => <a className="category-card" href="#lien-he" key={item.title} aria-label={`Khám phá giải pháp ${item.title}`}>
          <img src={item.image} alt={item.title} style={{ objectPosition: item.position }} />
          <span className="category-overlay"></span>
          <div className="category-card-content">
            <p>{item.number}</p>
            <h3>{item.title}</h3>
            <span className="category-card-cta">Khám phá <b aria-hidden="true">→</b></span>
          </div>
        </a>)}
      </div>
    </section>
  )
}
