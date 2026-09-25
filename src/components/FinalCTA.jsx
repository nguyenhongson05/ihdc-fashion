import { useState } from 'react'

const initialForm = { name: '', phone: '', email: '', uniformFor: '', quantity: '', message: '' }

const fieldLabels = {
  name: 'Họ và tên',
  phone: 'Số điện thoại',
  email: 'Email',
  uniformFor: 'Nhu cầu đồng phục',
  quantity: 'Số lượng dự kiến',
  message: 'Nội dung cần tư vấn',
}

function validateForm(values) {
  const nextErrors = {}

  Object.entries(fieldLabels).forEach(([field, label]) => {
    if (!values[field].trim()) nextErrors[field] = `Vui lòng nhập ${label.toLowerCase()}.`
  })

  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = 'Vui lòng nhập địa chỉ email hợp lệ.'
  if (values.phone && !/^[+\d][\d\s().-]{7,}$/.test(values.phone)) nextErrors.phone = 'Vui lòng nhập số điện thoại hợp lệ.'
  if (values.quantity && Number(values.quantity) < 1) nextErrors.quantity = 'Số lượng dự kiến cần lớn hơn 0.'

  return nextErrors
}

function ContactDetail({ label, children }) {
  return (
    <div className="contact-detail">
      <span>{label}</span>
      <div>{children}</div>
    </div>
  )
}

export default function FinalCTA() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitState, setSubmitState] = useState('idle')

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }))
    if (submitState === 'success') setSubmitState('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('idle')
      return
    }

    setSubmitState('loading')
    window.setTimeout(() => {
      setForm(initialForm)
      setSubmitState('success')
    }, 650)
  }

  const fieldClassName = (name) => `contact-field${errors[name] ? ' has-error' : ''}`

  return (
    <section className="contact-section" id="lien-he" aria-labelledby="contact-title">
      <div className="contact-grid page-shell">
        <div className="contact-intro">
          <p className="eyebrow">07 · Liên hệ</p>
          <h2 id="contact-title">ĐỒNG HÀNH<br />CÙNG IHDC</h2>
          <p className="contact-description">Bạn đang tìm kiếm giải pháp đồng phục phù hợp cho doanh nghiệp, trường học, đội nhóm hoặc tập thể? Hãy để IHDC tư vấn giải pháp phù hợp với nhu cầu của bạn.</p>

          <div className="contact-details">
            <ContactDetail label="Hotline"><a href="tel:0984959586">0984 95 95 86</a></ContactDetail>
            <ContactDetail label="Email"><a href="mailto:info@ihdc.vn">info@ihdc.vn</a></ContactDetail>
            <ContactDetail label="Địa chỉ"><address>Số 6, Kim Đồng, Hoàng Mai, Hà Nội</address></ContactDetail>
            <ContactDetail label="Thời gian làm việc"><span>Thứ Hai – Thứ Bảy · 08:00 – 17:30</span></ContactDetail>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-form-heading">
            <p className="eyebrow">Tư vấn theo nhu cầu</p>
            <h3>Nhận tư vấn</h3>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit} aria-busy={submitState === 'loading'}>
            <div className="contact-fields">
              <label className={fieldClassName('name')}>
                <span>Họ và tên <b aria-hidden="true">*</b></span>
                <input name="name" type="text" autoComplete="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
                {errors.name && <small id="name-error">{errors.name}</small>}
              </label>

              <label className={fieldClassName('phone')}>
                <span>Số điện thoại <b aria-hidden="true">*</b></span>
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={updateField} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} />
                {errors.phone && <small id="phone-error">{errors.phone}</small>}
              </label>

              <label className={fieldClassName('email')}>
                <span>Email <b aria-hidden="true">*</b></span>
                <input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
                {errors.email && <small id="email-error">{errors.email}</small>}
              </label>

              <label className={fieldClassName('uniformFor')}>
                <span>Bạn đang tìm đồng phục cho? <b aria-hidden="true">*</b></span>
                <select name="uniformFor" value={form.uniformFor} onChange={updateField} aria-invalid={Boolean(errors.uniformFor)} aria-describedby={errors.uniformFor ? 'uniform-for-error' : undefined}>
                  <option value="">Chọn nhu cầu</option>
                  <option value="Doanh nghiệp">Doanh nghiệp</option>
                  <option value="Trường học">Trường học</option>
                  <option value="Thể thao">Thể thao</option>
                  <option value="Tập thể">Tập thể</option>
                </select>
                {errors.uniformFor && <small id="uniform-for-error">{errors.uniformFor}</small>}
              </label>

              <label className={`${fieldClassName('quantity')} contact-field-wide`}>
                <span>Số lượng dự kiến <b aria-hidden="true">*</b></span>
                <input name="quantity" type="number" min="1" inputMode="numeric" value={form.quantity} onChange={updateField} aria-invalid={Boolean(errors.quantity)} aria-describedby={errors.quantity ? 'quantity-error' : undefined} placeholder="Ví dụ: 50" />
                {errors.quantity && <small id="quantity-error">{errors.quantity}</small>}
              </label>

              <label className={`${fieldClassName('message')} contact-field-wide`}>
                <span>Nội dung cần tư vấn <b aria-hidden="true">*</b></span>
                <textarea name="message" rows="3" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="Chia sẻ thêm về nhu cầu, phong cách hoặc thời gian dự kiến của bạn." />
                {errors.message && <small id="message-error">{errors.message}</small>}
              </label>
            </div>

            <div className="contact-form-actions">
              <button className="button button-dark contact-submit" type="submit" disabled={submitState === 'loading'}>
                {submitState === 'loading' ? <><i className="loading-dot" aria-hidden="true"></i>Đang gửi yêu cầu</> : <>Gửi yêu cầu tư vấn <span aria-hidden="true">→</span></>}
              </button>
              <p className="contact-required"><b aria-hidden="true">*</b> Trường thông tin bắt buộc</p>
            </div>
            {submitState === 'success' && <p className="form-success" role="status">Cảm ơn bạn! IHDC sẽ liên hệ tư vấn trong thời gian sớm nhất.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
