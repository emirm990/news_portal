import React from 'react';
import { Counter } from './features/counter/Counter';
import { Navigation } from './layouts/navigation/Navigation';
import { Footer } from './layouts/footer/Footer';
import { Home } from './features/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <React.Fragment >
      <Navigation />
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="counter" element={<Counter />} />
          </Routes>
          <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
