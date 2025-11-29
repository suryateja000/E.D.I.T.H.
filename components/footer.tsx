import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-xl">
                STARK <span className="text-[#00A4EF]">|</span> E.D.I.T.H.
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Next-generation tactical intelligence systems for tomorrow's heroes.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-slate-400 hover:text-[#00A4EF] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00A4EF] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-[#00A4EF] transition-colors text-sm">
                Export Compliance
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <p>Stark Industries Headquarters</p>
              <p>200 Park Avenue, New York, NY</p>
              <p className="text-[#00A4EF]">edith@starkindustries.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">© 2025 Stark Industries. All rights reserved.</p>

        </div>
      </div>
    </footer>
  )
}
