const supportItems = [
  {
    title: "Software only",
    text: "Use TradeDesk as your all-in-one platform for quotes, jobs, forms, scheduling and invoicing.",
  },
  {
    title: "Software + admin support",
    text: "Get extra help with the day-to-day admin that slows plumbing and heating businesses down.",
  },
  {
    title: "Built around your workflow",
    text: "Choose the level of support that fits your business, whether you are a sole trader or a growing team.",
  },
]

export default function SupportSection() {
  return (
    <section id="support" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Software + support
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            More than software — support when you need it
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk is designed to help plumbing and heating businesses run
            more smoothly, not just through software, but through practical
            admin support as well.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {supportItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-cyan-200 bg-cyan-50 p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            What admin support could include
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Quote follow-ups",
              "Diary and booking admin",
              "Customer communication",
              "Invoice and paperwork support",
              "Job status chasing",
              "General back-office help",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}