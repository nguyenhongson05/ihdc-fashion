import { navigation } from '../data/homeData'

export default function Footer() {
  return (
    <footer className="site-footer"><div className="footer-top page-shell"><a className="footer-brand" href="#trang-chu"><span>IHDC</span> Fashion</a><div className="footer-nav">{navigation.slice(1).map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div><div className="footer-contact"><a href="tel:0984959586">Hotline: 0984 95 95 86</a><span>Số 6, Kim Đồng, Hoàng Mai, Hà Nội</span></div></div><div className="footer-bottom page-shell"><span>© IHDC Fashion</span><span>Phong cách tạo thành công</span><a href="#trang-chu">Trở lên ↑</a></div></footer>
  )
}
