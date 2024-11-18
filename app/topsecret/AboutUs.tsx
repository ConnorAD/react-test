"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function AboutUs() {
  const elementRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    // Trigger animation based on scroll offset
    if (scroll.offset > 0.1) {
      elementRef.current?.classList.add('animate-slideUpUnblur');
    }
  });

  return (
    <section ref={elementRef} className="bg-right bg-no-repeat bg-cover bg-[url('/starfighter_rszd.png')] rounded-3xl opacity-0">
      <div className="px-4 mx-auto max-w-[85vw] text-center py lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Us</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">We specialize in finding innovative solutions to the most complex challenges in the aviation spare parts industry. With years of experience and a dedication to excellence, we are committed to delivering results that exceed your expectations. Whether you need help with sourcing, research, or any other aspect of the spare parts in the aviation industry, we have the knowledge and expertise to help you succeed. We can help you find solutions to your aviation spare parts issues.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

          <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </a>
        </div>
      </div>
    </section>

  );
}

export default AboutUs;