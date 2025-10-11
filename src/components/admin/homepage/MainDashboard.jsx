import { useState } from "react";
import RegistrationFrom from "../appointment/RegistrationFrom";
import BookAppoint from "../appointment/BookAppoint";
import Header from "../homepage/Header";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainDashboard()
{
  const { getAllTodayAppointments, allTodayAppointments, } = useContext(MainContext)
  const navigate = useNavigate()
  const [doctorId, setDoctorId] = useState(localStorage.getItem('doctorId'))


  useEffect(() => {
    if (!doctorId || doctorId === undefined || doctorId === "") {
      navigate('/')
    }

    getAllTodayAppointments()

  }, [])

  
  // console.log(allTodayAppointments)
  const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
  const [modalPage, setModalPage] = useState("registration");

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);


  const showPage = (props) => {
    if (props === "registration") {
      return (
        <div>
          <RegistrationFrom />
        </div>
      );
    }
    else if (props === "bookappoint") {
      return (
        <div>
          <BookAppoint />
        </div>
      );
    }
    return null;
  };

  const renderModal = () => {
    if (!showDialog) return null;

    return (
      <div>

        <div className="modal show d-flex" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 600, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 500 }}>
              <div className="modal-header">
                <button onClick={() => setModalPage("registration")} className="btn btn-warning btn-sm m-1"> Registration </button>
                <button onClick={() => setModalPage("bookappoint")} className="btn btn-warning btn-sm m-1">BookAppointment</button>
                <button type="button" className="btn-close" onClick={closeDialog}></button>
              </div>

              <div className="modal-body overflow-auto" style={{ height: 400 }}>
                {showPage(modalPage)}
              </div>

            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  };

  return (<div>

    <div>
      <Header />
    </div>


    <div className="p-3 bg-light">
      <div className="d-flex flex-wrap mb-3">
        <button className="btn btn-warning btn-sm m-1">Reception [0]</button>
        <button className="btn btn-secondary btn-sm m-1">Dept [0]</button>
        <button className="btn btn-success btn-sm m-1">AutoRef [0]</button>
        <button className="btn btn-info btn-sm m-1">Optometrist [0]</button>
        <button className="btn btn-primary btn-sm m-1">Doctor [0]</button>
        <button className="btn btn-dark btn-sm m-1">Diagnostic [0]</button>
        <button className="btn btn-secondary btn-sm m-1">Counsellor [0]</button>
        <button className="btn btn-danger btn-sm m-1">Waiting [0]</button>
        <button onClick={openDialog} className="btn btn-outline-dark btn-sm m-1">Appointment</button>

<div style={{marginLeft:5}}>
        <select className="form-select">
          <option value="">-Select-Branch-</option>
          <option value="Madhav Plaza">Madhav Plaza</option>
          <option value="Gola Ka Mandir">Gola Ka Mandir</option>
          <option value="Dabara">Dabara</option>
        </select>
</div>

        {renderModal()}
      </div>

      {/*
      <div className="card p-3 mb-3">
        <div className="row g-2">
          <div className="col-md-3">
            <input className="form-control" placeholder="Name" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Address" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Mobile No" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Patient Doctor" />
          </div>
        </div>

        <div className="row g-2 mt-2">
          <div className="col-md-3">
            <input className="form-control" placeholder="National ID" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Language" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Bio hazard" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Nationality" />
          </div>
        </div>

        <div className="row g-2 mt-2">
          <div className="col-md-3">
            <input className="form-control" placeholder="Old MR No" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Past History" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Diabetes" />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="HTN" />
          </div>
        </div>
      </div>

  */}

      <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-secondary">
            <tr>
              <th className="text-center">Seq</th>
              <th className="text-center">Status</th>
              <th className="text-center">Patient Name</th>
              <th className="text-center">Age/Sex</th>
              <th className="text-center">Appointment Id</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Contact</th>
              <th className="text-center">Doctor</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allTodayAppointments.length > 0 ? (

                allTodayAppointments.map((item, i) => {
                  return (<tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">Pending</td>
                    <td className="text-center">{item.patient.FullName}</td>
                    <td className="text-center">{item.patient.Gender}/{item.patient.Age}</td>
                    <td className="text-center">{item.id}</td>
                    <td className="text-center">{new Date(item.Appointment_date).toLocaleDateString()}</td>
                    <td className="text-center">none</td>
                    <td className="text-center">{item.patient.Phone}</td>
                    <td className="text-center">{item.D_id} </td>
                    <td className="text-center">
                      <button onClick={() => navigate(`/dashboard/${item.P_id}/${item.id}`)} className="bg-primary px-3 text-uppercase text-white rounded border border-0">View</button>
                    </td>
                  </tr>
                  )
                }
                )
              )
                : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div >



  </div>
  );
}