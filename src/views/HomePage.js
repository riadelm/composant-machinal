import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import DimensionComponent from '../components/DimensionComponent';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const [displayState, setDisplayState] = useState('title'); // 'title', 'typing', 'fullText'
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const infoText = `Composant Machinal is an independent art exhibition series that delves into the introspective nature of technology. Our mission is to navigate the cyclical dialogue between the machine and its creations, inviting reflections on how digital realms replicate and question aspects of sentience, cyber-identities, interconnectivities, simulations, and organic structures. As we meander through the digital age, Composant Machinal positions itself as a platform whose aim is to deepen our granular understanding of the digital ecosystem's interplay.\n\nOur commitment is to foster a rich tapestry of works that span kinetic sculptures, robotics, installation pieces, video and physical performances, digital or algorithmic works, and machine learning integrations. We aim to provide a platform for artists and programmers united in their collective questioning of our collective concept of technology\n\nThrough this lens, Composant Machinal aspires to be a pivotal platform for artists and programmers united in their pursuit of deconstructing the layers of interaction between the digital and the tangible, collectively driven to create, examine, question and observe the machine.`;

  useEffect(() => {
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:?><,./;'[]=-¡™£¢∞§¶•º≠“æ…¬π¨¥†®∑åß∂ƒ©˙∆˚≈ç√∫µ0123456789";
    const getRandomChar = () => randomChars[Math.floor(Math.random() * randomChars.length)];

    if (displayState === 'typing' && typingIndex < infoText.length) {
      const nextChar = infoText.charAt(typingIndex);
      let updateCount = 0;
      const maxUpdates = 3;

      const typeChar = () => {
        if (updateCount < maxUpdates) {
          setTypedText(typed => typed.slice(0, -1) + getRandomChar());
          updateCount++;
          setTimeout(typeChar, 10);
        } else {
          setTypedText(typed => typed.slice(0, -1) + nextChar);
          setTypingIndex(typingIndex + 1);
        }
      };

      setTypedText(typed => typed + ' '); // Placeholder for the next char
      typeChar();
    } else if (displayState === 'fullText') {
      setTypedText(infoText);
    }
  }, [displayState, typingIndex, infoText]);

  const handleClick = () => {
    if (displayState === 'title') {
      setDisplayState('typing');
    } else if (displayState === 'typing') {
      setDisplayState('fullText');
    } else {
      setDisplayState('title');
      setTypedText('');
      setTypingIndex(0);
    }
  };

  return (
    <div className="App">
      <Canvas className="MainSpace" camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <DimensionComponent />
      </Canvas>
      <div className="title-container" onClick={handleClick}>
        {displayState === 'title' ? <div>Composant Machinal Montreal</div> : <div className="info-text">{typedText}</div>}
      </div>
      <Link to="/apply" className="apply-button">Apply - Call for Artists</Link>
      <div className={`overlay ${displayState !== 'title' ? 'blur' : ''}`}></div>
    </div>
  );
};

export default HomePage;