import React from 'react'
const STATS = [
  { label: 'Board-certified physicians', value: '120+' },
  { label: 'Medical specialties', value: '12' },
  { label: 'Years serving Chicago', value: '25+' },
  { label: 'Patient satisfaction', value: '98%' },
];
const Hero = () => {
  
  return (
     <section className="pt-16 min-h-screen grid md:grid-cols-[1fr_1fr] overflow-hidden">
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
        <span className="inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)] px-3 py-1 rounded-[2px] w-fit">
          MADHAV Medical Center
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-[var(--foreground)] mb-6">
          Expert care,<br />
          <em className="not-italic text-[var(--primary)]">every step</em><br />
          of your health.
        </h1>
        <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-md leading-relaxed mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Meridian Health brings together 120+ board-certified physicians across 12 specialties, all under one roof — with same-week appointments and 24/7 nurse access.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#book"
            className="px-6 py-3 text-sm font-semibold bg-[var(--primary)] text-white rounded-[var(--radius)] hover:bg-[#0a3d5c] transition-colors duration-150 text-center"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="px-6 py-3 text-sm font-semibold border border-[var(--border)] text-[var(--foreground)] rounded-[var(--radius)] hover:bg-[var(--muted)] transition-colors duration-150 text-center"
          >
            Explore Services
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-6">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[var(--primary)]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                {s.value}
              </div>
              <div className="text-xs text-[var(--muted-foreground)] mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative hidden md:block bg-[var(--secondary)]">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=1000&fit=crop&auto=format"
          alt="Doctor consulting with patient in a modern clinic"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-[var(--radius)] p-5 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">✓</div>
            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Next available: Today, 3:30 PM</p>
              <p className="text-xs text-[var(--muted-foreground)]">Dr. Sarah Chen · Cardiology</p>
            </div>
            <a href="#book" className="ml-auto text-xs font-semibold text-[var(--accent)] hover:underline">Book now →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
