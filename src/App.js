import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './features/Card/Cards';
import Header from './features/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
