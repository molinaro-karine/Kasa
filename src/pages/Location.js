import React from "react"
import { useParams } from "react-router-dom"
import locations from "../data/logements.json"


export default function Locations() {
  const { id } = useParams();
  const location = locations.find(location => location.id === id);
 
 return (
    <main className="location">
      <div className="flex">
        <div className="text">
          <h1>{location.title}</h1>
          <h2>{location.location}</h2>
         </div>
      </div>
    </main>
  );
}