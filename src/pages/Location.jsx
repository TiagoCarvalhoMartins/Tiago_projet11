import Header from '../components/Header'
import Slider from '../components/location/Slider'
import MainInformations from '../components/location/MainInformations'
import Tag from '../components/location/Tag'
import Equipment from '../components/location/Equipment'
import Button from '../components/Button'
import Footer from '../components/Footer'
import '../styles/Location.css'
import JSON from '../data/data.json'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

function Location() {
  let params = useParams()
  const JSONFiltered = JSON.id.filter((id) => id == params)
  console.log(params) // 👉️ {userId: '4200'}
  const [toggle, setToggle] = useState(false)
  let display = ''
  if (toggle == true) {
    display = 'block'
  } else {
    display = 'none'
  }

  return (
    <div className="body">
      <Header />
      <div className="container_location">
        <Slider />
        <MainInformations />
        <div className="tagRating">
          {JSONFiltered.tags.map((tag) => (
            <Tag content={tag} key={tag} />
          ))}
        </div>
        <div className="toggleButton">
          <div className="descriptionToggle">
            <Button title="Description" />
            <div className="description" style={{ display: display }}>
              <p>{JSONFiltered.description}</p>
            </div>
          </div>
          <div className="equipmentsToggle">
            <Button title="Équipements" />
            <div className="equipments" style={{ display: display }}>
              {JSONFiltered.equipments.map((equipment) => (
                <Equipment content={equipment} key={equipment} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Location
