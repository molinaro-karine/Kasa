import React from "react"
import "./styles/Dropdown.css"
import { ReactComponent as Arrow } from '../assets/Vector-arrow-top.svg'

export default function Dropdown(props) {
  return (
    <details className="dropdown">
      <summary>{props.text}<Arrow /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}

export function DropdownContainer(props) {
  return (
    <details className="dropdown-container">
      <summary>{props.text}<Arrow /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}