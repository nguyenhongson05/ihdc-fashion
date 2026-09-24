import { solutions } from '../data/homeData'

export default function Solutions() {
  return (
    <section className="solutions section page-shell" id="giai-phap">
      <div className="section-heading category-heading">
        <div><p className="eyebrow">01 · Danh mục</p><h2>Thiết kế theo<br />từng tập thể.</h2></div>
        <p className="section-intro">Mỗi không gian, mỗi thế hệ và mỗi tập thể đều cần một tiếng nói thị giác phù hợp.</p>
      </div>
      <div className="category-grid">
        {solutions.map((item) => <a className="category-card" href="#lien-he" key={item.title} aria-label={`Khám phá giải pháp ${item.title}`}>
          <img src={item.image} alt={item.title} style={{ objectPosition: item.position }} />
          <span className="category-overlay"></span>
          <div><p>{item.number}</p><h3>{item.title}</h3><span>Khám phá <b aria-hidden="true">↗</b></span></div>
        </a>)}
      </div>
    </section>
  )
}
