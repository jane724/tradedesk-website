export default function Problem() {
  const problems = [
    {
      title: "Too many systems",
      text: "Quotes, jobs, schedules, paperwork and invoices are often spread across different apps, inboxes or bits of paper.",
    },
    {
      title: "Admin eats into the day",
      text: "Chasing quotes, updating customers, sorting paperwork and keeping records in order all take time away from the actual work.",
    },
    {
      title: "Scheduling gets messy quickly",
      text: "When bookings, job updates and engineer diaries are not connected, small changes turn into missed details and wasted time.",
    },
    {
      title: "Important records need managing properly",
      text: "Forms, certificates, notes and job history all need to be completed, stored and easy to find when you need them.",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            The problem
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Being on the tools is hard enough — the admin shouldn’t be
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Too many trade businesses still rely on disconnected systems,
            manual paperwork and generic software that do not match how the
            day-to-day workflow actually runs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="font-semibold text-slate-900">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}