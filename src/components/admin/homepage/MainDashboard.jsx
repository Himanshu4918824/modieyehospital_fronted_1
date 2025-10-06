import { useState } from "react";
import RegistrationFrom from "../appointment/RegistrationFrom";
import BookAppoint from "../appointment/BookAppoint";

export default function OPDManager() {
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
        
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered"  style={{ maxWidth: 600, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 500 }}>
              <div className="modal-header">
                <button onClick={() => setModalPage("registration")} className="btn btn-warning btn-sm m-1"> Registration </button>
                <button onClick={() => setModalPage("bookappoint")} className="btn btn-warning btn-sm m-1">BookAppointment</button>

                <button type="button" className="btn-close" onClick={closeDialog}></button>
              </div>

              <div className="modal-body">
                {showPage(modalPage)}
              </div>

            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="modal-backdrop fade show"></div>
      </div>
    );
  };

  return (
    <div>

    
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
        <button className="btn btn-outline-secondary btn-sm m-1">Return [1196]{" "} </button>
        <button onClick={openDialog} className="btn btn-outline-dark btn-sm m-1">Appointment</button>

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
              <th>Seq</th>
              <th>Status</th>
              <th>Patient Name</th>
              <th>Age/Sex</th>
              <th>Appointment Id</th>
              <th>Date</th>
              <th>Time</th>
              <th>Contact</th>
              <th>Doctor</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="10" className="text-center">
                No Data Available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



    </div>
  );
}