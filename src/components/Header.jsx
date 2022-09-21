import logo from '../assets/logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Kasa" className="kasa-logo" />
        <ul>
          <li>
            <Link to="/about">
              <h2>Accueil</h2>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h2>A Propos</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
