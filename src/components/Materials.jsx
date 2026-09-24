import { materials } from '../data/homeData'

export default function Materials() {
  return (
    <section className="materials-section" id="chat-lieu"><div className="materials-photo"><img src="/images/materials/seamless.jpg" alt="Chi tiết chất liệu sơ mi IHDC" /></div><div className="materials-content"><p className="eyebrow">05 · Chất liệu & công nghệ</p><h2>Chất lượng nằm<br />trong từng chi tiết.</h2><p className="materials-lead">Chất liệu xanh bền vững và công nghệ Seamless được IHDC đưa vào các thiết kế để trải nghiệm mặc luôn nhẹ nhàng, chỉn chu.</p><div className="material-tags">{materials.map(([name, benefit]) => <div key={name}><strong>{name}</strong><span>{benefit}</span></div>)}</div><div className="seamless-note"><span>Seamless</span><p>Công nghệ liền mạch ở tay áo, nẹp áo và vạt áo, kết hợp chất liệu co giãn bốn chiều cho cảm giác mềm, nhẹ.</p></div></div></section>
  )
}
