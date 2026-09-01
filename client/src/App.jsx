import {BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Book from "./pages/Book";
import MyAppointments from "./pages/patient/Myappointment";
import Profile from "./pages/patient/Profile";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/book" element={<Book/>}/>


      <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
      <Route path="/patient/profile" element={<Profile/>}/>
      <Route path="/patient/appointments" element={<MyAppointments/>}/>
      <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
      <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
