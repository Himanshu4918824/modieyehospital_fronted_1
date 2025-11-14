import React from "react";

import { useNavigate } from "react-router-dom";

export default function DoctorProfile({ doctor, sessions })
 {

  const navigator=useNavigate('');


  const doctorData = {fullName: "Dr. Evelyn Reed", specialization: "Cardiology", email: "e.reed@clinic.com", phone: "(123) 456-7890", address: "123 Health St, Medville, USA", };

  const sessionHistory = [{patientName: "John Doe", dateTime: "Oct 28, 2023 - 10:00 AM", sessionType: "Follow-up", status: "Completed",},
                           {patientName: "Jane Smith", dateTime: "Oct 25, 2023 - 02:30 PM", sessionType: "Initial Consultation", status: "Canceled",},
                           {patientName: "Michael Johnson", dateTime: "Oct 22, 2023 - 11:00 AM", sessionType: "Routine Check-up", status: "Completed",},
  ];

  return (
    <div className="container py-4">

      {/* Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

          <div>
            <h2 className="fw-bold mb-0">{doctorData.fullName}</h2>
            <p className="text-muted mb-0">{doctorData.specialization}</p>
          </div>

          <button onClick={()=>navigator('/')} className="btn btn-primary px-4 fw-bold">
            Log Out
          </button>

        </div>
      </div>

      {/* Tabs */}
      <div className="card shadow-sm">
        <div className="card-header border-bottom-0 pb-0">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className="nav-link active fw-bold">Personal Details</button>
            </li>
           {/*<li className="nav-item">
              <button className="nav-link text-muted fw-bold">Professional Info</button>
            </li>*/}
          </ul>
        </div>

        {/* Personal Info */}
        <div className="card-body">
          <h4 className="fw-bold mb-3">Personal Information</h4>

          <div className="row">
            <div className="col-md-6 border-top py-3">
              <p className="text-muted mb-1">Full Name</p>
              <p>{doctorData.fullName}</p>
            </div>

            <div className="col-md-6 border-top py-3">
              <p className="text-muted mb-1">Email Address</p>
              <p>{doctorData.email}</p>
            </div>

            <div className="col-md-6 border-top py-3">
              <p className="text-muted mb-1">Phone Number</p>
              <p>{doctorData.phone}</p>
            </div>

            <div className="col-md-6 border-top py-3">
              <p className="text-muted mb-1">Address</p>
              <p>{doctorData.address}</p>
            </div>
          </div>
        </div>

        {/* Session History */}
        <div className="card-body border-top">
          <h4 className="fw-bold mb-3">Session History</h4>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Date & Time</th>
                  <th>Session Type</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {sessionHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.patientName}</td>
                    <td>{item.dateTime}</td>
                    <td>{item.sessionType}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "Completed"
                            ? "bg-success"
                            : item.status === "Canceled"
                            ? "bg-danger"
                            : "bg-warning"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-link p-0 text-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>
          </div>
        </div>

      </div>
    </div>
  );
}


