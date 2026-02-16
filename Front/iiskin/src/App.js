// src/App.js
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Fotter } from './compents/fotter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fotter />} />
      </Routes>
    </Router>
  );
}

export default App;