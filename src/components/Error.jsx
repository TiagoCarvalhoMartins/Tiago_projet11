import Header from './Header'
import Footer from './Footer'
import '../styles/Error.css'

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
            <a href="https://example.com">Retourner sur la page d’accueil</a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Error
