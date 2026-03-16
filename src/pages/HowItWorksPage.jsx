import Header from "../components/Header"
import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"
import CTA from "../components/CTA"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}