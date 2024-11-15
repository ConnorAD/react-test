"use client";
import { Scroll, ScrollControls, useScroll, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { F22model } from './F22';
import { Mesh } from 'three';




function Scene() {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();
  const { viewport } = useThree();  // Get the viewport dimensions

  const texture = useTexture('/oceanbg.jpg');
  // Update the 3D object’s position based on scroll position
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = Math.max(scroll.offset * -30, -16) + (Math.sin(state.clock.getElapsedTime()*0.5) * 0.45);
      //meshRef.current.position.y = Math.min(1.2, Math.max(-1.2, -1.2 + scroll.offset * 2));
      meshRef.current.position.y = -1.2 - Math.min(30, scroll.offset * 16);
      meshRef.current.position.x = 0 + Math.min(16, scroll.offset * 30);

      meshRef.current.position.y = -1.2 - scroll.offset * 16;


      meshRef.current.rotation.x = 0.5 - Math.min(6.2, scroll.offset*16) + (Math.sin(0.2+state.clock.getElapsedTime()*0.35) * 0.15);
      meshRef.current.rotation.y = 0 ;

    }
  });

  return (
    <>
      {/* Background image plane */}
      <mesh position={[1, 0, -20]}>
        <planeGeometry args={[viewport.width * 10, viewport.height * 10]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>

      {/* 3D Object */}
      <mesh ref={meshRef} position={[0.6, 0, 0]} rotation={[0.3, 0, 0]}>
        <F22model scale={0.45} />

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
        <ambientLight intensity={0.2} />
        <pointLight position={[1, 10, -3]} intensity={2} distance={200}/>
        {/* Enables smooth scrolling behavior */}
        <ScrollControls pages={3} distance={1}>
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
            <div className="absolute top-[120vh] w-screen flex justify-center items-center h-fit z-99">
  <div className="bg-white rounded-3xl p-6 h-fit w-[80vw] flex flex-col justify-center items-center">
    <h2 className="text-5xl font-bold text-soiRed mb-6">ABOUT US</h2>
    <p className="text-soiGreyText text-[1.3em] text-justify font-medium">
    We specialize in finding innovative solutions to the most complex challenges in the aviation spare parts industry. With years of experience and a dedication to excellence, we are committed to delivering results that exceed your expectations. Whether you need help with sourcing, research, or any other aspect of the spare parts in the aviation industry, we have the knowledge and expertise to help you succeed. We can help you find solutions to your aviation spare parts issues.
    </p>
  </div>
</div>

            <div className="absolute top-[220vh] w-screen py-10 items-center">

            <div className="flex flex-col items-center w-full py-10 bg-neutral-800/20">
  <h2 className="text-5xl font-semibold text-white mb-6">Our Clients</h2>
  
  <div className="relative overflow-hidden w-full">
    <div className="flex gap-6 animate-slide">
      {/* Replace these divs with images/logos of clients */}
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client A</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client B</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client C</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client D</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client E</div>
      {/* Duplicate the items to create a continuous scroll */}
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client A</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client B</div>
      <div className="w-32 h-16 flex items-center justify-center bg-neutral-700 rounded-md text-white">Client C</div>
    </div>
    </div>
  </div>
</div>
          </Scroll>
          
          
        </ScrollControls>

      </Canvas>

    </div>

  );
}
