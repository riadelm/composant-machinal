import React, { useRef, useMemo, useEffect, useCallback} from 'react';
import { useFrame } from '@react-three/fiber';
// import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import vertexShader from '../shaders/vertexShader.js';
import fragmentShader from '../shaders/fragmentShader.js';

const targetFPS = 30; 
const frameInterval = 1 / targetFPS;

const DimensionComponent = () => {
  const mouseRef = useRef(new THREE.Vector2());
  const shaderMaterialRef = useRef();
  const lastUpdateTimeRef = useRef(0);

  const handleMouseMove = useCallback((event) => {
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
        shaderMaterial.uniforms.resolution.value.set(innerWidth, innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize with current size
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    mouse: { value: mouseRef.current},
  }), []);

  useFrame(({ clock, size }) => {
    const elapsedTime = clock.getElapsedTime();
    if (elapsedTime - lastUpdateTimeRef.current > frameInterval) {
      const shaderMaterial = shaderMaterialRef.current;
      if (shaderMaterial) {
        shaderMaterial.uniforms.time.value = elapsedTime;
        shaderMaterial.uniforms.resolution.value.set(size.width, size.height);
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