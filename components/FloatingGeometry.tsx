'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particles
  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Point lights for neon effect */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#00f0ff" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#a855f7" />
      <pointLight position={[0, 5, -5]} intensity={0.6} color="#ec4899" />

      {/* Main floating shape */}
      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={2}
      >
        <mesh ref={meshRef} position={[2, 0, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#00f0ff"
            transparent
            opacity={0.3}
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Wireframe overlay */}
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={1.5}
      >
        <mesh position={[2, 0, 0]} scale={1.01}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      {/* Secondary floating shapes */}
      <Float
        speed={3}
        rotationIntensity={2}
        floatIntensity={1}
      >
        <mesh position={[-2, 1.5, -1]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            transparent
            opacity={0.4}
            emissive="#ec4899"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      <Float
        speed={2.5}
        rotationIntensity={1.8}
        floatIntensity={1.2}
      >
        <mesh position={[-1.5, -1.5, 1]}>
          <tetrahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            transparent
            opacity={0.4}
            emissive="#00f0ff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>

      {/* Particle field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#00f0ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </>
  );
}
