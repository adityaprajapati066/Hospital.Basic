import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about" className="py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-[var(--secondary)] rounded-[var(--radius)] overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&h=875&fit=crop&auto=format"
                alt="Surgeon performing a procedure in a state-of-the-art operating room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--primary)] text-white p-6 rounded-[var(--radius)] shadow-xl w-52">
              <div className="text-3xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>Founded</div>
              <div className="text-4xl font-bold mt-1" style={{ fontFamily: "'DM Serif Display', serif" }}>1987</div>
              <div className="text-xs text-blue-200 mt-2 leading-tight">Serving the Chicago metro area for 37 years</div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">Our Mission</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-[var(--foreground)] mb-6">
              Medicine built around people, not processes
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Meridian Health was founded on a single belief: that access to world-class medicine shouldn't require navigating a bureaucratic maze. We've invested in technology, talent, and design to make that belief real.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Our facilities are accredited by The Joint Commission, our physicians are selected from top residency programs, and our support staff averages 11 years at Meridian — because continuity is care.
            </p>
            <ul className="space-y-3">
              {[
                "Joint Commission Gold Seal accreditation",
                "Electronic health records shared across all departments",
                "Average wait time under 12 minutes",
                "Interpreter services in 24 languages",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--foreground)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-[var(--accent)] flex-shrink-0 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
