"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Scan, Shield, Zap, Target, Wifi, Activity } from 'lucide-react';

export function EdithSimulation() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchend', stopDrag);
    } else {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    }
    return () => {
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging]);

  return (
    <section className="bg-white py-16 md:py-24 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Vision Mode: <span className="text-[#00A4EF]">EDITH Active</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto px-4">
            Drag the slider to activate the E.D.I.T.H. protocol and reveal the hidden data layer overlaid on reality.
          </p>
        </div>

        {/* --- COMPARISON SLIDER CONTAINER --- */}
        <div 
          ref={containerRef}

          style={{ touchAction: 'none' }} 
          className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-slate-900 cursor-ew-resize group bg-slate-200"
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          
          {/* === LAYER 1: STANDARD REALITY (Background) === */}
          <div className="absolute inset-0 w-full h-full bg-slate-200">
             {/* Replace with your image */}
            <img 
              src="/city-street.jpg" 
              alt="Standard View" 
              className="w-full h-full object-cover grayscale-[50%] blur-[1px]" 
            />
            {/* Label */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded text-white font-mono text-[10px] md:text-sm tracking-wider">
              STANDARD OPTICS
            </div>
          </div>

          {/* === LAYER 2: EDITH MODE (Foreground - Clipped) === */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-[#00A4EF]"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* The same image, but crisp and colorful */}
            <img 
              src="/city-street.jpg" 
              alt="EDITH View" 
              className="absolute inset-0 w-full h-full object-cover max-w-none" 
              style={{ width: '100%', height: '100%' }}
            />

            {/* --- HUD OVERLAYS (Only visible in this layer) --- */}
            <div className="absolute inset-0 bg-[#00A4EF]/10" /> 
            {/* Grid Pattern: Smaller on mobile (20px), larger on desktop (40px) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,164,239,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,164,239,0.1)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />

            {/* Label */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-[#00A4EF]/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded text-white font-mono text-[10px] md:text-sm font-bold shadow-[0_0_15px_#00A4EF]">
              E.D.I.T.H. ACTIVE
            </div>

            {/* HUD Element: Target Lock */}
            {/* Responsive positioning and sizing */}
            <div className="absolute top-[30%] left-[35%] md:left-[40%] text-[#00A4EF] animate-pulse">
               <div className="border border-[#00A4EF] w-20 h-20 md:w-32 md:h-32 rounded-lg flex items-center justify-center relative">
                  {/* Corners */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00A4EF]" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00A4EF]" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#00A4EF]" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#00A4EF]" />
                  
                  <Target className="w-5 h-5 md:w-8 md:h-8 opacity-50" />
                  <span className="absolute -bottom-5 md:-bottom-6 text-[8px] md:text-[10px] font-mono bg-black/70 px-1 text-[#00A4EF] whitespace-nowrap">TARGET ACQUIRED</span>
               </div>
            </div>

            {/* HUD Element: Face ID */}
            <div className="absolute bottom-[20%] right-[10%] md:right-[20%] text-emerald-400">
               <div className="border border-emerald-400/50 w-16 h-16 md:w-24 md:h-24 rounded flex flex-col items-center justify-end pb-1 md:pb-2 relative bg-emerald-500/10 backdrop-blur-sm">
                  <Scan className="w-4 h-4 md:w-6 md:h-6 mb-1 animate-spin-slow" />
                  <span className="text-[8px] md:text-[10px] font-mono">MATCH: 99%</span>
               </div>
               <div className="h-[1px] w-8 md:w-12 bg-emerald-400 absolute top-1/2 -left-4 md:-left-6 rotate-12" />
               <span className="absolute top-1/2 -left-20 md:-left-24 text-[8px] md:text-[9px] font-mono bg-black/60 px-1 whitespace-nowrap">IDENTITY VERIFIED</span>
            </div>

            {/* HUD Element: System Stats */}
            <div className="absolute top-16 left-4 md:top-20 md:left-6 space-y-1 md:space-y-2">
                <div className="flex items-center gap-2 text-[#00A4EF]">
                    <Wifi className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-[8px] md:text-[10px] font-mono">UPLINK: SECURE</span>
                </div>
                <div className="flex items-center gap-2 text-[#00A4EF]">
                    <Zap className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-[8px] md:text-[10px] font-mono">BATTERY: 98%</span>
                </div>
            </div>

            {/* HUD Element: Alert */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 md:gap-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#00A4EF]" />
                <div className="text-[#00A4EF] font-mono text-[10px] md:text-xs">
                    <p>ARMOR PROTOCOL</p>
                    <div className="w-16 md:w-24 h-1 bg-[#00A4EF]/30 mt-1 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00A4EF] w-[80%]" />
                    </div>
                </div>
            </div>

          </div>

          {/* === THE SLIDER HANDLE === */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#00A4EF] cursor-ew-resize hover:shadow-[0_0_20px_#00A4EF] transition-shadow z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#00A4EF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,164,239,0.5)] border-2 md:border-4 border-white">
                <div className="flex gap-0.5">
                    <div className="w-0.5 h-2 md:h-3 bg-white/80" />
                    <div className="w-0.5 h-2 md:h-3 bg-white/80" />
                </div>
            </div>
          </div>

        </div>

        {/* Footer Hint */}
        <div className="mt-6 flex justify-center text-slate-400 text-xs md:text-sm font-medium animate-pulse">
            <p> &larr; Drag Slider to Scan &rarr; </p>
        </div>

      </div>
    </section>
  );
}