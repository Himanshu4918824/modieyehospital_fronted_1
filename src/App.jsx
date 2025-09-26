import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Header from './components/admin/homepage/Header'
import PatientHistory from './components/admin/homepage/PatientHistory'
import DoctorConcern from './components/admin/homepage/DoctorConcern'
//import BookAppoint from './components/admin/appointment/BookAppoint'



import DashBoard from "./components/admin/homepage/Dashboard";
import Login from "./components/admin/homepage/Login";
import Signup from './components/admin/homepage/Signup'
//import RegistrationFrom from './components/admin/appointment/RegistrationFrom'
import MainDashboard from "./components/admin/homepage/MainDashboard"
import NewAppoint from "./components/admin/appointment/NewAppoint";
import RegistrationFrom from "./components/admin/appointment/RegistrationFrom";
import BookAppoint from "./components/admin/appointment/BookAppoint"
import Complaint from "./components/admin/from/Complaint";
import History from "./components/admin/from/History";
import Vision from "./components/admin/from/Vision";
import Refraction from "./components/admin/from/Refraction";
import Anterior from "./components/admin/from/Anterior";
import Posterior from "./components/admin/from/Posterior";
import Diagnosis from "./components/admin/from/Diagnosis";
import Advice from "./components/admin/from/Advice";
import Medicine from "./components/admin/from/Medicine";
import Report from "./components/admin/from/Report";
import Doctor from "./components/admin/from/Doctor";
import Charges from "./components/admin/from/Charges";
import Payment from "./components/admin/from/Payment";

function App() {

  return (
  <div>
    <Router>
      <Routes>
        <Route element={<DoctorConcern/>} path="/doctorconcern"></Route>
        <Route element={<DashBoard/>} path="/dashboard"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Signup/>} path="/signup"></Route>
        <Route element={<MainDashboard/>} path="/maindashboard"></Route>
        <Route element={<NewAppoint/>} path="/newappoint"></Route>
        <Route element={<RegistrationFrom/>} path="/registrationform"></Route>
        <Route element={<BookAppoint/>} path="/bookappoint"></Route>


        <Route element={<Complaint/>} path="/complaint"></Route>
        <Route element={<History/>} path="/history"></Route>
        <Route element={<Vision/>} path="/vision"></Route>
        <Route element={<Refraction/>} path="/refraction"></Route>
        <Route element={<Anterior/>} path="/anterior"></Route>
        <Route element={<Posterior/>} path="/posterior"></Route>
        <Route element={<Diagnosis/>} path="/diagnosis"></Route>
        <Route element={<Advice/>} path="/advice"></Route>
        <Route element={<Medicine/>} path="/medicine"></Route>
        <Route element={<Report/>} path="/report"></Route>
        <Route element={<Doctor/>} path="/doctor"></Route>
        <Route element={<Charges/>} path="/charge"></Route>
        <Route element={<Payment/>} path="/payment"></Route>
      </Routes>
    </Router>
  </div>)
}

export default App
