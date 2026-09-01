import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login response:", response.data);

      alert("Login successful");

      
      const role = response.data.user.role;

      
      const pendingAppointment =
        localStorage.getItem("pendingAppointment");

      if (pendingAppointment) {
        navigate("/book");
        return;
      }

    
      if (role === "patient") {
        navigate("/patient/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      } else if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.error("LOGIN ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

        <h1 className="text-3xl font-bold text-center text-sky-700">
          Hospital Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

    
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

        
          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

         
          <button
            type="submit"
            className="w-full py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;