import React from "react";
import "./styles/Home.css";
import Cards from "../components/Cards";
import banner from "../assets/banner.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import locations from "../data/logements.json";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <div className="banner-home">
        <img src={banner} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="cards">
        {locations.map((location) => {
          return (
            <Cards
              text={location.title}
              src={location.cover}
              id={location.id}
              key={location.id}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
