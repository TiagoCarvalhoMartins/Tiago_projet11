import logo from '../assets/logo_footer.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Kasa" className="kasa-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
