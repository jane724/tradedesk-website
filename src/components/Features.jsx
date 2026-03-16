const features = [
  {
    title: "Quotes and Job Workflow",
    text: "Create professional quotes and move accepted work straight into the job workflow without re-entering information.",
    icon: "QJ",
    targetId: "how-it-works",
  },
  {
    title: "Supplier Quote Requests",
    text: "Prepare parts lists, request supplier pricing and compare responses before building the customer quote.",
    icon: "SQ",
    targetId: "how-it-works",
  },
  {
    title: "Engineer Scheduling",
    text: "Plan work with a visual diary and clear scheduling so jobs, engineers and appointments stay organised.",
    icon: "ES",
    targetId: "how-it-works",
  },
  {
    title: "Compliance Forms",
    text: "Complete CP12s, boiler services, commissioning records and other job documentation digitally.",
    icon: "CF",
    targetId: "how-it-works",
  },
  {
    title: "Invoices and Records",
    text: "Move smoothly from quote to job to invoice while keeping customer history, notes and records organised.",
    icon: "IR",
    targetId: "how-it-works",
  },
  {
    title: "Admin Support and Call Handling",
    text: "Optional support with customer calls, messages, booking follow-ups and day-to-day admin work when things get busy.",
    icon: "AS",
    targetId: "support",
  },
]

export default function Features() {
  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Feature overview
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to run the work and the admin
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk combines job management software with practical admin
            support for trade businesses, helping you stay organised from first
            enquiry to final invoice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700 ring-1 ring-cyan-100 transition group-hover:bg-cyan-100">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>

              <button
                type="button"
                onClick={() => scrollToSection(feature.targetId)}
                className="mt-5 inline-flex items-center text-sm font-semibold text-slate-400 transition hover:text-cyan-700 group-hover:text-cyan-700"
              >
                See more
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}