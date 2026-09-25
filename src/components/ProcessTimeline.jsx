import { useEffect, useRef, useState } from 'react'

const processSteps = [
  {
    number: '01',
    title: 'Tư vấn',
    description: 'Tìm hiểu nhu cầu và hình ảnh thương hiệu.',
  },
  {
    number: '02',
    title: 'Thiết kế',
    description: 'Phát triển mẫu thiết kế phù hợp với tập thể.',
  },
  {
    number: '03',
    title: 'Chọn chất liệu',
    description: 'Tư vấn chất liệu, màu sắc và kiểu dáng.',
  },
  {
    number: '04',
    title: 'Sản xuất',
    description: 'Hoàn thiện đồng phục theo thiết kế đã thống nhất.',
  },
  {
    number: '05',
    title: 'Bàn giao',
    description: 'Kiểm tra và bàn giao sản phẩm.',
  },
]

export default function ProcessTimeline() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      { threshold: 0.18 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={`process-section section${isVisible ? ' is-visible' : ''}`} ref={sectionRef} aria-labelledby="process-title">
      <div className="page-shell">
        <div className="process-heading">
          <div>
            <p className="eyebrow">03 · Hành trình cùng IHDC</p>
            <h2 id="process-title">Từ ý tưởng<br />đến đồng phục.</h2>
          </div>
          <p>Đồng hành cùng bạn qua từng bước để tạo nên một diện mạo thống nhất, đúng với tinh thần của tập thể.</p>
        </div>

        <ol className="process-timeline">
          {processSteps.map((step, index) => (
            <li className="timeline-step" key={step.number} style={{ '--step-index': index }}>
              <div className="timeline-marker" aria-hidden="true"><span>{step.number}</span></div>
              <div className="timeline-copy">
                <p>{step.number}</p>
                <h3>{step.title}</h3>
                <span>{step.description}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
