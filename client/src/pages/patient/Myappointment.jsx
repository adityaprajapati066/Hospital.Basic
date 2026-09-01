import React, { useEffect, useState } from "react";
import axios from "axios";


const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/appointments/my",
        {
          withCredentials: true,
        }
      );

      setAppointments(response.data);

    } catch (error) {
      console.error("Appointments error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to load appointments"
      );

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold text-sky-700">
            MADHAV Medicare
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold">
          My Appointments
        </h2>

        {appointments.length === 0 ? (

          <div className="bg-white border rounded-xl p-8 mt-8">
            <p className="text-gray-500">
              You don't have any appointments yet.
            </p>
          </div>

        ) : (

          <div className="grid gap-5 mt-8">

            {appointments.map((appointment) => (

              <div
                key={appointment._id}
                className="bg-white border rounded-xl p-6"
              >

                <div className="flex justify-between">

                  <div>
                    <h3 className="text-xl font-bold">
                      {appointment.specialty}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Patient: {appointment.patientName}
                    </p>

                    <p className="text-gray-500">
                      Date: {appointment.date}
                    </p>

                    <p className="text-gray-500">
                      Phone: {appointment.phone}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 h-fit rounded-full text-sm ${
                      appointment.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : appointment.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {appointment.status}
                  </span>

                </div>

                {appointment.reason && (
                  <p className="mt-4 text-gray-600">
                    Reason: {appointment.reason}
                  </p>
                )}

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
};

export default MyAppointments;