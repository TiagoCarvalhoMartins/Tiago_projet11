import Header from './Header'
import Footer from './Footer'
import '../styles/Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <Header />
      <div className="error">
        <h2 className="errorTitle">404</h2>
        <h3 className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </h3>
        <ul>
          <li>
          <Link to="/">
            <p>Retourner sur la page d’accueil</p>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Error
