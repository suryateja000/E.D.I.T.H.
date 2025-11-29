"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const [activeZone,setActiveZone]=useState(1) //0=Left,1=Center,2=Right

  const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>)=>{
    const rect=e.currentTarget.getBoundingClientRect()
    const x=e.clientX-rect.left
    const width=rect.width
    if(x<width/3){
      setActiveZone(0) //Look Left
    }else if(x>(width*2)/3){
      setActiveZone(2) //Look Right
    }else{
      setActiveZone(1) //Look Center
    }
  }

  const getImageTransform=()=>{
    switch(activeZone){
      case 0: return "translate-x-0 rotate-y-2 scale-105" //Left Zone
      case 2: return "-translate-x-[28.5%] -rotate-y-2 scale-105" //Right Zone
      case 1:
      default: return "-translate-x-[14.25%] rotate-y-0 scale-100" //Centered
    }
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black perspective-1000">
      <div 
        className="relative w-full h-full" 
        onMouseMove={handleMouseMove}
        onMouseLeave={()=>setActiveZone(1)} //Reset to center when leaving
      >
        <div 
          className={`absolute top-0 left-0 h-full w-[140%] object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${getImageTransform()}`}
          style={{ transformStyle:'preserve-3d' }}
        >
          <img
            src="/Hero.png" 
            alt="EDITH Panoramic View"
            className="w-full h-full object-cover brightness-[0.85]" //dimmed slightly for text pop
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,164,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,164,239,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </div>

        <div className="absolute z-30 pointer-events-none top-24 right-4 max-w-[200px] md:top-38 md:right-10 md:max-w-sm lg:right-30 text-right">
          <div className="relative pl-4 pr-6 py-3 bg-slate-950/40 backdrop-blur-md rounded-r-lg shadow-2xl">
            <p className="text-[10px] md:text-xs lg:text-sm text-slate-200 font-mono tracking-widest uppercase leading-relaxed">
              See the future through Stark’s legacy
            </p>
            <p className="mt-1 text-xs md:text-sm lg:text-base font-bold text-white drop-shadow-[0_0_10px_rgba(0,164,239,0.5)]">
              — <span className="text-[#00A4EF]">EDITH</span> IS NOW YOURS.
            </p>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00A4EF] rounded-full shadow-[0_0_15px_#00A4EF] animate-pulse" />
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-between px-12 z-30 pointer-events-none">
          <div className={`transition-opacity duration-500 flex items-center gap-2 text-white/50 ${activeZone===0?'opacity-100 text-[#00A4EF]':'opacity-30'}`}>
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="flex gap-2">
            {[0,1,2].map((i)=>(
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${activeZone===i?'w-8 bg-[#00A4EF] shadow-[0_0_10px_#00A4EF]':'w-2 bg-white/20'}`} 
              />
            ))}
          </div>
          <div className={`transition-opacity duration-500 flex items-center gap-2 text-white/50 ${activeZone===2?'opacity-100 text-[#00A4EF]':'opacity-30'}`}>
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  )
}