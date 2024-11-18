"use client";
import { useScroll, useTexture } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { F22model } from "./F22";

export function Scene() {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();
  const { viewport } = useThree(); // Get the viewport dimensions

  const texture = useTexture('/oceanbg.jpg');
  // Update the 3D object’s position based on scroll position
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = Math.max(scroll.offset * -30, -16) + (Math.sin(state.clock.getElapsedTime() * 0.5) * 0.45);
      meshRef.current.position.y = -1.2 - Math.min(30, scroll.offset * 16);
      meshRef.current.position.x = 0 + Math.min(16, scroll.offset * 30);

      meshRef.current.position.y = -1.2 - scroll.offset * 16;


      meshRef.current.rotation.x = 0.5 - Math.min(6.2, scroll.offset * 14) + (Math.sin(0.2 + state.clock.getElapsedTime() * 0.35) * 0.15);
      meshRef.current.rotation.y = 0;

    }
  });

  return (
    <>
      {/* Background image plane */}
      <mesh position={[1, 0, -20]}>
        <planeGeometry args={[viewport.width * 6, viewport.height * 6.5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>

      {/* 3D Object */}
      <mesh ref={meshRef} position={[0.6, 0, 0]} rotation={[0.3, 0, 0]}>
        <F22model scale={0.45} />

      </mesh>
    </>
  );
}
