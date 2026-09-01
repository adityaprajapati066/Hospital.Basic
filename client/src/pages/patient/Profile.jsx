import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/auth/me",
          {
            withCredentials: true,
          }
        );

        setUser(response.data.user);

      } catch (error) {

        console.error("Profile error:", error);

      } finally {

        setLoading(false);

      }
    };

    fetchProfile();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
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

      <main className="max-w-3xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold">
          My Profile
        </h2>

        <div className="bg-white border rounded-xl p-6 mt-8 space-y-6">

          <div>
            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <p className="text-lg font-semibold">
              {user?.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="text-lg font-semibold">
              {user?.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>

            <p className="text-lg font-semibold capitalize">
              {user?.role}
            </p>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Profile;