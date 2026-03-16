import { useState } from "react"

const faqs = [
  {
    question: "When is TradeDesk launching?",
    answer:
      "TradeDesk is currently in pre-launch. You can register your interest now and we’ll keep you updated as early access becomes available.",
  },
  {
    question: "Who is TradeDesk designed for?",
    answer:
      "TradeDesk is being built for UK trade businesses that want a better way to manage quotes, jobs, scheduling, paperwork and invoicing. The platform is launching first for plumbing and heating businesses.",
  },
  {
    question: "Is admin support optional?",
    answer:
      "Yes. TradeDesk is designed so you can use the software on its own or choose a package that also includes admin support.",
  },
  {
    question: "What kind of admin support will be available?",
    answer:
      "Support is intended to cover areas such as call handling, diary management, quote follow-ups, paperwork, customer communication and other back-office tasks.",
  },
  {
    question: "Will there be a free trial?",
    answer:
      "Yes. Early users will be able to try TradeDesk before committing to a full package.",
  },
  {
    question: "Can I register interest before launch?",
    answer:
      "Yes. The early access form lets you register interest now so you can hear about launch updates, software access and admin support availability.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleFaq(index) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Common questions about TradeDesk
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A few quick answers about the platform, the support offer and early access.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-100"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-6 py-5">
                      <p className="text-sm leading-6 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}