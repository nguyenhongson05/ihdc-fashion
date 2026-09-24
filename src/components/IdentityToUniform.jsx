const steps = [
  { number: '01', title: 'Identity', terms: ['Logo', 'Màu sắc', 'Giá trị', 'Văn hóa', 'Câu chuyện'] },
  { number: '02', title: 'Design', terms: ['Concept', 'Màu sắc', 'Form dáng', 'Chi tiết', 'Họa tiết'] },
  { number: '03', title: 'Uniform', terms: ['Một thành phẩm mang bản sắc riêng'] },
]

export default function IdentityToUniform() {
  return (
    <section className="identity-section" id="identity"><div className="page-shell"><div className="identity-heading"><p className="eyebrow eyebrow-light">03 · Cách IHDC kiến tạo</p><h2>Từ bản sắc<br /><em>đến đồng phục.</em></h2></div><div className="identity-process">{steps.map((step, index) => <div className="process-item" key={step.title}><div className="process-top"><span>{step.number}</span><span>{index < steps.length - 1 ? '→' : '✦'}</span></div><h3>{step.title}</h3><ul>{step.terms.map((term) => <li key={term}>{term}</li>)}</ul></div>)}</div><p className="identity-statement">Không chỉ chọn một mẫu có sẵn. IHDC cùng bạn tìm ra ngôn ngữ thiết kế dành riêng cho tập thể.</p></div></section>
  )
}
