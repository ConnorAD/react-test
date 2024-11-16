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

export default function ThreeDPage() {
  return (
    <div className="h-screen w-screen">
      <div className="rounded-3xl bg-neutral-800/50 absolute z-20 w-[25vw] h-fit">
        <div className="w-full py-2">
          <img src='/logo.png' />
        </div>
<div className="inline-flex rounded-3xl shadow-sm w-full" role="group">
  <button type="button" className="grow px-4 py-3 text-sm font-medium rounded-s-3xl focus:z-10 focus:ring-2  text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
    Services
  </button>
  <button type="button" className="grow px-4 py-3 text-sm font-medium focus:z-10 focus:ring-2  text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
    Inventory
  </button>
  <button type="button" className="grow px-4 py-3 text-sm font-medium rounded-e-3xl focus:z-10 focus:ring-2  text-white hover:text-white hover:bg-gray-700 focus:ring-blue-500 focus:text-white">
    Contact
  </button>
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
            <div className="absolute h-[200vh] w-[100vw] bg-gradient-to-b from-transparent to-slate-900 z-11">
              
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

            <section className="bg-right bg-no-repeat bg-cover bg-[url('/8yxzrz.png')] bg-gray-700 bg-blend-multiply rounded-3xl">
    <div className="px-4 mx-auto max-w-[85vw] text-center py lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Us</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">We specialize in finding innovative solutions to the most complex challenges in the aviation spare parts industry. With years of experience and a dedication to excellence, we are committed to delivering results that exceed your expectations. Whether you need help with sourcing, research, or any other aspect of the spare parts in the aviation industry, we have the knowledge and expertise to help you succeed. We can help you find solutions to your aviation spare parts issues.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>


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
</div>
<div className="absolute top-[200vh] h-[300vh] w-[100vw] bg-slate-900 z-[-1]">
  </div>
          </Scroll>
          
          
        </ScrollControls>

      </Canvas>

    </div>

  );
}
