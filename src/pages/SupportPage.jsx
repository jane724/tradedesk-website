import Header from "../components/Header"
import Footer from "../components/Footer"
import AdminSupport from "../components/AdminSupport"
import CTA from "../components/CTA"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <AdminSupport />
      <CTA />
      <Footer />
    </main>
  )
}