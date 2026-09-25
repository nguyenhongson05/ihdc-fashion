import { products } from '../data/homeData'

export default function Products() {
  return (
    <section className="products section page-shell" id="san-pham">
      <div className="collection-heading products-heading">
        <div><p className="eyebrow">03 · IHDC Products</p><h2>Thiết kế để<br />được mặc lâu dài.</h2></div>
        <p className="collection-note">Những lựa chọn nền tảng được phát triển để đồng hành cùng nhiều tập thể, với form dáng và chất liệu phù hợp từng nhu cầu.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-item" key={product.name}>
            <a className="product-image-wrap" href="#lien-he" aria-label={`Nhận tư vấn ${product.name}`}>
              <img src={product.image} alt={product.name} style={{ objectPosition: product.position }} />
            </a>
            <div className="product-info">
              <p>{product.type}</p>
              <h3>{product.name}</h3>
              <span>{product.detail}</span>
              <a className="product-link" href="#lien-he">Xem chi tiết <b aria-hidden="true">↗</b></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
