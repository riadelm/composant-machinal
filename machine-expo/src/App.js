import React from 'react';
import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
import DimensionComponent from './components/DimensionComponent'; // Adjust the path as necessary
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas className="MainSpace" camera={{ position: [1, 1, 10] }}>
        <ambientLight intensity={0.5} />
        <DimensionComponent />
      </Canvas>
    </div>
  );
}

export default App;
