import React from 'react'

const SERVICES = [
  {
    icon: "🫀",
    title: "Cardiology",
    desc: "Advanced diagnostics and treatment for heart conditions, arrhythmias, and cardiovascular disease.",
  },
  {
    icon: "🧠",
    title: "Neurology",
    desc: "Comprehensive care for neurological disorders, including stroke, epilepsy, and migraine management.",
  },
  {
    icon: "🦴",
    title: "Orthopedics",
    desc: "Joint replacements, sports medicine, and minimally invasive spine surgery from leading surgeons.",
  },
  {
    icon: "🩺",
    title: "Primary Care",
    desc: "Preventive screenings, chronic disease management, and wellness plans for every stage of life.",
  },
  {
    icon: "🧬",
    title: "Oncology",
    desc: "Precision oncology with genomic testing, immunotherapy, and a multidisciplinary tumor board.",
  },
  {
    icon: "👁",
    title: "Ophthalmology",
    desc: "Cataract surgery, LASIK, retinal treatments, and full pediatric and adult eye care.",
  },
];

const Services = () => {
  return (
    <div>
         <section id="services" className="py-24 bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-16">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">What We Offer</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-[var(--foreground)]">
              Comprehensive<br />specialties
            </h2>
          </div>
          <p className="text-[var(--muted-foreground)] leading-relaxed mt-4 md:mt-8 max-w-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Every department at Meridian Health operates as an integrated unit — sharing records, coordinating care, and communicating directly — so you never have to repeat yourself.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 group hover:bg-[var(--secondary)] transition-colors duration-200 cursor-pointer"
            >
              <span className="text-3xl mb-5 block">{s.icon}</span>
              <h3 className="text-xl mb-2 text-[var(--foreground)]">{s.title}</h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {s.desc}
              </p>
              <span className="mt-5 inline-block text-xs font-semibold text-[var(--accent)] group-hover:underline">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Services
