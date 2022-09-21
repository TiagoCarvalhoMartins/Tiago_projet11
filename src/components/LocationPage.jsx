import Tag from './location/Tag'
import Equipment from './location/Equipment'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'

let location = {
  id: '7af00cd6',
  title: 'Nid douillet au coeur du 11ème',
  cover:
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg',
  pictures: [
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg',
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg',
  ],
  description:
    "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
  host: {
    name: 'Della Case',
    picture:
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg',
  },
  rating: '3',
  location: 'Ile de France - Paris 11e',
  equipments: [
    'Micro-Ondes',
    'Wi-fi',
    'Chambre Séparée',
    'Climatisation',
    'Télévision',
  ],
  tags: ['Parmentier', 'Marais', 'Parc', 'Night Life'],
}

function LocationPage() {
  let { id } = useParams()
  const [toggle, setToggle] = useState(false)
  let display = ''
  if (toggle == true) {
    display = 'block'
  } else {
    display = 'none'
  }

  console.log(id)

  return (
    <div className="container_location">
      <div className="pictures">
        <img src={location.pictures[0]} alt="photos" className="slider" />
      </div>
      <div className="mainInformations">
        <div className="titleLocalisation">
          <h2>{location.title}</h2>
          <p>{location.location}</p>
        </div>
        <div className="seller">
          <p>{location.host.name}</p>
          <img
            src={location.host.picture}
            alt="vendeur"
            className="imageSeller"
          />
        </div>
      </div>
      <div className="tagRating">
        {location.tags.map((tag) => (
          <Tag content={tag} key={tag} />
        ))}
      </div>
      <div className="toggleButton">
        <div className="descriptionToggle">
          <button onClick={() => setToggle(!toggle)}>Description</button>
          <div className="description" style={{ display: display }}>
            <p>{location.description}</p>
          </div>
        </div>
        <div className="equipmentsToggle">
          <button onClick={() => setToggle(!toggle)}>Équipements</button>
          <div className="equipments" style={{ display: display }}>
            {location.equipments.map((equipment) => (
              <Equipment content={equipment} key={equipment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPage
