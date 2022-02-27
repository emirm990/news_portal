import React from 'react';
import { Navigation } from './layouts/navigation/Navigation';
import { Home } from './features/home/Home';
import { Details } from './features/details/Details';
import { Footer } from './layouts/footer/Footer';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTheme } from './features/home/homeSlice';
import './App.scss';

function App() {
  const theme = useSelector(getTheme);
  
  return (
    <React.Fragment >
      <Navigation />
      <div className={"App " + theme}  >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
