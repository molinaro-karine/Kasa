import React, { useState } from "react"
import "./styles/Carousel.css"
import { ReactComponent as Arrow } from '../assets/Vector-arrow-top.svg'


export default function Carousel(props) {
    const [carousel, setCarousel] = useState(0);


  let slides = props.children;

  if (Array.isArray(props.children) && props.children.length > 1) {
    slides = props.children[carousel]
    slides = <>
      <button className="previous" onClick={() => {
          if (carousel <= 0) {
            setCarousel(props.children.length - 1)
          } else { setCarousel(carousel - 1) }
        }}>
        <Arrow />
      </button>
      {slides}
      <button className="next" onClick={() => {
        if (carousel >= props.children.length - 1) {
          setCarousel(0)
        } else { setCarousel(carousel + 1) }
      }}>
        <Arrow />
      </button>
    </>
  }

  return (
    <div className="carousel">
      {slides}
      <p className="carousel-notation">{carousel + 1}/{props.children.length}</p>
    </div>
    );
}