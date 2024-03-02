import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
//import ShaderComponent from './components/ShaderComponent'; // Adjust the path as necessary
import DimensionComponent from '../components/DimensionComponent'; // Adjust the path as n
import { Link } from 'react-router-dom';
import '../App.css'; 

const HomePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const infoText = `Composant Machinal is an independent, novel art exhibition series that aims to focus on the interplay that occurs when technology unfolds on itself. Our series invites a granular, reflective meta-dialogue on the role of technology in mirroring sentience, cyber-identities, interconnectivities, cultural simulations, and organic structures.\n\nOur commitment is to foster a rich tapestry of works that span kinetic sculptures, robotics, installation pieces, video and physical performances, digital or algorithmic works, and machine learning integrations. We aim to provide a platform for artists and programmers united in their collective questioning of our collective concept of technology.\n\nThrough this lens, Composant Machinal aspires to be a pivotal platform for artists and programmers united in their pursuit of deconstructing the layers of interaction between the digital and the tangible, collectively driven to create, examine, question and observe the machine.\n`;
  const { innerWidth: width, innerHeight: height } = window;


  useEffect(() => {
    if (showInfo && typingIndex < infoText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((text) => text + infoText.charAt(typingIndex));
        setTypingIndex(typingIndex + 1);
      }, 35); // Adjust speed as needed
      return () => clearTimeout(timeoutId);
    } else if (!showInfo) {
      setTypedText('');
      setTypingIndex(0); // Reset typing index when hiding info
    }
  }, [showInfo, typingIndex, infoText]);


  return (
    <div className="App">
      <Canvas className="MainSpace" camera={{ position: [0, 0, 1], aspect: width / height, fov: 100 }} gl={{ antialias: false, stencil: false, depth: false }} >
        <ambientLight intensity={0.5} />
        <DimensionComponent />
      </Canvas>
      <div className="title-container" onClick={() => setShowInfo(!showInfo)}>
        {!showInfo ? 
          <div>Composant Machinal Montreal</div> : (
          <div className="info-text">{typedText}</div>
        )}
      </div>
      <Link to="/apply" className="apply-button">Apply - Call for Artists</Link>
      <div className={`overlay ${showInfo ? 'blur' : ''}`}></div> 
    </div>
  );
};

export default HomePage;