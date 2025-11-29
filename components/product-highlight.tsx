"use client";

import React from 'react';
import { Quote, Sparkles, ChevronRight } from 'lucide-react';

export function LatestRelease() {
  return (
    <section className="bg-white py-12 px-0 md:px-6 overflow-hidden">
      <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Latest Drop</h2>
        <p className="text-sm md:text-lg text-slate-400 max-w-2xl mx-auto">
          Stark-Level Intelligence in Styles
        </p>
        <div className="md:hidden flex items-center justify-center gap-1 text-[#00A4EF] text-xs font-medium animate-pulse mt-2">
          <span>Swipe to Explore</span>
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 max-w-5xl mx-auto items-start pb-8 md:pb-0 px-4 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth:'none',msOverflowStyle:'none' }}>
        <div className="min-w-[85vw] md:min-w-0 flex flex-col gap-4 snap-center">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/3.png" alt="Hinge Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
          <div className="bg-slate-950 rounded-lg p-6 flex flex-col justify-center items-start shadow-md min-h-[160px]">
            <Quote className="w-8 h-8 text-[#00A4EF] mb-3 opacity-50" />
     <h3 className="text-white text-2xl font-bold leading-tight font-serif italic">
              Even Dead,<br /> I’m The Hero.
            </h3>
            <p className="text-[#00A4EF] text-xm font-mono mt-5 tracking-widest uppercase opacity-80">
              — E.D.I.T.H. Protocol
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/7.png" alt="Rim Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
        </div>

        <div className="min-w-[85vw] md:min-w-0 flex flex-col gap-4 snap-center">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/1.png" alt="Front View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
          <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/5.png" alt="Side Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
        </div>

        <div className="min-w-[85vw] md:min-w-0 flex flex-col gap-4 snap-center">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/2.png" alt="Bridge Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
            <img src="/4.png" alt="Table View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between shadow-sm min-h-[140px] group hover:border-[#00A4EF]/50 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#00A4EF]" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Gen</span>
              </div>
              <p className="text-slate-800 font-medium leading-relaxed">
                Experience Stark-Level Vision.<br />
                <span className="text-[#00A4EF]">Powered by Design.</span>
              </p>
            </div>
                   <div className="mt-4 h-1 w-12 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-[#00A4EF] transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}