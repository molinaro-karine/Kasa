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

export function DropdownLarge(props) {
  return (
    <details className="dropdown large">
      <summary>{props.text}<Arrow /></summary>
      <div>
        {props.children}
      </div>
    </details>
  );
}