export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture the job",
      text: "Add new work quickly with customer details, job notes and location information stored in one place.",
    },
    {
      number: "02",
      title: "Request supplier quotes",
      text: "Send parts lists to suppliers and compare pricing before preparing your customer quote.",
    },
    {
      number: "03",
      title: "Create the quote",
      text: "Build professional quotes using accurate supplier pricing, labour and job details.",
    },
    {
      number: "04",
      title: "Schedule the work",
      text: "Plan the job, organise the diary and keep the team aligned with clear scheduling.",
    },
    {
      number: "05",
      title: "Complete and invoice",
      text: "Record the work completed, generate forms or certificates and send the invoice.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A clearer workflow from enquiry to final invoice
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk connects the full workflow of a trade job — from the
            first enquiry through quoting, scheduling, compliance and
            invoicing.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-11 hidden lg:block">
            <div className="mx-16 border-t border-slate-300"></div>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative h-full">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700 ring-1 ring-cyan-100">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 max-w-[22ch]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}