import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"
import CTA from "../components/CTA"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}