"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Radio() {
  const elementRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    // Trigger animation based on scroll offset
    if (scroll.offset > 0.8) {
      elementRef.current?.classList.add('animate-slideUpUnblur');
    }
  });

  return (
    <section ref={elementRef} className="bg-center bg-no-repeat bg-cover bg-[url('/radio.jpg')] rounded-3xl opacity-0 w-[40vw] h-[40vh] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto w-[40vw] text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl">Radio</h1>
        <p className="py-3">S.O.I Aviation supplies a variety of RF Communications products including major components, accessories as well as complete radio sets, spare modules and subassemblies etc.
          <br/>
          The AN/GRC-213 is the vehicular version of the AN/PRC-104 Radio Set which is mounted on the AM-7152/GRC-213 Audio Amplifier-Power conditioner that operates from 24VDC.
<br/>
Models:
• AN/TPS -43, AN/TPS -63
• ARC & ITT
• ARC159, ARC 182
• ARC 164
• ALL ROCKWELL COLLINS
• BENDIX
• MOTOROLA
• HARRIS
• MAGNABOX
• HONEYWELL
• Mi-35
• MARCONI

        </p>
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>
      </div>
    </section>

  );
}

export default Radio;
