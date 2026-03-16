export default function ProductPreview() {
  const screens = [
    {
      eyebrow: "Dashboard",
      title: "See workload, jobs and business activity clearly",
      text: "Give the office a clearer view of what is booked, what is active and what needs attention.",
      theme: "dark",
    },
    {
      eyebrow: "Build Quotes",
      title: "Build structured boiler quotes faster",
      text: "Present clearer product lines, organise materials properly and move from quote to job without losing detail.",
      theme: "light",
    },
    {
      eyebrow: "Compliance",
      title: "Keep forms and certificates connected to the job",
      text: "Complete CP12s, service records and commissioning paperwork digitally with cleaner document storage.",
      theme: "cyan",
    },
  ]

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Product walkthrough
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            See how TradeDesk works
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            From dashboard visibility to cleaner quote building and digital
            compliance paperwork, TradeDesk helps the whole workflow feel more
            connected.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {screens.map((screen, index) => {
            const textOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            const mockOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1"

            return (
              <div
                key={screen.eyebrow}
                className="grid gap-6 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 lg:grid-cols-2"
              >
                <div
                  className={`order-2 flex flex-col justify-center p-8 ${textOrder}`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {screen.eyebrow}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    {screen.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {screen.text}
                  </p>
                </div>

                <div className={`order-1 p-5 ${mockOrder}`}>
                  {screen.theme === "dark" && <DashboardMock />}
                  {screen.theme === "light" && <QuoteMock />}
                  {screen.theme === "cyan" && <ComplianceMock />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DashboardMock() {
  return (
    <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-4 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between border-b border-slate-800 px-2 pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
            Dashboard
          </p>
          <h4 className="mt-1 text-lg font-semibold text-white">
            Today&apos;s workload
          </h4>
        </div>

        <div className="rounded-2xl bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-200">
          12 active jobs
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Quotes", "18"],
          ["Jobs", "12"],
          ["Invoices", "6"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-slate-900 p-3">
            <div className="text-xs text-slate-400">{label}</div>
            <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl bg-slate-900 p-4">
          <div className="mb-3 text-sm font-medium text-white">
            Engineer diary
          </div>

          <div className="space-y-2">
            {[
              ["08:30", "Boiler service", "Reading"],
              ["11:00", "CP12", "Wokingham"],
              ["14:30", "Quote visit", "Bracknell"],
            ].map(([time, title, place]) => (
              <div
                key={time + title}
                className="flex items-center justify-between rounded-2xl bg-slate-800 px-3 py-2"
              >
                <div>
                  <div className="text-sm font-medium text-white">{title}</div>
                  <div className="text-xs text-slate-400">{place}</div>
                </div>
                <div className="text-xs font-medium text-cyan-200">{time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-4">
          <div className="mb-3 text-sm font-medium text-white">
            Recent activity
          </div>

          <div className="space-y-2">
            {[
              "Quote accepted",
              "Invoice sent",
              "Job completed",
              "Certificate saved",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-800 px-3 py-2 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function QuoteMock() {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
      <div className="flex items-center justify-between border-b border-slate-200 px-2 pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Smart quote
          </p>
          <h4 className="mt-1 text-lg font-semibold text-slate-900">
            Combi boiler installation
          </h4>
        </div>

        <div className="rounded-2xl bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Draft quote
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          {[
            ["Boiler", "Vaillant ecoTEC Plus 832"],
            ["Filter", "Vaillant magnetic filter"],
            ["Controls", "Smart thermostat"],
            ["Flue kit", "Horizontal flue"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-100 px-4 py-3">
              <div className="text-xs text-slate-500">{label}</div>
              <div className="mt-1 text-sm font-medium text-slate-900">
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="text-sm font-medium text-slate-900">Quote summary</div>

          <div className="mt-4 space-y-3">
            {[
              ["Materials", "£2,450"],
              ["Labour", "£850"],
              ["Controls", "£180"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-sm text-slate-500">{label}</span>
                <span className="text-sm font-semibold text-slate-900">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Estimated total</span>
              <span className="text-xl font-semibold text-slate-900">
                £3,480
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ComplianceMock() {
  return (
    <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 p-4 shadow-2xl shadow-cyan-950/10">
      <div className="flex items-center justify-between border-b border-cyan-100 px-2 pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-700">
            Compliance
          </p>
          <h4 className="mt-1 text-lg font-semibold text-slate-900">
            Digital forms & certificates
          </h4>
        </div>

        <div className="rounded-2xl bg-white px-3 py-1 text-xs font-medium text-cyan-700">
          Saved to job
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl bg-white p-4">
          <div className="text-sm font-medium text-slate-900">
            Form document
          </div>

          <div className="mt-4 space-y-2">
            {[
              "Landlord Gas Safety Record",
              "Appliance details",
              "Safety checks",
              "Engineer declaration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4">
          <div className="text-sm font-medium text-slate-900">
            Job attachment timeline
          </div>

          <div className="mt-4 space-y-3">
            {[
              ["CP12 generated", "10:12"],
              ["Engineer signature added", "10:18"],
              ["Customer copy saved", "10:21"],
              ["Certificate linked to property", "10:22"],
            ].map(([label, time]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-3"
              >
                <span className="text-sm text-slate-700">{label}</span>
                <span className="text-xs font-medium text-cyan-700">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}