import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import  {lastUpdatedAt } from '../../features/home/homeSlice';
import { getTheme } from '../../features/home/homeSlice';

export function Footer() {
    const domNode = document.getElementById('footer');
    const updatedAt = useSelector(lastUpdatedAt);
    const theme = useSelector(getTheme);

    return ReactDOM.createPortal(
      updatedAt ?  
        <div className={'footer-container ' + theme}>
          <p className='text-center footer-text'>Updated at: {updatedAt}</p>
        </div> 
      : null,
      domNode
    );
}