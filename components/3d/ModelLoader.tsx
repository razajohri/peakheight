"use client";

/**
 * Helper component to load external 3D models
 * Supports GLTF, GLB, and other formats via useGLTF
 */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelLoaderProps {
  /** Path to the model file (relative to public folder or full URL) */
  modelPath: string;
  /** Scale of the model */
  scale?: number | [number, number, number];
  /** Position [x, y, z] */
  position?: [number, number, number];
  /** Rotation [x, y, z] in radians */
  rotation?: [number, number, number];
  /** Enable auto-rotation animation */
  autoRotate?: boolean;
  /** Animation speed for auto-rotate */
  rotateSpeed?: number;
  /** Enable floating/bobbing animation */
  floating?: boolean;
  /** Floating animation intensity */
  floatIntensity?: number;
}

export function ModelLoader({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  rotateSpeed = 0.5,
  floating = true,
  floatIntensity = 0.1,
}: ModelLoaderProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  // Clone scene to avoid mutating the original
  const clonedScene = scene.clone();

  useFrame((state) => {
    if (groupRef.current) {
      // Auto rotation
      if (autoRotate) {
        groupRef.current.rotation.y = state.clock.elapsedTime * rotateSpeed;
      }

      // Floating animation
      if (floating) {
        groupRef.current.position.y = 
          position[1] + Math.sin(state.clock.elapsedTime) * floatIntensity;
      }
    }
  });

  return (
    <primitive
      ref={groupRef}
      object={clonedScene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

// Preload function for better performance
export function preloadModel(modelPath: string) {
  useGLTF.preload(modelPath);
}

