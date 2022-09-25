import React from "react"
import { Link } from "react-router-dom"
import "./styles/Cards.css"

export default function Cards(props) {
  return (
    <section className="card">
      <img src={props.src} alt={props.text}/>
      <Link className="link" to={"/location/"+props.id} >
        <h2>{props.text}</h2>
      </Link>
    </section>
  );
}