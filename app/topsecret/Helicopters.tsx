"use client";
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import Tab from './tab';
import Tabs from './tabs.js';
function Helicopters() {
    const elementRef = useRef<HTMLDivElement>(null);
    const scroll = useScroll();

    useFrame(() => {
        // Trigger animation based on scroll offset
        if (scroll.offset > 0.7) {
            elementRef.current?.classList.add('animate-slideUpUnblur');
        }
    });

    return (
        <section ref={elementRef} className="bg-no-repeat bg-cover bg-[url('/heli.jpg')] rounded-3xl opacity-0 w-[40vw] h-[40vh]">
            <div className="px-4 mx-auto w-[40vw] text-center ">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-4xl">Helicopter Parts</h1>


                <Tabs>
                    <Tab key="1" title="Bell Agusta">
                        <strong className="font-bold text-xl">Bell Agusta – AB109, AB139, AB206, AB 412</strong>
                        <p className="py-3">In stock: 
• Airframe Components
• Accessories
• Avionics
• Consumables
• Dynamic Components
• Electronics
• Engine Components
• Expendables
• Ground Support Equipment
• Hardware
• Hydraulic Systems
• Instruments
• Landing Gear
• Rotables
• Survival Equipment
• Testing Equipment
• Tooling
• Wheels and Brakes
</p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>
                    </Tab>
                    <Tab key="2" title="Boeing">
                        <strong className="font-bold text-xl">Boeing – AH-64 Apache, CH-47 Chinook</strong>
                        <p className="py-3">In stock: 
• Airframe Components
• Accessories
• Avionics
• Consumables
• Dynamic Components
• Electronics
• Engine Components
• Expendables
• Ground Support Equipment
• Hardware
• Hydraulic Systems
• Instruments
• Landing Gear
• Rotables
• Survival Equipment
• Testing Equipment
• Tooling
• Wheels and Brakes
• This is just a little example of how you could separate / categorize information using tabs!
</p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>    </Tab>
                    <Tab key="3" title="Black Hawk">
                        <strong className="font-bold text-xl">UH-1 & UH-60 Black Hawk</strong>
                        <p className="py-3">In stock: 
• Airframe Components
• Accessories
• Avionics
• Consumables
• Dynamic Components
• Electronics
• Engine Components
• Expendables
• Ground Support Equipment
• Hardware
• Hydraulic Systems
• Instruments
• Landing Gear
• Rotables
• Survival Equipment
• Testing Equipment
• Tooling
• Wheels and Brakes
• Hello, Im in the third helicopter tab.
</p>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>    </Tab>

                </Tabs>


            </div>
        </section>

    );
}

export default Helicopters;