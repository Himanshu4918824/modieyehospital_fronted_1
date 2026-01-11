import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
//import Header from './components/admin/homepage/Header'
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
import Complaint from "./components/admin/forms/Complaint";
import History from "./components/admin/forms/History";
import Vision from "./components/admin/forms/Vision";
import Refraction from "./components/admin/forms/Refraction";
import Anterior from "./components/admin/forms/Anterior";
import Posterior from "./components/admin/forms/Posterior";
import Diagnosis from "./components/admin/forms/Diagnosis";
import Advice from "./components/admin/forms/Advice";
import Medicine from "./components/admin/forms/Medicine";
import Report from "./components/admin/forms/Report";
import Doctor from "./components/admin/forms/Doctor";
import Charges from "./components/admin/forms/Charges";
import Payment from "./components/admin/forms/Payment";
import ContextProvider from "./context/ContextProvider";
import ShowPatientDetails from "./components/admin/homepage/ShowPatientDetails";
import AnteriorIcon from "./components/admin/forms/AnteriorIcon";
import PosteriorIcon from "./components/admin/forms/PosteriorIcon";
import AddDoctor from "./components/admin/doctor/AddDoctor";
import DisplayDoctor from "./components/admin/doctor/DisplayDoctor";
import UserForm from "./components/admin/user/UserForm";
import ShowUser from "./components/admin/user/ShowUser";
import Patient from "./components/admin/homepage/Patient";
import ProfilePage from "./components/admin/homepage/ProfilePage";
import Contact from "./components/admin/homepage/Contact";
import ShowAllAppoint from "./components/admin/appointment/ShowAllAppoint";
import TextSearchbar from "./components/admin/homepage/TextSearchbar";
import AddProduct from "./components/medical/product/AddProduct";
import AddCompany from "./components/medical/company/AddCompany";
import Bill from "./components/medical/bill/Bill";
import ShowCompany from "./components/medical/company/ShowCompany";
import ShowProduct from "./components/medical/product/ShowProduct";
import Medicine1 from "./components/admin/forms/Medicine1";


function App() {

  return (
    <div>
      <Router>
        <ContextProvider>
          <Routes>
            <Route element={<ShowPatientDetails />} path="/ShowPatient"></Route>
            <Route element={<DoctorConcern />} path="/doctorconcern"></Route>
            <Route element={<DashBoard />} path="/dashboard/:id/:Aid"></Route>
            <Route element={<Login />} path="/"></Route>
            <Route element={<Signup />} path="/signup"></Route>
            <Route element={<MainDashboard />} path="/maindashboard"></Route>
            <Route element={<NewAppoint />} path="/newappoint"></Route>
            <Route element={<RegistrationFrom />} path="/registrationform"></Route>
            <Route element={<BookAppoint />} path="/bookappoint"></Route>
            <Route element={<Complaint />} path="/complaint"></Route>
            <Route element={<History />} path="/history"></Route>
            <Route element={<Vision />} path="/vision"></Route>
            <Route element={<Refraction />} path="/refraction"></Route>
            <Route element={<Anterior />} path="/anterior"></Route>
            <Route element={<Posterior />} path="/posterior"></Route>
            <Route element={<Diagnosis />} path="/diagnosis"></Route>
            <Route element={<Advice />} path="/advice"></Route>
            <Route element={<Medicine />} path="/medicine"></Route>
            <Route element={<Report />} path="/report"></Route>
            <Route element={<Doctor />} path="/doctor"></Route>
            <Route element={<Charges />} path="/charge"></Route>
            <Route element={<Payment />} path="/payment"></Route>
            <Route element={<NewAppoint />} path="/Newappoint"></Route>

            <Route element={<AnteriorIcon/>} path="/anterioricon"></Route>
            <Route element={<PosteriorIcon/>} path="/posterioricon"></Route>

            <Route element={<AddDoctor/>} path="/adddoctor"></Route>
            <Route element={<DisplayDoctor/>} path="/displaydoctor"></Route>
            <Route element={<UserForm/>} path="/userform"></Route>
            <Route element={<ShowUser/>} path="/showuser"></Route>
            <Route element={<Patient/>} path="/patient"></Route>
            
            <Route element={<ProfilePage/>} path="/profilepage"></Route>
            <Route element={<Contact/>} path="/contact"></Route>

            <Route element={<ShowAllAppoint/>} path="/showallappoint"></Route>

            <Route element={<TextSearchbar/>} path="/searchbar"></Route>

            <Route element={<AddProduct/>} path="/addproduct"></Route>
            <Route element={<AddCompany/>} path="/addcompany"></Route>
            <Route element={<Bill/>} path="/bill"></Route>

            <Route element={<ShowCompany/>} path="/showcompany"></Route>
            <Route element={<ShowProduct/>} path="/showproduct"></Route>

            <Route element={<Medicine1/>} path="/med"></Route>

          </Routes>
        </ContextProvider>
      </Router>
    </div>)
}

export default App
