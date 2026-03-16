const plans = [
  {
    name: "App Only",
    subtitle: "For businesses that want the software",
    text: "Use TradeDesk to manage quotes, jobs, forms, scheduling and invoicing in one connected platform.",
    points: [
      "Quotes, jobs and invoices",
      "Digital forms and certificates",
      "Diary and workflow tools",
      "Self-managed with the app",
    ],
    featured: false,
  },
  {
    name: "App + Support",
    subtitle: "For businesses that want extra admin help",
    text: "Combine the TradeDesk platform with practical support for the day-to-day admin that slows the business down.",
    points: [
      "Everything in App Only",
      "Diary and booking admin help",
      "Quote and paperwork follow-ups",
      "Extra back-office support",
    ],
    featured: true,
  },
  {
    name: "Custom",
    subtitle: "For growing teams or tailored requirements",
    text: "A more flexible setup for businesses that want a package shaped around their team, workflow and support needs.",
    points: [
      "Flexible support level",
      "Team-focused setup",
      "Tailored workflow help",
      "Custom pricing discussion",
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Pricing options
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Choose software only or software with support
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            TradeDesk is built to work whether you want to run everything
            yourself in the app or combine the platform with extra admin support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-lg ${
                plan.featured
                  ? "border-cyan-300 bg-cyan-50 text-slate-900"
                  : "border-slate-800 bg-slate-900 text-white"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      plan.featured ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                </div>

                {plan.featured ? (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Best fit
                  </span>
                ) : null}
              </div>

              <p
                className={`mt-6 text-sm leading-6 ${
                  plan.featured ? "text-slate-700" : "text-slate-300"
                }`}
              >
                {plan.text}
              </p>

              <div className="mt-6 space-y-3">
                {plan.points.map((point) => (
                  <div
                    key={point}
                    className={`rounded-2xl px-3 py-2 text-sm ${
                      plan.featured
                        ? "bg-white text-slate-700"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {point}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex rounded-2xl px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-slate-900 text-white"
                    : "border border-slate-700 bg-transparent text-white"
                }`}
              >
                Register interest
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-slate-400">
          Final pricing can be tailored based on software access, support level
          and team size.
        </div>
      </div>
    </section>
  )
}