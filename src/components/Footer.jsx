import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-white text-xl font-semibold mb-3">TradeDesk</h3>

            <p className="text-sm leading-relaxed text-slate-400">
              TradeDesk helps trade businesses manage quotes, jobs, scheduling,
              paperwork and invoicing in one connected platform — with optional
              admin support to help handle the day-to-day back-office work.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Platform</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/features" className="hover:text-white transition">
                Features
              </Link>

              <Link to="/how-it-works" className="hover:text-white transition">
                How it works
              </Link>

              <Link to="/support" className="hover:text-white transition">
                Admin support
              </Link>

              <Link to="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Company</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Legal</h4>

            <div className="flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>

              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>

              <Link to="/cookies" className="hover:text-white transition">
                Cookies Policy
              </Link>
            </div>

            <p className="text-sm text-slate-400 mt-4">
              Email{" "}
              <a
                href="mailto:admin@tradedesksupport.co.uk"
                className="text-sky-400 hover:underline"
              >
                admin@tradedesksupport.co.uk
              </a>
            </p>

            <p className="text-sm text-slate-400 mt-1">
              United Kingdom
            </p>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} TradeDesk. All rights reserved.</p>

          <p>
            Built for trade businesses, starting with plumbing and heating.
          </p>
        </div>

      </div>
    </footer>
  )
}