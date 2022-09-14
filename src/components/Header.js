import React from "react"
import { NavLink } from "react-router-dom"
import "./styles/Header.css"
import { ReactComponent as Logo } from '../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <Logo className="logo"/>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </header>
  );
}