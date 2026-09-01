import axios from "axios";
import { useState, useEffect } from "react";
const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/appointments/doctor",
          {
            withCredentials: true,
          },
        );

        setAppointments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, []);

  const updateStatus = async (id, status) => {

  try {

    await axios.patch(
      `http://localhost:5000/api/appointments/${id}/status`,
      {
        status,
      },
      {
        withCredentials: true,
      }
    );

    alert("Appointment updated");

    window.location.reload();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to update appointment"
    );

  }

};
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-sky-700">MADHAV Medicare</h1>

          <span className="text-gray-600">Doctor Dashboard</span>
        </div>
      </header>
      
      <div className="mt-10 bg-white rounded-xl border p-6">

  <h3 className="text-xl font-bold mb-5">
    Today's Appointments
  </h3>

  {appointments.length === 0 ? (

    <p className="text-gray-500">
      No appointments available.
    </p>

  ) : (

    <div className="space-y-4">

      {appointments.map((appointment) => (

        <div
          key={appointment._id}
          className="border rounded-lg p-4"
        >

          <div className="flex justify-between">

            <div>

              <h4 className="font-bold">
                {appointment.patientName}
              </h4>

              <p className="text-sm text-gray-500">
                {appointment.email}
              </p>

              <p className="text-sm text-gray-500">
                {appointment.specialty}
              </p>

              <p className="text-sm text-gray-500">
                Date: {appointment.date}
              </p>

            </div>

            <span className="text-sm">
              {appointment.status}
            </span>

          </div>


          {/* BUTTONS */}

          <div className="flex gap-3 mt-4">

            <button
              onClick={() =>
                updateStatus(
                  appointment._id,
                  "confirmed"
                )
              }
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Confirm
            </button>


            <button
              onClick={() =>
                updateStatus(
                  appointment._id,
                  "cancelled"
                )
              }
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Reject
            </button>

          </div>

        </div>

      ))}

    </div>

  )}

</div>
       
    </div>
  );
};

export default DoctorDashboard;
