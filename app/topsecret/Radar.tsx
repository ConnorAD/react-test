"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Radar() {
  const elementRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    // Trigger animation based on scroll offset
    if (scroll.offset > 0.72) {
      elementRef.current?.classList.add('animate-slideUpUnblur');
    }
  });

  return (
    <section ref={elementRef} className="bg-center bg-no-repeat bg-cover bg-[url('/radar.jpg')] rounded-3xl opacity-0 w-[40vw] h-[40vh] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto w-[40vw] text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl">Radar</h1>
        <p className="py-3">We can assist you with:
Configuration, control, diagnosis and operation of the radar are done through simple and intuitive graphical interfaces. This dramatically accelerates the staff learning curve, minimizing the time and costs of deploying and commissioning new units.

Flexible interfaces and standard Asterix data output provide seamless integration to multi-sensor command and control systems.
<br/>
Models:
• AN/TPS -43, AN/TPS -63
• AN/TPS -70, AN/TPS -75
• AN/TPS -137, AN/GRC -103
• APQ-122, AJQ-124, AN/APG-65
• AN/APG -68, AN/APQ-109
• AN/APQ -153
• AN/APQ -157, AN/APQ-159
• AN/AAQ -9, APN/169, ASD-5</p>
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Browse
                        </a>
      </div>
    </section>

  );
}

export default Radar;
