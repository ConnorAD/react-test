"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Model } from './Old_computers';
import { Floor } from './floor';


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen justify-center">
      <div className="absolute z-10 text-center font-semibold"><h2 className={"mb-3 text-2xl"}>connordavis.xyz</h2><h3>Under Construction</h3></div>
      <div className="z-0">
        <Canvas style={{width: '100vw', height: '100vh'}}shadows dpr={[1, 1.5]}camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}>
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />      
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
      <pointLight position={[-10, -10, -10]} />      
      <Model />  
      <Floor />
      <CameraRig />
      </Canvas>
      </div>
      
   <div className="grid absolute bottom-0 lg:mb-0 lg:grid-cols-4 lg:text-left">
     <a
       href="https://github.com/ConnorAD/react-test"
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       target="_blank"
       rel="noopener noreferrer"
     >
       <h2 className={`mb-3 text-2xl font-semibold`}>
         Source{' '}
         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           -&gt;
         </span>
       </h2>
     </a>
 
     <a
       href="https://github.com/ConnorAD/react-test/blob/master/credits.md"
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       target="_blank"
       rel="noopener noreferrer"
     >
       <h2 className={`mb-3 text-2xl font-semibold`}>
         Credits{' '}
         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           -&gt;
         </span>
       </h2>
     </a>
 
     <a
       href="https://docs.google.com/document/d/1R4iUOIxNBK9nt-yuKZHVtedDszn_yuT3t9heL1kwuso/edit?usp=sharing"
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       target="_blank"
       rel="noopener noreferrer"
     >
       <h2 className={`mb-3 text-2xl font-semibold`}>
         Resume / CV{' '}
         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           -&gt;
         </span>
       </h2>
     </a>
 
     <a
       href="mailto:connor.davis44@gmail.com"
       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       target="_blank"
       rel="noopener noreferrer"
     >
       <h2 className={`mb-3 text-2xl font-semibold`}>
         Contact{' '}
         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
           -&gt;
         </span>
       </h2>
     </a>
   </div>
    </main>
    )
  }
  
  function CameraRig() {
    return(
          useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 4, (2 + state.pointer.y) / .4, 7.5], .5, delta)
      state.camera.lookAt(0, 2, 0)
    })
    )
  }