import React from 'react';
//import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
//import DimensionComponent from './components/DimensionComponent'; // Adjust the path as necessary
import { Routes, Route } from 'react-router-dom';
import ApplicationForm from './views/ApplicationForm.js'; // Import the new page component
import HomePage from './views/HomePage.js';
import './App.css'

// TODO: 
// - blurry green hover
// - colors the atoms and stays colored green
// - no more harsh hover effect
// - smaller atoms for form in the background - use same font
// scale everything on phone!!
// form = transparent but brightness-- and background is same as landing page
// make sure it's still readable 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Assume HomePage is your main component */}
      <Route path="/apply" element={<ApplicationForm />} />
    </Routes>
  );
};

export default App;
