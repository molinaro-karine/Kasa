import React from "react"
import "./styles/Footer.css"
import { ReactComponent as Logo } from '../assets/Logo-footer.svg'

export default function Footer() {  
  return (
    <footer className="Footer">
      <Logo className="logo"/>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}