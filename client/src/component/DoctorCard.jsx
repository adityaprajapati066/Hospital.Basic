import React from 'react'

const DOCTORS = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Cardiologist",
    years: "14 years experience",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dr. Marcus Webb",
    specialty: "Neurologist",
    years: "11 years experience",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Oncologist",
    years: "9 years experience",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Dr. James Okafor",
    specialty: "Orthopedic Surgeon",
    years: "17 years experience",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&auto=format",
  },
];

const Doctors = () => {
  return (
    <div>
         <section id="doctors" className="py-24 bg-[var(--foreground)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">Our Physicians</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-white">
              Meet the doctors<br />behind your care
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[var(--accent)] hover:underline whitespace-nowrap"
          >
            View all 120 physicians →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((d) => (
            <div key={d.name} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[var(--radius)] aspect-[4/5] bg-[#1a2e3b] mb-4">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-white text-lg">{d.name}</h3>
              <p className="text-[var(--accent)] text-sm font-medium mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{d.specialty}</p>
              <p className="text-[#7a9bb5] text-xs mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{d.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Doctors
