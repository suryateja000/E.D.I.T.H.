"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/60 to-transparent pt-4 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-[#00A4EF] shadow-[0_0_10px_#00A4EF] animate-pulse" />
            <span className="text-white font-bold text-xl tracking-wider uppercase font-sans drop-shadow-lg">
              Stark <span className="text-[#00A4EF] mx-0.5">|</span> E.D.I.T.H.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-[#00A4EF] hover:bg-[#007cc0] text-white font-bold px-8 py-2 rounded-full shadow-[0_0_20px_rgba(0,164,239,0.4)] hover:shadow-[0_0_30px_rgba(0,164,239,0.6)] transition-all duration-300 border border-white/20 backdrop-blur-sm">
              Claim the Future
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}