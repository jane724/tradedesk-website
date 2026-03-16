import Header from "../components/Header"
import Footer from "../components/Footer"
import Pricing from "../components/Pricing"
import CTA from "../components/CTA"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}