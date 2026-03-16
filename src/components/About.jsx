export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Built with the trade in mind
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Software shaped around the real admin of the job
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            TradeDesk is being developed around the real workflows plumbing and
            heating businesses deal with every day — from quoting and scheduling
            to compliance paperwork and invoicing. The goal is simple: make the
            admin side of the business easier so you can focus on the work that
            matters.
          </p>
        </div>
      </div>
    </section>
  )
}