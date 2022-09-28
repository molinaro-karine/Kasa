import React from "react"
import { NavLink, Link } from "react-router-dom"
import "./styles/Header.css"
import Logo  from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="Header">
        <Link to="/">
            <img src={Logo} className="logo" alt="logo"/> 
        </Link>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </header>
  );
}