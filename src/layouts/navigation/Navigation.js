import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '../../features/search/Search';
import { ThemeSwitch } from '../../features/theme_switch/ThemeSwitch';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchCategory,
  setSearchTerm,
  setCurrentPage,
  setEndPoint,
  getTheme
} from '../../features/home/homeSlice';

export function Navigation() {
  
  const dispatch = useDispatch();
  const domNode = document.getElementById('navigation');
  const theme = useSelector(getTheme);
  
  function goHome(){
    dispatch(setSearchCategory(''));
    dispatch(setSearchTerm(''));
    dispatch(setEndPoint('top-headlines'));
    dispatch(setCurrentPage(1));
    sessionStorage.removeItem('data');
  }
  
  return ReactDOM.createPortal(
    <div className={"navigation " + theme}>
      <div className="left-part">
        <ul>
          <Link className="home button" to="/" onClick={() => goHome()}>Home</Link>
        </ul>
        <ThemeSwitch />
      </div>
      
      <Search />
    </div>,
    domNode
  );
}