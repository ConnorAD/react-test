"use client";
import { Scroll, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { F22model } from './F22';




function Scene() {
  const meshRef = useRef();
  const scroll = useScroll();
  const { viewport } = useThree();  // Get the viewport dimensions

  const texture = useTexture('/oceanbg.jpg');
  // Update the 3D object’s position based on scroll position
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.z = scroll.offset * -20;
      meshRef.current.position.y = scroll.offset * 20;

      meshRef.current.rotation.x = 0.3 - scroll.offset * 0.4;
      meshRef.current.rotation.y = 0 - scroll.offset * 0.3;

    }
  });

  return (
    <>
      {/* Background image plane */}
      <mesh position={[0, 0, -20]}>
        <planeGeometry args={[viewport.width * 6, viewport.height * 6]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>

      {/* 3D Object */}
      <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0.3, 0, 0]}>
        <F22model scale={0.35} />

      </mesh>
    </>
  );
}

export default function ThreeDPage() {
  return (
    <div className="h-screen w-screen">
      <div className="rounded-3xl bg-neutral-800/50 absolute z-20 w-[25vw] h-fit">
        <div className="w-full py-2">
          <img src='/logo.png' />
        </div>
        <div className="grid bottom-0 lg:mb-0 lg:grid-cols-1 lg:text-center">
          <a
            href="https://github.com/ConnorAD/react-test"
            className="group rounded-3xl border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About Us{' '}
            </h2>
          </a>

          <a
            href="../Connor%20Davis%20Resume%20CV.pdf"
            className="group rounded-3xl border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact Us{' '}
            </h2>
          </a>

          <a
            href="mailto:connor.davis44@gmail.com"
            className="group rounded-3xl border border-transparent px-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Quote List{' '}
            </h2>
          </a>
        </div>

      </div>

      <Canvas>
        <ambientLight intensity={1} />
        <pointLight position={[1, 5, -3]} intensity={3} />
        {/* Enables smooth scrolling behavior */}
        <ScrollControls pages={2} distance={1}>
          <Scroll>
            <Scene />
          </Scroll>

          {/* Page content beneath the canvas */}
          <Scroll html>
            <div className="absolute left-[50vw] transform -translate-x-1/2 top-[90vh] rounded-3xl p-5 bg-neutral-800/20 flex flex-col justify-center items-center">
              <div className="text-center w-[20vw] text-xl font-semibold text-white">
                Scroll to learn about us!
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="text-2xl text-white animate-bounce delay-500">▼</span>
                <span className="text-2xl text-white animate-bounce delay-500">▼</span>
                <span className="text-2xl text-white animate-bounce delay-500">▼</span>
              </div>
            </div>
            <div className="absolute top-[120vh] w-screen h-[85vh] bg-white z-99">
              <img src='/soiPage.png' height={'100%'} width={'100%'} />
            </div>
          </Scroll>
        </ScrollControls>

      </Canvas>

    </div>

  );
}
