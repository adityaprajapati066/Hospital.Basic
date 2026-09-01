import React, { useState } from 'react'
const NAV_LINKS = ['Home', 'Services', 'Doctors', 'About', 'Contact'];
const Navbar = () => {
  const [open, setOpen] = useState(false);
   
  return (
    <div>
         <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          
          <span className="w-7 h-7 rounded-full bg-[var(--primary)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
          <span
            className="font-semibold text-lg tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif", color: "var(--foreground)" }}
          >
            Meridian Health
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
         
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150"
            >
              {l}
            </a>
          ))}
          <a
            href="#book"
            className="ml-2 px-4 py-2 text-sm font-semibold bg-[var(--primary)] text-white rounded-[var(--radius)] hover:bg-[#0a3d5c] transition-colors duration-150"
          >
            Book Appointment
          </a>
           <a href="/login" className='text-white bg-[var(--primary)] px-4 py-2 text-sm font-semibold rounded-[var(--radius)] transition-colors duration-150'>Login</a>
        </div>
        <button
          className="md:hidden p-1.5 rounded text-[var(--muted-foreground)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            >
              {l}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="px-4 py-2 text-sm font-semibold bg-[var(--primary)] text-white rounded-[var(--radius)] text-center"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
      
    </div>
  )
}

export default Navbar
