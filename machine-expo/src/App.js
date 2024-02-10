import React from 'react';
import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
import DimensionComponent from './components/DimensionComponent'; // Adjust the path as necessary
import './App.css'

function App() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className="App">
      <Canvas className="MainSpace" camera={{ position: [0, 0, 1], aspect: width / height, fov: 75 }} gl={{ antialias: false, stencil: false, depth: false }} >
        <ambientLight intensity={0.5} />
        <DimensionComponent />
      </Canvas>
      <div
        className="title"
      >
        Composant Machinal Montreal
      </div>
      <div className="overlay"></div> {/* Overlay added here */}
    </div>
  );
}

export default App;
