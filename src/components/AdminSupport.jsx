export default function AdminSupport() {
  const supportItems = [
    {
      title: "Call handling",
      text: "Support with missed calls, customer enquiries and booking follow-ups so opportunities do not get missed while you're on the job.",
    },
    {
      title: "Diary management",
      text: "Help keeping bookings, appointments and engineer schedules organised from day to day.",
    },
    {
      title: "Quote follow-ups",
      text: "Support with chasing outstanding quotes and helping enquiries move forward.",
    },
    {
      title: "Invoice and paperwork admin",
      text: "Extra help with invoicing tasks, paperwork and keeping records tidy and up to date.",
    },
    {
      title: "Customer communication",
      text: "Support with customer messages, updates and general back-office communication.",
    },
    {
      title: "Flexible support",
      text: "Use TradeDesk as software only, or combine it with admin support that fits how your business runs.",
    },
  ]

  return (
    <section id="support" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Admin support
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Software when you want it. Admin support when you need it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              TradeDesk is built to support more than just the software side of
              the job. It can also help with the admin that piles up around a
              busy trade business, from customer communication to follow-ups and
              day-to-day organisation.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-cyan-200 bg-cyan-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                A more flexible way to run the business
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Use TradeDesk as your software platform on its own, or combine
                it with practical admin support for extra help with calls,
                bookings, paperwork, follow-ups and back-office tasks.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
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