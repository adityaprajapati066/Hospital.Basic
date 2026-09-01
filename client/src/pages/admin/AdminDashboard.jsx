import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    patients: 0,
    doctors: 0,
    appointments: 0,
    pending: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/stats",
          {
            withCredentials: true,
          },
        );

        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b ">
        <div className="flex justify-between px-6 py-7 max-w-7xl">
          <h1 className="text-2xl font-bold text-sky-700">
            MADHAV Medicare Admin
          </h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </header>

      <main className="max-w-7xl py-10 px-6 mx-auto">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl border">
            <p className="text-gray-500">Patients</p>
            <h3 className="text-3xl font-bold mt-2">{stats.patients}</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <p className="text-gray-500">Doctors</p>
            <h3 className="text-3xl font-bold mt-2">{stats.doctors}</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <p className="text-gray-500">Appointment</p>
            <h3 className="text-3xl font-bold mt-2">{stats.appointments}</h3>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <p className="text-gray-500">Pending</p>
            <h3 className="text-3xl font-bold mt-2">{stats.pending}</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-xl">Manage Patient</h3>
            <p className="text-gray-500 mt-2">
              View and manage registered patients.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-xl">Manage Doctors</h3>
            <p className="text-gray-500 mt-2">Add and manage doctors..</p>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-xl">Manage Appointment</h3>
            <p className="text-gray-500 mt-2">View and Update patients.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
