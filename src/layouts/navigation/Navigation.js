import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../../features/search/Search';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  setSearchCategory,
  setSearchTerm,
  setCurrentPage,
  setEndPoint
} from '../../features/home/homeSlice';

export function Navigation() {
  
  const dispatch = useDispatch();
  const domNode = document.getElementById('navigation');
  

  function goHome(){
    dispatch(setSearchCategory(''));
    dispatch(setSearchTerm(''));
    dispatch(setEndPoint('top-headlines'));
    dispatch(setCurrentPage(1));
    sessionStorage.removeItem('data');
  }
  
  return ReactDOM.createPortal(
    <div className="navigation">
      <ul>
        <Link className="home button" to="/" onClick={() => goHome()}>Home</Link>
      </ul>
      <Search />
    </div>,
    domNode
  );
}