import { collections } from '../data/homeData'

export default function Collection() {
  return (
    <section className="collection section" id="bo-suu-tap">
      <div className="page-shell">
        <div className="collection-heading">
          <div><p className="eyebrow">02 · IHDC Collection</p><h2>Những dòng thiết kế<br />cho từng nhịp sống.</h2></div>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <article className="collection-card" key={collection.name}>
              <a className="collection-image" href="#lien-he" aria-label={`Xem ${collection.name}`}>
                <img src={collection.image} alt={collection.name} style={{ objectPosition: collection.position }} />
              </a>
              <div className="collection-card-copy">
                <h3>{collection.name}</h3>
                <p>{collection.detail}</p>
                <a className="product-link" href="#lien-he">Xem chi tiết <b aria-hidden="true">→</b></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
