import Header from '../components/Header'
import banner from '../assets/banner.png'
import Footer from '../components/Footer'
import Button from '../components/Button'
import '../styles/about.css'
import React, { useState } from 'react'

function APropos() {
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
      <div className="banner">
        <img src={banner} alt="bannière" />
      </div>
      <div className="container_about">
        <div className="fiability">
          <Button title="Fiabilité" />
          <div className="description" style={{ display: display }}>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="respect">
          <Button title="Respect" />
          <div className="description" style={{ display: display }}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
        <div className="service">
          <Button title="Service" />
          <div className="description" style={{ display: display }}>
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
        <div className="security">
          <Button title="Sécurité" />
          <div className="description" style={{ display: display }}>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default APropos
