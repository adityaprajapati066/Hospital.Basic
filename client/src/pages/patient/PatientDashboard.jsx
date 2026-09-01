import React from "react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-500">MADHAV Medicare</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">welcome,patient</span>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800">Patient Dashboard</h2>

        <p className="mt-2 text-gray-500">
          Manage your appointments and health information.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500">Upcoming Appointments</p>

            <h3 className="text-3xl font-bold mt-3 text-sky-700">2</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500">Completed VIsited</p>
            <h3 className="text-2xl font-bold mt-3 text-green-500">5</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <p className="text-gray-500">Pending Requests</p>
            <h3 className="text-3xl font-bold mt-3 text-orange-500">1</h3>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <button
            onClick={() => navigate("/book")}
            className="bg-sky-700 text-white p-5 rounded-xl text-left"
          >
            <h3 className="font-bold text-lg">Book Appointment</h3>

            <p className="text-sm mt-2 text-sky-100">
              Schedule a visit with a doctor.
            </p>
          </button>

          <button
            onClick={() => navigate("/patient/appointments")}
            className="bg-white border p-5 rounded-xl text-left"
          >
            <h3 className="font-bold text-lg">My Appointments</h3>

            <p className="text-sm mt-2 text-gray-500">
              View your upcoming appointments.
            </p>
          </button>

          <button className="bg-white border p-5 rounded-xl text-left"
           onClick={() => navigate("/patient/profile")}>
            <h3 className="font-bold text-lg">My Profile</h3>

            <p className="text-sm mt-2 text-gray-500">
              Manage your personal information.
            </p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
