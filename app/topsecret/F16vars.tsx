"use client";
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Tab from './tab';
import Tabs from './tabs.js';
function F16vars() {
    const elementRef = useRef<HTMLDivElement>(null);
    const scroll = useScroll();

    useFrame(() => {
        // Trigger animation based on scroll offset
        if (scroll.offset > 0.62) {
            elementRef.current?.classList.add('animate-slideUpUnblur');
        }
    });

    return (
        <section ref={elementRef} className="bg-center bg-no-repeat bg-cover bg-[url('/f16-91.jpg')] rounded-3xl opacity-0 w-[40vw] h-[40vh]">
            <div className="px-4 mx-auto w-[40vw] text-center ">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-4xl">F16 Parts</h1>


                <Tabs>
                    <Tab key="1" title="F-16A/B">
                        <strong className="font-bold text-xl">F-16A/B Parts</strong>
                        <p className="py-3">In stock: • Avionics, Instruments & Navigation Equipment
                            • Rotable Components
                            • QEC and Engine Accessories
                            • Actuation Systems
                            • Hydraulics
                            • Pneumatics
                            • Landing Gear, Wheels & Brake Systems
                            • Auxiliary Power Units (APU)
                            • Flight Control Surfaces
                            • Line replacement Units (LRU) </p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>
                    </Tab>
                    <Tab key="2" title="F-16C/D">
                        <strong className="font-bold text-xl">F-16C/D Parts</strong>
                        <p className="py-3">In stock: • Avionics, Instruments & Navigation Equipment
                            • Rotable Components
                            • QEC and Engine Accessories
                            • Actuation Systems
                            • Hydraulics
                            • Pneumatics
                            • Landing Gear, Wheels & Brake Systems
                            • Auxiliary Power Units (APU)
                            • Flight Control Surfaces
                            • Line replacement Units (LRU) 
                            • Consumables </p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>    </Tab>
                    <Tab key="3" title="F-16E/F">
                        <strong className="font-bold text-xl">F-16E/F Parts</strong>
                        <p className="py-3">In stock: • Avionics, Instruments & Navigation Equipment
                            • Rotable Components
                            • QEC and Engine Accessories
                            • Actuation Systems
                            • Hydraulics
                            • Pneumatics
                            • Landing Gear, Wheels & Brake Systems
                            • Auxiliary Power Units (APU)
                            • Flight Control Surfaces
                            • Line replacement Units (LRU) 
                            • Consumables 
                            • Spare Inflatable Pilot</p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>    </Tab>
                    <Tab key="4" title="F-16V">
                        <strong className="font-bold text-xl">F-16V Parts</strong>
                        <p>Coming Soon!</p>
                    </Tab>
                </Tabs>


            </div>
        </section>

    );
}

export default F16vars;