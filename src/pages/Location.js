import React from "react"
import { useParams } from "react-router-dom"
import Carousel from "../components/Carousel"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import Header from "../components/Header"
import locations from "../data/logements.json"
import Error404 from "./Error404"
import { ReactComponent as Star } from '../assets/star.svg'
import "./styles/Location.css"


export default function Locations() {
  const { id } = useParams();
  const location = locations.find(location => location.id === id);

  if (location === undefined) { return <Error404 /> }
  const pictures = location.pictures.map((picture, index) => 
    <img src={picture} alt="" key={index} />
  )

 return (
    <main className="location">
      <Header />
      <Carousel>
        {pictures}
      </Carousel>

      <div className="flex">
        <div className="text">
          <h1>{location.title}</h1>
          <h2>{location.location}</h2>
         </div>

         <div className="review">
          <div className="host">
            <span className="name">{location.host.name.split(" ")[0]}<br />{location.host.name.split(" ")[1]}</span>
            <img src={location.host.picture} alt="" />
          </div>
          <div className="stars">
            {[1,2,3,4,5].map(star => 
              <Star key={star} className={ star <= location.rating ? "star" : null }/>
            )}
          </div>
        </div>
      </div>

      <div className="dropdowns">
        <Dropdown text="Description">{location.description}</Dropdown>
        <Dropdown text="Équipements">
          <ul>
            {location.equipments.map((equipment, index) => 
              <li key={index}>{equipment}</li>
            )}
          </ul>
        </Dropdown>
      </div>
      <Footer />
    </main>
  );
}