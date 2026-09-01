import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert(response.data.message);

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

        
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-sky-700">
            MADHAV Medicare
          </h1>

          <h2 className="text-2xl font-bold text-gray-800 mt-5">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Register to manage your healthcare appointments
          </p>

        </div>

        
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              required
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>

          
          <button
            type="submit"
            className="w-full py-3 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-lg transition duration-200"
          >
            Create Account
          </button>

        </form>

        
        <div className="text-center mt-6">

          <p className="text-sm text-gray-500">
            Already have an account?
          </p>

          <a
            href="/login"
            className="text-sky-700 font-semibold hover:underline"
          >
            Login
          </a>

        </div>

      </div>
    </div>
  );
}

export default Register;