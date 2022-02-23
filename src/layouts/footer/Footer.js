import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export function Footer() {

    const domNode = document.getElementById('footer');
  
    return ReactDOM.createPortal(
      <div>
        <span>Footer</span>
      </div>,
      domNode
    );
}