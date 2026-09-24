import { useState } from 'react'
import { navigation } from '../data/homeData'

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#trang-chu" onClick={closeMenu} aria-label="IHDC Fashion - Trang chủ">
        <span className="brand-mark">IHDC</span><span className="brand-sub">Fashion</span>
      </a>
      <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Điều hướng chính">
        {navigation.filter(([, href]) => ['#cau-chuyen', '#giai-phap', '#van-hoa', '#bo-suu-tap', '#du-an'].includes(href)).map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-consult-mobile" href="#lien-he" onClick={closeMenu}>Nhận tư vấn <ArrowUpRight /></a>
      </nav>
      <div className="header-actions">
        <a className="button button-dark header-cta" href="#lien-he">Nhận tư vấn <ArrowUpRight /></a>
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span></button>
      </div>
    </header>
  )
}
