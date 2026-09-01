import React from 'react'

const Footer = () => {
  return (
     <footer id="contact" className="border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-semibold text-base text-[var(--foreground)]" style={{ fontFamily: "'Outfit', sans-serif" }}>Meridian Health</span>
          </div>
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Accredited by The Joint Commission. Serving Chicago since 1987.
          </p>
        </div>
        {[
          { heading: "Care", links: ["Primary Care", "Cardiology", "Neurology", "Orthopedics", "Oncology", "Ophthalmology"] },
          { heading: "Company", links: ["About Us", "Careers", "Press", "Research", "Community"] },
          { heading: "Support", links: ["Patient Portal", "Insurance", "Medical Records", "Billing", "Contact"] },
        ].map((col) => (
          <div key={col.heading}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--foreground)] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {col.heading}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)] max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-[var(--muted-foreground)]" style={{ fontFamily: "'Outfit', sans-serif" }}>
          © 2026 Meridian Health. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use", "Accessibility"].map((l) => (
            <a key={l} href="#" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
