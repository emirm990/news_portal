import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../../features/search/Search';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  lastUpdatedAt,
  setSearchCategory,
  setSearchTerm,
  setCurrentPage,
  setEndPoint
} from '../../features/home/homeSlice';

export function Navigation() {
  
  const dispatch = useDispatch();
  const domNode = document.getElementById('navigation');
  const updatedAt = useSelector(lastUpdatedAt);

  function goHome(){
    dispatch(setSearchCategory(''));
    dispatch(setSearchTerm(''));
    dispatch(setEndPoint('top-headlines'));
    dispatch(setCurrentPage(1));
  }
  
  return ReactDOM.createPortal(
    <div className="navigation">
      <ul>
        <Link to="/" onClick={() => goHome()}>Home</Link>
      </ul>
      <Search />
      <p>Last updated at: {updatedAt}</p>
    </div>,
    domNode
  );
}