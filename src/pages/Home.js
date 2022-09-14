import React from "react"
import "./styles/Home.css"
import banner from "../assets/banner.png"

export default function Home() {
  return (
      <main className="home">
        <div className="banner-home">
          <img src={banner} alt=""/>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </main>
  );
}