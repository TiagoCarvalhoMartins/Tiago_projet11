import Header from '../components/Header'
import Slider from '../components/location/Slider'
import MainInformations from '../components/location/MainInformations'
import Tag from '../components/location/Tag'
import Button from '../components/Button'
import Footer from '../components/Footer'
import '../styles/Location.css'
import JSON from '../data/data.json'
import { useParams } from 'react-router-dom'

function Location() {
  let params = useParams()
  const JSONFiltered = JSON.find((location) => location.id === params.id)
  console.log(JSONFiltered)


  return (
    <div className="body">
      <Header />
      <div className="container_location">
        <Slider data={JSONFiltered}/>
        <MainInformations data={JSONFiltered}/>
        <div className="tagRating">
          {JSONFiltered.tags.map((tag) => (
            <Tag content={tag} key={tag} />
          ))}
        </div>
        <div className="toggleButton">
          <div className="descriptionToggle">
            <Button title="Description" texte={JSONFiltered.description}/>
          </div>
          <div className="equipmentsToggle">
            <Button title="Équipements" texte={JSONFiltered.equipments.join(', ')}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Location
