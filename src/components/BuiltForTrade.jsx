export default function BuiltForTrade() {
  const tradeTypes = [
    {
      title: "Plumbing businesses",
      text: "Keep quotes, jobs, customer records, paperwork and invoicing organised in one place.",
    },
    {
      title: "Heating engineers",
      text: "Manage installations, servicing, breakdowns and day-to-day workflow with more clarity.",
    },
    {
      title: "Growing trade teams",
      text: "Bring software, scheduling, records and optional admin support together as the business grows.",
    },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Built for the trade
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Designed around real trade workflows
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              TradeDesk is built around the way trade businesses actually run —
              from the first customer enquiry through quoting, scheduling,
              completing the work and invoicing.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              The platform is launching first for plumbing and heating
              businesses, with plans to expand across other trades over time.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {tradeTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}