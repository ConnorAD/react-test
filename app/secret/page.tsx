"use client";
import { Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { easing } from 'maath';
import { useCallback, useMemo, useState } from 'react';
import { SpotLight } from "three";
import { CrateModel } from './Crate';
import { F35model } from './F35';
import { ForkModel } from './Forklift';
import { Model } from './HangarMedRes';

function Plane(props: any) {

  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const ServicesTarget = document.getElementById('Services');

  return (

    <group>
      {/* Spotlight primitive */}
      <primitive
        object={spotlight}
        position={[0, 10, 0]}
        angle={hovered ? 0.6 : 0.4}
        intensity={hovered ? 1.5 : 0.3}
        penumbra={1}
        castShadow
        shadow-mapSize={120}
      />
      {/* Spotlight target positioned at mesh */}
      <primitive object={spotlight.target} position={[-6, 0, -3]} />

      {/* Mesh */}
      <mesh
        position={[-6, 1.65, -3]}
        onClick={() => ServicesTarget?.scrollIntoView({ behavior: "smooth" })}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <F35model scale={0.06} />
        <Html zIndexRange={[15, 0]} distanceFactor={10} pointerEvents='none'>
          <div className="content" style={{ pointerEvents: 'none' }}>
            Services
          </div>
        </Html>
      </mesh>
    </group>
  )
}

function Crate(props: any) {

  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const InventoryTarget = document.getElementById('Inventory');

  return (

    <group>
      {/* Spotlight primitive */}
      <primitive
        object={spotlight}
        position={[0, 10, 0]}
        angle={hovered ? 0.6 : 0.3}
        intensity={hovered ? 1.1 : 0.3}
        penumbra={1}
        castShadow
        shadow-mapSize={120}
      />
      {/* Spotlight target positioned at mesh */}
      <primitive object={spotlight.target} position={[2, 0, -8]} />

      {/* Mesh */}
      <mesh
        position={[2, 1, -8]}
        rotation={[0, 240, 0]}
        onClick={() => InventoryTarget?.scrollIntoView({ behavior: "smooth" })}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <CrateModel scale={0.5} />
        <Html zIndexRange={[15, 0]} center pointerEvents='none'>
          <div className="content" style={{ pointerEvents: 'none' }}>
            Inventory
          </div>
        </Html>
      </mesh>
    </group>
  )
}

function Fork(props: any) {

  // Hold state for hovered and clicked events.
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const PeopleTarget = document.getElementById('People');

  return (

    <group>
      {/* Spotlight primitive */}
      <primitive
        object={spotlight}
        position={[0, 10, 0]}
        angle={hovered ? 0.6 : 0.3}
        intensity={hovered ? 1.1 : 0.3}
        penumbra={1}
        castShadow
        shadow-mapSize={120}
      />
      {/* Spotlight target positioned at mesh */}
      <primitive object={spotlight.target} position={[3.5, 0, -1]} />

      {/* Mesh */}
      <mesh
        position={[3.5, 0.2, -1]}
        rotation={[0, 50, 0]}
        onClick={() => PeopleTarget?.scrollIntoView({ behavior: "smooth" })}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <ForkModel scale={0.007} />
        <Html zIndexRange={[15, 0]} center distanceFactor={10} pointerEvents='none'>
          <div className="content" style={{ pointerEvents: 'none' }}>
            People
          </div>
        </Html>
      </mesh>
    </group>
  )
}

function Box(props: any) {
  return (
    <mesh
      scale={0.5}

    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'lightgreen'} />
    </mesh>
  )
}



export default function Home() {
  const [ref, setRef] = useState<HTMLDivElement>();
  const refChanged = useCallback((node: HTMLDivElement) => {
    setRef(node);
  }, []);
  return (
    <main className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll no-scrollbar">
      <div className="flex justify-center">
        <div className="absolute z-10 text-center font-semibold py-6 "><h2 className={"mb-3 text-2xl"}>Aviation Company Logo And Name Here</h2></div>
        <div className="z-0 h-screen w-full snap-center" ref={refChanged}>
          <Canvas eventSource={ref} eventPrefix="client" style={{ width: '100vw', height: '100vh' }} shadows dpr={[1, 1.5]} camera={{ position: [-20.5, 1, 7.5], fov: 45, near: 1, far: 60 }} >
            <ambientLight intensity={0.4} />
            <pointLight intensity={0.25} position={[0, 8, 0]} />
            <Model />

            <Plane />
            <Crate />
            <Fork />
            <CameraRig />
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={3} />
              <DepthOfField target={[0, 0, 13]} focalLength={3} bokehScale={15} height={700} />
            </EffectComposer>

          </Canvas>
        </div>


        <div style={{ zIndex: '100' }} className="grid absolute bottom-0 lg:mb-0 lg:grid-cols-3 lg:text-center">
          <a
            href="https://github.com/ConnorAD/react-test"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About Us{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;&gt;&gt;
              </span>
            </h2>
          </a>

          <a
            href="../Connor%20Davis%20Resume%20CV.pdf"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact Us{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;&gt;&gt;
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
              Quote List{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;&gt;&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
      <div className="flex min-h-screen bg-slate-900 snap-start z-20 relative" id="Services">
        <div className="container w-screen">
          <img src='planebg.jpg' />

        </div>
        <div className="absolute h-[80vh] grid grid-cols-[2fr_1fr]">
          <div className="grid grid-cols-2 gap-6 p-8 h-full">
            {/* Cell 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center space-y-1 w-[30vw] h-[38vh]">
              <div className="flex items-center space-x-2">
                <img src="/iconPlane.png" alt="Icon" className="w-8 h-8" />
                <h2 className="text-lg font-semibold text-black">All Aircraft</h2>
              </div>
              <p className="text-gray-600"><b>S.O.I Aviation</b> as a global provider of quality aircraft spares is a leader in worldwide distribution. Our vast experience has led to quality approvals and strong business partnerships with over 150 airlines worldwide, nearly every major and regional air carrier as well as FBO’s, and distributor’s worldwide.
                <br /> <br />
                <strong>Our applications include:</strong>
                Military parts, aircraft engines and airframe, helicopters, shipboard parts, radar replacement parts, APC, truck and tank sonar, motors, computers, hardware, avionics, instruments, mechanical and electrical parts. </p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Learn More
              </a>
            </div>

            {/* Cell 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center space-y-1 w-[30vw] h-[38vh]">
              <div className="flex items-center space-x-2">
                <img src="/iconHeli.png" alt="Icon" className="w-8 h-8" />
                <h2 className="text-lg font-semibold text-black">Helicopters</h2>
              </div>
              <p className="text-gray-600">We know that our client’s requirements vary. S.O.I Aviation offers support for those in need of AOG parts and service, low-stock or critical inventory, or routine stock and ordering of parts. Regardless of your urgency, we can get you the parts you need when you need them most.
                <br /> <br />
                <strong>Our applications include:</strong>
                Colibri EC120, PUMA SA330, Super Puma SA332, Super Frelon SA321, Mi-8, Mi-17, Mi-171, Mi-24, Mi-25, Mi-26, Mi-35, UH-1 & UH-60.</p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Learn More
              </a>
            </div>

            {/* Cell 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center space-y-1 w-[30vw] h-[38vh]">
              <div className="flex items-center space-x-2">
                <img src="/iconRadar.png" alt="Icon" className="w-8 h-8" />
                <h2 className="text-lg font-semibold text-black">Radar</h2>
              </div>
              <p className="text-gray-600">The MTPS series Radar is the result of the Invap Radar Modernization Process (PMRI) on the Westinghouse TPS-43 Air Defense 3D Tactical Radar. This system update has achieved the proposed objectives. The basic PMRI includes updating all the electronic equipment contained in the operating shelter.
                <br /> <br />
                <strong>Our applications include:</strong>
                AN/TPS -43, AN/TPS -63, AN/TPS -70, AN/TPS -75, AN/TPS -137, AN/GRC -103, APQ-122, AJQ-124, AN/APG-65 , AN/APG -68, AN/APQ-109, AN/APQ -153, AN/APQ -157, AN/APQ-159, AN/AAQ -9, APN/169, ASD-5.</p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Learn More
              </a>
            </div>

            {/* Cell 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center space-y-1 w-[30vw] h-[38vh]">
              <div className="flex items-center space-x-2">
                <img src="/iconRadio.png" alt="Icon" className="w-8 h-8" />
                <h2 className="text-lg font-semibold text-black">Radio</h2>
              </div>
              <p className="text-gray-600">S.O.I Aviation supplies a variety of RF communications products including major components, accessories as well as complete radio sets, spare modules and subassemblies etc. We have a very limited quantity of these available including accessories all in reconditioned like new condition.
                <br /> <br />
                <strong>Our applications include:</strong>
                AN/TPS -43, AN/TPS -63, ARC159, ARC 182, ARC 164, ALL ROCKWELL COLLINS, BENDIX, MOTOROLA, ARRIS, MAGNABOX, HONEYWELL, MARCONI, ARC & ITT.</p>
              <a href="#" className="text-blue-500 font-medium hover:underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="flex items-top justify-center mt-6">
            <h1 className="text-9xl font-bold text-white">Services</h1>
          </div>

        </div>
      </div>

      <div className="flex min-h-screen bg-slate-800 snap-start z-20 relative" id="Inventory">
        Inventory etc etc lorem ipsum
      </div>

      <div className="flex min-h-screen bg-slate-700 snap-start z-20 relative" id="People">
        People etc etc lorem ipsum
      </div>


    </main>
  )
}

function CameraRig() {
  return (
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [1 + (((state.pointer.x) * -1) * state.viewport.width) / 4, (1.6 + state.pointer.y) / .4, 7], .5, delta)
      state.camera.lookAt(0, 1, -3)
    })
  )
}