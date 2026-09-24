import { products } from '../data/homeData'

export default function Collection() {
  const featuredProducts = products

  return (
    <section className="collection section page-shell" id="san-pham">
      <div className="collection-heading"><div><p className="eyebrow">04 · IHDC Collection</p><h2>Những thiết kế<br />dành cho tập thể.</h2></div><p className="collection-note">Sơ mi, vest và polo cho doanh nghiệp, trường học và các tập thể - tuyển chọn từ catalogue IHDC Fashion.</p></div>
      <div className="product-grid" id="bo-suu-tap">{featuredProducts.map((product) => <article className="product-item" key={product.name}><a className="product-image-wrap" href="#lien-he" aria-label={`Nhận tư vấn ${product.name}`}><img src={product.image} alt={product.name} style={{ objectPosition: product.position }} /></a><div className="product-info"><p>{product.type}</p><h3>{product.name}</h3><span>{product.detail}</span><a className="product-link" href="#lien-he">Xem chi tiết <b aria-hidden="true">↗</b></a></div></article>)}</div>
    </section>
  )
}
