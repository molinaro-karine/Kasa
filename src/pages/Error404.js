import React from "react"
import { Link } from "react-router-dom"
import "./styles/Error404.css"

export default function Error404() {
  return (
      <main className="error">
        <h1>404</h1>
        <h2>Oups! La page que<br /> vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
  );
}