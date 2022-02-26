import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import  {lastUpdatedAt } from '../../features/home/homeSlice';

export function Footer() {
    const domNode = document.getElementById('footer');
    const updatedAt = useSelector(lastUpdatedAt);
    
    return ReactDOM.createPortal(
      <div>
        <p className='text-center'>Updated at: {updatedAt}</p>
      </div>,
      domNode
    );
}