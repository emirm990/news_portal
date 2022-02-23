import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export function Navigation() {
  
  const domNode = document.getElementById('navigation');
  
  return ReactDOM.createPortal(
    <ul>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
    </ul>,
    domNode
  );
}