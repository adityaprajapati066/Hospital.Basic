import React, { useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      "The cardiology team caught a blockage my previous doctor had missed for two years. Their thoroughness is unlike anything I've experienced.",
    name: "Linda R.",
    location: "Chicago, IL",
  },
  {
    quote:
      "From scheduling to discharge, every interaction felt genuinely caring. Dr. Nair walked me through every step of my treatment with patience.",
    name: "David T.",
    location: "Evanston, IL",
  },
  {
    quote:
      "The online portal makes managing my family's health seamless. Booking, results, follow-ups — it all works without friction.",
    name: "Monica S.",
    location: "Oak Park, IL",
  },
];


const Testimonials = () => {
     const [active, setActive] = useState(0);
  return (
    <div>
     <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">Patient Stories</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-[var(--foreground)] mb-14">What our patients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setActive(i)}
              className={`p-8 rounded-[var(--radius)] border cursor-pointer transition-all duration-200 ${
                active === i
                  ? "border-[var(--primary)] bg-[var(--secondary)] shadow-md"
                  : "border-[var(--border)] bg-white hover:border-[var(--muted-foreground)]"
              }`}
            >
              <svg className="mb-5 text-[var(--accent)]" width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
                <path d="M0 20V12.667C0 9.037 1.037 6.074 3.111 3.778 5.185 1.26 8.148 0 12 0l1.333 2.444C10.741 2.889 8.963 3.63 7.556 4.667 6.37 5.703 5.778 7.111 5.778 8.889H11.11V20H0zm16.889 0V12.667c0-3.63 1.037-6.593 3.111-8.889C22.074 1.26 25.037 0 28.889 0L30.222 2.444C27.63 2.889 25.852 3.63 24.444 4.667c-1.185 1.037-1.777 2.445-1.777 4.222h5.333V20H16.889z" />
              </svg>
              <p className="text-[var(--foreground)] leading-relaxed text-sm mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm text-[var(--foreground)]">{t.name}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Testimonials;
