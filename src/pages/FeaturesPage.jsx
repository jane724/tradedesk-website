import Header from "../components/Header"
import Footer from "../components/Footer"
import Features from "../components/Features"
import CTA from "../components/CTA"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}