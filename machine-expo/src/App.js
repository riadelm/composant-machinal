import React from 'react';
//import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
//import DimensionComponent from './components/DimensionComponent'; // Adjust the path as necessary
import { Routes, Route } from 'react-router-dom';
import ApplicationForm from './views/ApplicationForm.js'; // Import the new page component
import HomePage from './views/HomePage.js';
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Assume HomePage is your main component */}
      <Route path="/apply" element={<ApplicationForm />} />
    </Routes>
  );
};

export default App;
