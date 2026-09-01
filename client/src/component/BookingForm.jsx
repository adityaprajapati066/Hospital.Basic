import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const SERVICES = [
  { title: 'Cardiology' },
  { title: 'Dermatology' },
  { title: 'Pediatrics' },
  { title: 'Orthopedics' },
  { title: 'Neurology' },
  { title: 'General Surgery' },
];

const BookingForm = () => {
  const navigate = useNavigate();
     const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  const savedAppointment =
    localStorage.getItem("pendingAppointment");

  if (savedAppointment) {
    setForm(JSON.parse(savedAppointment));

    localStorage.removeItem("pendingAppointment");
  }
}, []);

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments",
        {
          patientName: form.name,
          email: form.email,
          phone: form.phone,
          specialty: form.specialty,
          date: form.date,
          reason: form.notes,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Appointment:", response.data);

      setSubmitted(true);

    } catch (error) {
  console.error(error);
        if (error.response?.status === 401) {

    localStorage.setItem(
      "pendingAppointment",
      JSON.stringify(form)
    );

    alert("Please login before booking an appointment.");

    navigate("/login");

    return;
  }

  alert(
    error.response?.data?.message ||
    "Failed to book appointment"
  );
 }
 }  
  return (
    <div>
       <section id="book" className="py-24 bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[5fr_7fr] gap-16 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">Appointments</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-[var(--foreground)] mb-6">
            Book your visit today
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Same-week appointments are available for most specialties. After submitting, our scheduling team will confirm your slot within 2 business hours.
          </p>
          <div className="space-y-6">
            {[
              { icon: "📞", label: "24/7 Nurse Line", value: "7231 23 33" },
              { icon: "📍", label: "Main Campus", value: "Havsing near,120 road, Ahemdabad, Gujrat" },
              { icon: "🕐", label: "Clinic Hours", value: "Mon–Fri 7 AM – 8 PM, Sat 8–4" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm text-[var(--foreground)] mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-[var(--radius)] border border-[var(--border)] p-8 shadow-sm">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✓</div>
              <h3 className="text-2xl text-[var(--foreground)]">Request Received</h3>
              <p className="text-sm text-[var(--muted-foreground)] max-w-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Thank you, {form.name || "there"}. Our scheduling team will reach you at {form.email || "the email provided"} within 2 business hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", specialty: "", date: "", notes: "" }); }}
                className="mt-2 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter Full Name"
                    className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@example.com"
                    className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Phone</label>
                  <input
                    value={form.phone}
                    required
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="91xxx xxxxx"
                    className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Specialty</label>
                  <select
                    required
                    value={form.specialty}
                    onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <option value="">Select a specialty</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Primary Care">Primary Care</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] transition"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-2">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  placeholder="Briefly describe your symptoms or reason for visit..."
                  className="w-full px-3 py-2.5 text-sm border border-[var(--border)] rounded-[var(--radius)] bg-white text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--ring)] resize-none transition"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded-[var(--radius)] hover:bg-[#0a3d5c] transition-colors duration-150"
              >
                Request Appointment
              </button>
              <p className="text-center text-xs text-[var(--muted-foreground)]">
                Your information is protected under HIPAA. We never share your data.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
    </div>
  )
}

export default BookingForm
