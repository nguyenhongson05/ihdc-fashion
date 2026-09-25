import { useEffect, useState } from 'react'

const options = ['Doanh nghiệp', 'Trường học', 'Thể thao', 'Tập thể']

export default function AiConsultant() {
  const [isOpen, setIsOpen] = useState(false)
  const [selection, setSelection] = useState('')

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <aside className={`ai-consultant${isOpen ? ' is-open' : ''}`} aria-label="IHDC AI tư vấn đồng phục">
      <section className="ai-panel" id="ihdc-ai-panel" aria-hidden={!isOpen}>
        <div className="ai-panel-header">
          <div className="ai-title"><span className="ai-orb" aria-hidden="true">✦</span><div><strong>IHDC AI</strong><span>Trợ lý tư vấn</span></div></div>
          <button className="ai-close" type="button" onClick={() => setIsOpen(false)} aria-label="Đóng IHDC AI">×</button>
        </div>
        <div className="ai-message">
          <p>Xin chào! Tôi có thể giúp bạn tìm giải pháp đồng phục phù hợp.</p>
          {selection && <p className="ai-selection">Bạn đang quan tâm đến giải pháp <strong>{selection}</strong>.</p>}
        </div>
        <div className="ai-options" aria-label="Chọn nhu cầu tư vấn">
          {options.map((option) => (
            <button className={selection === option ? 'is-selected' : ''} type="button" key={option} onClick={() => setSelection(option)}>
              {option}<span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <p className="ai-disclaimer">Demo tư vấn IHDC AI</p>
      </section>
      <button
        className="ai-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="ihdc-ai-panel"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="ai-trigger-icon" aria-hidden="true">{isOpen ? '×' : '✦'}</span>
        <span>IHDC AI</span>
      </button>
    </aside>
  )
}
