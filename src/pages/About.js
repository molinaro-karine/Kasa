import React from "react"
import "./styles/About.css"
import { DropdownContainer } from "../components/Dropdown"
import banner from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
 
  return (
      <main className="about">
        <Header />
        <div className="banner-home">
          <img src={banner} alt="" />
        </div>
        <div className="dropdowns">
          <DropdownContainer text="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </DropdownContainer>
          <DropdownContainer text="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </DropdownContainer>
          <DropdownContainer text="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
          </DropdownContainer>
          <DropdownContainer text="Responsabilité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </DropdownContainer>
        </div>
        <Footer />
      </main>
  );
}