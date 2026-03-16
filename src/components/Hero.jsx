import { Link } from "react-router-dom"

export default function Hero() {
  function scrollToId(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-cyan-100 via-slate-50 to-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div className="min-w-0">
          <div className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-1.5 text-sm font-medium text-cyan-900 shadow-sm">
            Launching soon for UK trade businesses
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-6xl">
            Software and support built to help trade businesses run better
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TradeDesk helps you manage quotes, jobs, scheduling, paperwork and
            invoices in one place — with software built for trades and optional
            admin support to help the business side run more smoothly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToId("register")}
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
            >
              Register your interest
            </button>

            <Link
              to="/features"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              Explore features
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                TradeDesk software
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Quotes, jobs, scheduling, records and invoicing in one connected platform.
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Optional admin support
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Extra help with call handling, diary admin, paperwork, follow-ups and back-office tasks.
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-1 text-sm text-slate-500">
            <p>TradeDesk is launching soon — join the early access list.</p>
            <p>Built for trades, starting with plumbing and heating businesses.</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/30">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3 text-xs text-slate-400">
                <span>TradeDesk overview</span>
                <span>Software + support</span>
              </div>

              <div className="grid gap-4 p-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="min-w-0 rounded-3xl bg-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Dashboard
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        Today’s workload
                      </h3>
                    </div>

                    <div className="shrink-0 rounded-2xl bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-200">
                      12 active jobs
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      ["Quotes", "18"],
                      ["Jobs", "12"],
                      ["Invoices", "6"],
                    ].map(([label, value]) => (
                      <div key={label} className="min-w-0 rounded-2xl bg-slate-800 p-3">
                        <div className="text-xs text-slate-400">{label}</div>
                        <div className="mt-2 text-2xl font-semibold text-white">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-3xl bg-slate-800 p-4">
                    <div className="mb-3 text-sm font-medium text-white">
                      Engineer diary
                    </div>

                    <div className="space-y-2">
                      {[
                        ["08:30", "Boiler service", "Reading"],
                        ["11:00", "CP12", "Wokingham"],
                        ["14:30", "Boiler quote visit", "Bracknell"],
                      ].map(([time, title, place]) => (
                        <div
                          key={time + title}
                          className="flex items-center justify-between gap-3 rounded-2xl bg-slate-900 px-3 py-2"
                        >
                          <div className="min-w-0">
                            <div className="truncate text-sm font-medium text-white">
                              {title}
                            </div>
                            <div className="truncate text-xs text-slate-400">{place}</div>
                          </div>
                          <div className="shrink-0 text-xs font-medium text-cyan-200">
                            {time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-w-0 space-y-4">
                  <div className="rounded-3xl bg-white p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Quote
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">
                      Combi boiler installation
                    </h3>

                    <div className="mt-4 space-y-2">
                      {[
                        ["Boiler", "Vaillant ecoTEC Plus"],
                        ["Filter", "Vaillant magnetic filter"],
                        ["Controls", "Smart thermostat"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl bg-slate-100 px-3 py-2"
                        >
                          <div className="text-xs text-slate-500">{label}</div>
                          <div className="text-sm font-medium text-slate-900">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}