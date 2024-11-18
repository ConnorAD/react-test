"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function ServicesHero() {
  const elementRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll();

  useFrame(() => {
    // Trigger animation based on scroll offset
    if (scroll.offset > 0.45) {
      elementRef.current?.classList.add('animate-slideUpUnblur');
    }
  });

  return (
    <section ref={elementRef} className="bg-center bg-no-repeat bg-cover bg-[url('/warehouse.jpg')] rounded-3xl opacity-0">
      <div className="px-4 mx-auto max-w-[85vw] text-center py lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">All Aircraft Parts</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Our values and beliefs are integrated into our quality management system and communicated to all personal through our training program, which covers, individual contribution to product conformity, the quality policy, relevant objectives and how each employee contributes effective controls that prevent nonconformances.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900">
            Inventory
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Contact
          </a>
        </div>
      </div>
    </section>

  );
}

export default ServicesHero;
