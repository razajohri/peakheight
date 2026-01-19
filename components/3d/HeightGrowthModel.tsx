"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Html, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Model loader component - supports external GLTF/GLB files
function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: { 
  modelPath: string; 
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  // Smooth animations
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Subtle floating animation
      const baseY = position[1];
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

  return (
    <primitive 
      ref={groupRef}
      object={clonedScene} 
      scale={scale} 
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    />
  );
}

// Enhanced animated character with better proportions and details
function GrowingCharacter({ height = 1 }: { height?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Smooth animations
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      
      // Gentle sway
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      
      // Rotation on hover
      if (hovered) {
        groupRef.current.rotation.y += 0.015;
      }
    }
    
    // Head bob
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    }
  });

  // Proportional calculations based on height
  const baseHeight = 1.7; // Base height in meters
  const scaleFactor = height / baseHeight;
  
  // Body proportions (more realistic)
  const headRadius = 0.12 * scaleFactor;
  const neckHeight = 0.08 * scaleFactor;
  const shoulderWidth = 0.4 * scaleFactor;
  const torsoHeight = 0.5 * height;
  const torsoWidth = 0.3 * scaleFactor;
  const torsoDepth = 0.2 * scaleFactor;
  
  const upperArmLength = 0.35 * height;
  const lowerArmLength = 0.3 * height;
  const armThickness = 0.06 * scaleFactor;
  
  const thighLength = 0.3 * height;
  const shinLength = 0.35 * height;
  const legThickness = 0.08 * scaleFactor;
  
  const footLength = 0.12 * scaleFactor;
  const footWidth = 0.08 * scaleFactor;
  
  // Positions
  const headY = height / 2 + headRadius + neckHeight;
  const neckY = height / 2 + neckHeight / 2;
  const torsoY = height / 2 - torsoHeight / 2;
  const hipY = -height / 2 + thighLength + shinLength;
  const kneeY = -height / 2 + shinLength;
  const footY = -height / 2;

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
    >
      {/* Head - more detailed */}
      <mesh ref={headRef} position={[0, headY, 0]} castShadow>
        <sphereGeometry args={[headRadius, 32, 32]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Hair/Top of head */}
      <mesh position={[0, headY + headRadius * 0.3, -headRadius * 0.2]} castShadow>
        <sphereGeometry args={[headRadius * 0.95, 16, 16]} />
        <meshStandardMaterial 
          color="#2c1810" 
          roughness={0.9}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, neckY, 0]} castShadow>
        <cylinderGeometry args={[headRadius * 0.5, headRadius * 0.5, neckHeight, 16]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
        />
      </mesh>

      {/* Torso - tapered (wider at shoulders) */}
      <mesh position={[0, torsoY, 0]} castShadow>
        <boxGeometry args={[torsoWidth, torsoHeight, torsoDepth]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Shoulders */}
      <mesh position={[0, torsoY + torsoHeight / 2 - 0.05, 0]} castShadow>
        <boxGeometry args={[shoulderWidth, 0.1, torsoDepth * 1.2]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.7}
        />
      </mesh>

      {/* Left Upper Arm */}
      <mesh 
        position={[-shoulderWidth / 2 - upperArmLength / 2, torsoY + torsoHeight / 3, 0]} 
        rotation={[0, 0, 0.3]} 
        castShadow
      >
        <cylinderGeometry args={[armThickness / 2, armThickness / 2, upperArmLength, 16]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
        />
      </mesh>

      {/* Left Lower Arm */}
      <mesh 
        position={[-shoulderWidth / 2 - upperArmLength - lowerArmLength / 2, torsoY - torsoHeight / 4, 0]} 
        rotation={[0, 0, -0.2]} 
        castShadow
      >
        <cylinderGeometry args={[armThickness * 0.85 / 2, armThickness * 0.85 / 2, lowerArmLength, 16]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
        />
      </mesh>

      {/* Right Upper Arm */}
      <mesh 
        position={[shoulderWidth / 2 + upperArmLength / 2, torsoY + torsoHeight / 3, 0]} 
        rotation={[0, 0, -0.3]} 
        castShadow
      >
        <cylinderGeometry args={[armThickness / 2, armThickness / 2, upperArmLength, 16]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
        />
      </mesh>

      {/* Right Lower Arm */}
      <mesh 
        position={[shoulderWidth / 2 + upperArmLength + lowerArmLength / 2, torsoY - torsoHeight / 4, 0]} 
        rotation={[0, 0, 0.2]} 
        castShadow
      >
        <cylinderGeometry args={[armThickness * 0.85 / 2, armThickness * 0.85 / 2, lowerArmLength, 16]} />
        <meshStandardMaterial 
          color="#fdbcb4" 
          roughness={0.8}
        />
      </mesh>

      {/* Left Thigh */}
      <mesh position={[-legThickness, hipY - thighLength / 2, 0]} castShadow>
        <cylinderGeometry args={[legThickness / 2, legThickness / 2, thighLength, 16]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          roughness={0.9}
        />
      </mesh>

      {/* Left Shin */}
      <mesh position={[-legThickness, kneeY - shinLength / 2, 0]} castShadow>
        <cylinderGeometry args={[legThickness * 0.9 / 2, legThickness * 0.9 / 2, shinLength, 16]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          roughness={0.9}
        />
      </mesh>

      {/* Left Foot */}
      <mesh position={[-legThickness, footY + footLength / 2, footLength / 2]} rotation={[Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[footWidth, footLength * 0.3, footLength]} />
        <meshStandardMaterial 
          color="#16213e" 
          roughness={0.8}
        />
      </mesh>

      {/* Right Thigh */}
      <mesh position={[legThickness, hipY - thighLength / 2, 0]} castShadow>
        <cylinderGeometry args={[legThickness / 2, legThickness / 2, thighLength, 16]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          roughness={0.9}
        />
      </mesh>

      {/* Right Shin */}
      <mesh position={[legThickness, kneeY - shinLength / 2, 0]} castShadow>
        <cylinderGeometry args={[legThickness * 0.9 / 2, legThickness * 0.9 / 2, shinLength, 16]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          roughness={0.9}
        />
      </mesh>

      {/* Right Foot */}
      <mesh position={[legThickness, footY + footLength / 2, footLength / 2]} rotation={[Math.PI / 6, 0, 0]} castShadow>
        <boxGeometry args={[footWidth, footLength * 0.3, footLength]} />
        <meshStandardMaterial 
          color="#16213e" 
          roughness={0.8}
        />
      </mesh>

      {/* Height measurement indicator - subtle */}
      <mesh position={[0.45, 0, 0]}>
        <boxGeometry args={[0.015, height + 0.3, 0.015]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          emissive="#60a5fa" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Measurement markers */}
      {[0, 0.25, 0.5, 0.75, 1].map((marker) => (
        <mesh key={marker} position={[0.42, -height / 2 + height * marker, 0]}>
          <boxGeometry args={[0.03, 0.01, 0.01]} />
          <meshStandardMaterial color="#60a5fa" />
        </mesh>
      ))}
    </group>
  );
}

// Height comparison component - shows before/after
function HeightComparison() {
  const [currentHeight, setCurrentHeight] = useState(0.8);
  const targetHeight = 1.2;

  useEffect(() => {
    // Animate from short to tall
    const interval = setInterval(() => {
      setCurrentHeight((prev) => {
        if (prev >= targetHeight) {
          return 0.8; // Reset animation
        }
        return prev + 0.01;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {/* Growing character */}
      <GrowingCharacter height={currentHeight} />

      {/* Height measurement text */}
      <Text
        position={[0.4, currentHeight / 2, 0]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="left"
        anchorY="middle"
      >
        {`${(currentHeight * 175).toFixed(0)} cm`}
      </Text>
    </group>
  );
}

// Main 3D Scene
export function HeightGrowthModel() {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        shadows
        camera={{ position: [2, 1, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.3} color="#3498db" />
        <pointLight position={[5, 3, -5]} intensity={0.3} color="#e74c3c" />

        {/* Floor/Platform */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[5, 5]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Grid helper for reference */}
        <gridHelper args={[5, 20, "#333333", "#222222"]} position={[0, -1.49, 0]} />

        {/* Height comparison animation */}
        <HeightComparison />

        {/* Camera controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={6}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Info label */}
        <Html position={[0, 1.8, 0]} center>
          <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/20">
            Watch Your Height Grow
          </div>
        </Html>
      </Canvas>
    </div>
  );
}

// Simplified version for hero section with external model support
export function HeightGrowthHero({ 
  modelPath 
}: { 
  modelPath?: string 
}) {
  const [mounted, setMounted] = useState(false);
  const [height, setHeight] = useState(1);

  useEffect(() => {
    setMounted(true);
    
    // Height growth animation (only if using procedural model)
    if (!modelPath) {
      const interval = setInterval(() => {
        setHeight((prev) => {
          if (prev >= 1.2) {
            return 0.8;
          }
          return prev + 0.008;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [modelPath]);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center bg-card/30 rounded-2xl">
        <div className="text-muted-foreground animate-pulse">Loading 3D Model...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-4, 4, -4]} intensity={0.6} color="#60a5fa" />
          <pointLight position={[4, 4, -4]} intensity={0.4} color="#ffffff" />
          <spotLight position={[0, 6, 3]} intensity={0.5} angle={0.3} penumbra={1} />
          
          {/* Load external model if provided, otherwise use procedural */}
          {modelPath ? (
            <>
              {/* Platform for external model */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial 
                  color="#0a0a0a" 
                  roughness={0.8}
                  metalness={0.2}
                />
              </mesh>
              <gridHelper args={[5, 20, "#1a1a1a", "#0f0f0f"]} position={[0, -1.48, 0]} />
              
              {/* External 3D model */}
              <Model 
                modelPath={modelPath} 
                scale={1.2}
                position={[0, -1.2, 0]}
              />
            </>
          ) : (
            <>
              {/* Enhanced platform with gradient effect */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial 
                  color="#0a0a0a" 
                  roughness={0.8}
                  metalness={0.2}
                />
              </mesh>
              
              {/* Subtle grid for reference */}
              <gridHelper args={[5, 20, "#1a1a1a", "#0f0f0f"]} position={[0, -1.48, 0]} />
              
              {/* Procedural character */}
              <GrowingCharacter height={height} />
              
              {/* Floating particles with better animation */}
              {Array.from({ length: 30 }).map((_, i) => {
                const angle = (i / 30) * Math.PI * 2;
                const radius = 1.5;
                return (
                  <mesh
                    key={i}
                    position={[
                      Math.cos(angle) * radius,
                      -1.5 + Math.random() * height * 1.8,
                      Math.sin(angle) * radius,
                    ]}
                  >
                    <sphereGeometry args={[0.015, 8, 8]} />
                    <meshStandardMaterial
                      color="#60a5fa"
                      emissive="#60a5fa"
                      emissiveIntensity={0.8}
                      transparent
                      opacity={0.7}
                    />
                  </mesh>
                );
              })}
            </>
          )}
          
          <ContactShadows 
            opacity={0.3} 
            scale={6} 
            blur={2.5} 
            far={5} 
            position={[0, -1.49, 0]} 
            color="#000000"
          />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={2}
          maxDistance={5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}

