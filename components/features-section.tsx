"use client";

import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, X } from 'lucide-react';

type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  position: { top: string; left: string };
};

const stores: Store[] = [
  {
    id: 'ny',
    name: 'Stark Tower HQ',
    address: '890 Fifth Avenue, Manhattan, NY',
    phone: '+1 (212) 555-0199',
    hours: '10:00 AM - 8:00 PM',
    position: { top: '32%', left: '30%' },
  },
  {
    id: 'ldn',
    name: 'London Boutique',
    address: '108 Bond Street, London, UK',
    phone: '+44 20 7946 0958',
    hours: '09:00 AM - 7:00 PM',
    position: { top: '26%', left: '48%' },
  },
  {
    id: 'tok',
    name: 'Tokyo Innovation Lab',
    address: 'Minato City, Tokyo, Japan',
    phone: '+81 3 5550 2847',
    hours: '10:00 AM - 9:00 PM',
    position: { top: '43%', left: '90%' },
  },
  {
    id: 'syd',
    name: 'Sydney Flagship',
    address: 'George St, Sydney, Australia',
    phone: '+61 2 7010 3392',
    hours: '09:00 AM - 6:00 PM',
    position: { top: '83%', left: '83%' },
  },
  {
    id: 'dub',
    name: 'Marvel India',
    address: 'Visakhapatanam, India',
    phone: '+971 4 555 1234',
    hours: '10:00 AM - 10:00 PM',
    position: { top: '55%', left: '73%' },
  },
];

export function StoreLocations() {
  const [activeStore, setActiveStore] = useState<string | null>(null);

  // Toggle for mobile tap interaction
  const handlePinClick=(id:string)=>{
    setActiveStore(activeStore===id?null:id);
  };

  return (
    <section className="relative bg-white py-16 px-4 md:px-8 overflow-hidden font-sans">
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Global <span className="text-[#00A4EF]">Presence</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
          Visit our immersive experience centers worldwide. Stark technology is closer than you think.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
          <img 
            src="/map.png" 
            alt="World Map Locations" 
            className="w-full h-full object-cover" 
          />
        </div>

        {stores.map((store)=>(
          <div
            key={store.id}
            className={`absolute transition-all duration-300 ${activeStore===store.id?'z-50':'z-10'}`}
            style={{ top: store.position.top, left: store.position.left }}
            onMouseEnter={()=>setActiveStore(store.id)}
            onMouseLeave={()=>setActiveStore(null)}
            onClick={()=>handlePinClick(store.id)}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
              <div className={`absolute inset-0 rounded-full bg-[#00A4EF] animate-ping ${activeStore===store.id?'opacity-0':'opacity-40'}`} />
              <div className={`relative w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 ${activeStore===store.id?'bg-[#00A4EF] scale-125 shadow-[0_0_20px_rgba(0,164,239,0.5)]':'bg-[#00A4EF] hover:scale-125 shadow-[0_0_15px_rgba(0,164,239,0.3)]'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            <div 
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 md:w-72 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom ${activeStore===store.id?'opacity-100 scale-100 translate-y-0':'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-lg p-3 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative">
                <button 
                  onClick={(e)=>{e.stopPropagation();setActiveStore(null);}}
                  className="md:hidden absolute top-2 right-2 text-slate-400 hover:text-slate-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-r border-b border-slate-200 transform rotate-45" />

                <div className="space-y-2 md:space-y-3 text-left">
                  <div className="flex items-start justify-between pr-4">
                    <h3 className="text-slate-900 font-bold text-sm md:text-lg leading-tight">{store.name}</h3>
                    <MapPin className="hidden md:block w-5 h-5 text-[#00A4EF]" />
                  </div>
                  
                  <div className="space-y-1.5 md:space-y-2 text-[10px] md:text-sm text-slate-500">
                    <div className="flex items-start gap-2">
                      <Navigation className="w-3 h-3 md:w-3.5 md:h-3.5 mt-0.5 text-slate-400 shrink-0" />
                      <p className="leading-snug">{store.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-400 shrink-0" />
                      <p>{store.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-400 shrink-0" />
                      <p className="text-[#00A4EF] font-medium">{store.hours}</p>
                    </div>
                  </div>

                  <button className="w-full mt-1 py-1.5 md:py-2 text-[9px] md:text-xs font-bold uppercase tracking-wider text-white bg-[#00A4EF] hover:bg-[#008ac9] rounded transition-colors shadow-lg shadow-[#00A4EF]/20">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}