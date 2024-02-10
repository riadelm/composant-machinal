import React, { useRef, useMemo, useState, useEffect, useCallback} from 'react';
import { useFrame } from '@react-three/fiber';
// import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertexShader from '../shaders/vertexShader.js';
import fragmentShader from '../shaders/fragmentShader.js';

const targetFPS = 30; // Target framerate (e.g., 30 FPS for throttling)
const frameInterval = 1 / targetFPS;

const DimensionComponent = () => {
  const mouseRef = useRef([0, 0]);
  const shaderMaterialRef = useRef();
  const lastUpdateTimeRef = useRef(0);

  const handleMouseMove = useCallback((event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouseRef.current = [x, y];
  }, [mouseRef]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const shaderMaterial = shaderMaterialRef.current;
      if (shaderMaterial) {
        shaderMaterial.uniforms.resolution.value = [innerWidth, innerHeight];
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize with current size
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
    mouse: { value: mouseRef.current},
  }), [mouseRef.current]);

  useFrame(({ clock, size }) => {
    const elapsedTime = clock.getElapsedTime();
    if (elapsedTime - lastUpdateTimeRef.current > frameInterval) {
      const shaderMaterial = shaderMaterialRef.current;
      if (shaderMaterial) {
        shaderMaterial.uniforms.time.value = elapsedTime;
        shaderMaterial.uniforms.resolution.value = [size.width, size.height];
        shaderMaterial.uniforms.mouse.value = mouseRef.current;
      }
      lastUpdateTimeRef.current = elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default DimensionComponent;