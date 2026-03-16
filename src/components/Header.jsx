import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  const navItems = [
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/how-it-works" },
    { label: "Support", to: "/support" },
    { label: "Pricing", to: "/pricing" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ]

  function handleNavClick() {
    setMenuOpen(false)
  }

  function scrollToId(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <div className="border-b border-cyan-200 bg-cyan-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">
              Coming soon
            </span>
            <span>
              TradeDesk is currently in pre-launch. Register your interest for early access.
            </span>
          </div>

          {isHomePage ? (
            <button
              type="button"
              onClick={() => scrollToId("register")}
              className="inline-flex w-fit items-center font-semibold text-cyan-800 transition hover:text-cyan-950"
            >
              Join the early access list
              <span className="ml-2">→</span>
            </button>
          ) : (
            <Link
              to="/#register"
              onClick={handleNavClick}
              className="inline-flex w-fit items-center font-semibold text-cyan-800 transition hover:text-cyan-950"
            >
              Join the early access list
              <span className="ml-2">→</span>
            </Link>
          )}
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          {isHomePage ? (
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="flex items-center gap-4 text-left"
            >
              <img
                src="/tradedesk-logo.png"
                alt="TradeDesk Support"
                className="h-20 w-auto shrink-0 object-contain"
              />
            </button>
          ) : (
            <Link to="/" className="flex items-center gap-4">
              <img
                src="/tradedesk-logo.png"
                alt="TradeDesk Support"
                className="h-20 w-auto shrink-0 object-contain"
              />
            </Link>
          )}

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-medium transition hover:text-slate-900 ${
                  location.pathname === item.to
                    ? "text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {isHomePage ? (
              <button
                type="button"
                onClick={() => scrollToId("register")}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Register interest
              </button>
            ) : (
              <Link
                to="/#register"
                onClick={handleNavClick}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Register interest
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 md:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-900 transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-6xl px-6 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={handleNavClick}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-slate-50 hover:text-slate-900 ${
                      location.pathname === item.to
                        ? "bg-slate-50 text-slate-900"
                        : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
                {isHomePage ? (
                  <button
                    type="button"
                    onClick={() => scrollToId("register")}
                    className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Register interest
                  </button>
                ) : (
                  <Link
                    to="/#register"
                    onClick={handleNavClick}
                    className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
                  >
                    Register interest
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}