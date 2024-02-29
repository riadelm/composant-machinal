import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationForm from './views/ApplicationForm.js'; // Import the new page component
import HomePage from './views/HomePage.js';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Assume HomePage is your main component */}
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
