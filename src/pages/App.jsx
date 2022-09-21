import Header from '../components/Header'
import banner from '../assets/banner.png'
import Card from '../components/Card'
import Footer from '../components/Footer'
import '../styles/index.css'
import JSON from '../data/data.json'

function App() {
  console.log(JSON)

  return (
    <div className="body">
      <Header />
      <div className="banner">
        <img src={banner} alt="bannière" />
      </div>
      <div className="container_card">
        {JSON.map((location) => (
          <Card
            title={location.title}
            cover={location.cover}
            id={location.id}
            key={location.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
