import React from 'react';
import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
import DimensionComponent from '../components/DimensionComponent'; // Adjust the path as n
import { Link } from 'react-router-dom';
import '../App.css'; 

const HomePage = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className="App">
      <Canvas className="MainSpace" camera={{ position: [0, 0, 1], aspect: width / height, fov: 100 }} gl={{ antialias: false, stencil: false, depth: false }} >
        <ambientLight intensity={0.5} />
        <DimensionComponent />
      </Canvas>
      <div
        className="title"
      >
        Composant Machinal Montréal
      </div>
      <Link to="/apply" className="apply-button">Apply - Call for Artists</Link>
      <div className="overlay"></div> {/* Overlay added here */}
    </div>
  );
};

export default HomePage;