"use client";
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Model } from './Old_computers'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'



function Box (props) {
  // This reference gives us direct access to the THREE.Mesh object.
  const ref = useRef()

  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop and rotate the mesh every frame.
  useFrame((state,delta) => (ref.current.rotation.x += delta))

  // Return the view.
  // These are regular three.js elements expressed in JSX.
  return (
    <mesh      
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    > 
      <boxGeometry args={[1, 1, 1]} />      
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange' } />    
    </mesh>
  )
}


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
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
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
       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 4, (2 + state.pointer.y) / .4, 7.5], .5, delta)
      state.camera.lookAt(0, 2, 0)
    })
  }
    //<main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-24">
//
//
    //  <div className="flex min-width-screen min-height-screen">
    //  <Canvas>
    //  <color attach="background" args={['#fff']} />
    //  <ambientLight intensity={0.5} />      
    //  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />      
    //  <pointLight position={[-10, -10, -10]} />      
    //  <Box position={[-1.2, 0, 0]} />     
    //  <Box position={[1.2, 0, 0]} />    
    //</Canvas>
    //  </div>
//
    //  <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //    <a
    //      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      <h2 className={`mb-3 text-2xl font-semibold`}>
    //        Docs{' '}
    //        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //          -&gt;
    //        </span>
    //      </h2>
    //      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //        Find in-depth information about Next.js features and API.
    //      </p>
    //    </a>
//
    //    <a
    //      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      <h2 className={`mb-3 text-2xl font-semibold`}>
    //        Learn{' '}
    //        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //          -&gt;
    //        </span>
    //      </h2>
    //      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //        Learn about Next.js in an interactive course with&nbsp;quizzes!
    //      </p>
    //    </a>
//
    //    <a
    //      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      <h2 className={`mb-3 text-2xl font-semibold`}>
    //        Templates{' '}
    //        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //          -&gt;
    //        </span>
    //      </h2>
    //      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //        Explore the Next.js 13 playground.
    //      </p>
    //    </a>
//
    //    <a
    //      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      <h2 className={`mb-3 text-2xl font-semibold`}>
    //        Deploy{' '}
    //        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //          -&gt;
    //        </span>
    //      </h2>
    //      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //        Instantly deploy your Next.js site to a shareable URL with Vercel.
    //      </p>
    //    </a>
    //  </div>
    //</main>
  
