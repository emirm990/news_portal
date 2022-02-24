import React from 'react';
import { Navigation } from './layouts/navigation/Navigation';
import { Home } from './features/home/Home';
import { Details } from './features/details/Details';
import { Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  
  return (
    <React.Fragment >
      <Navigation />
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
