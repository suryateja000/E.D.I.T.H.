import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StoreLocations } from "@/components/features-section"
import { LatestRelease } from "@/components/product-highlight"
import { EdithSimulation } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <HeroSection />
      <LatestRelease />
      <EdithSimulation />
      <StoreLocations />
      <Footer />
    </main>
  )
}