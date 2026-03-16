import { useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Problem from "../components/Problem"
import ProductPreview from "../components/ProductPreview"
import BuiltForTrade from "../components/BuiltForTrade"
import FAQ from "../components/FAQ"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  useEffect(() => {
    document.title =
      "TradeDesk – Job Management Software for Trade Businesses"
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Problem />
      <ProductPreview />
      <BuiltForTrade />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}