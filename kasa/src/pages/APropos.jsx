import Header from '../components/Header'
import banner from '../assets/banner.png'
import Footer from '../components/Footer'
import Button from '../components/Button'
import '../styles/about.css'
import React, { useState } from 'react'

function APropos() {

  return (
    <div className="body">
      <Header />
      <div className="banner">
        <img src={banner} alt="bannière" />
      </div>
      <div className="container_about">
          <Button title="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes."/>
          <Button title="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme."/>
          <Button title="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes."/>

          </div>
      <Footer />
    </div>
  )
}

export default APropos
