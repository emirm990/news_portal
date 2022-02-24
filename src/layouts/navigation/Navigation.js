import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../../features/search/Search';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  lastUpdatedAt
} from '../../features/home/homeSlice';
export function Navigation() {
  
  const domNode = document.getElementById('navigation');
  const updatedAt = useSelector(lastUpdatedAt);
  return ReactDOM.createPortal(
    <div className="navigation">
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <Search />
      <p>Last updated at: {updatedAt}</p>
    </div>,
    domNode
  );
}