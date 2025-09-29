import { useEffect } from "react";
import DoctorConcern from "./DoctorConcern";
//import Patient from "./Patient";
import PatientHistory from "./PatientHistory";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";

export default function DashBoard() {
  const { patientData, getPatientData } = useContext(MainContext);

  useEffect(() => {
    getPatientData("v1/patient/1");
  }, []);

  var data = [
    "send",
    "History",
    "Primary",
    "Opto",
    "Remakrs",
    "Summary",
    "Procedure",
    "Proc. Summ.",
    "Document",
    "Post-Op",
    "Prog.Note",
    "IP Medicine",
    "IOG Graphs",
    "OC",
    "OT Check",
    "Drawing",
    "Drawing Summ.",
    "Template",
    "T.C.",
  ];

  const showButton = () => {
    return data.map((item, i) => (
      <button
        key={i}
        style={{ margin: 2, borderRadius: 5, background: "pink" }}
      >
        {item}
      </button>
    ));
  };

  return (
    <div>
      <div style={{ background: "lightgrey", width: "100%", textAlign: "center", fontWeight: "bold", }} >
        Doctor Examination
      </div>


      <div className="row mb-3 mt-3">
        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Appointment Id:</span>
            <input type="text" className="form-control" disabled value={patientData.Latest_Apt} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Patient Name</span>
            <input type="text" className="form-control" disabled value={patientData.FullName} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Doctor Name</span>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Patient Age</span>
            <input type="text" className="form-control" disabled value={patientData.Age} />
          </div>
        </div>

      </div>

      <div className="row mb-3 mt-3">

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Patient DOB:</span>
            <input type="text" className="form-control" disabled value={patientData.Dob} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Reffered By:</span>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Insurance:</span>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Address</span>
            <input type="text" className="form-control" disabled value={patientData.Address} />
          </div>
        </div>

      </div>


      <div className="row mb-3 mt-3">

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">City</span>
            <input type="text" className="form-control" disabled value={patientData.City} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">State</span>
            <input type="text" className="form-control" disabled value={patientData.State} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Reg.Dt:</span>
            <input type="text" className="form-control" disabled value={patientData.RegDt} />
          </div>
        </div>

        <div className="col-xs-12 col-lg-3">
          <div className="input-group">
            <span className="input-group-text">Last Visit Date:</span>
            <input type="text" className="form-control" />
          </div>
        </div>

      </div>







      {/* Components in 3 columns */}
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <DoctorConcern />
        </div>
        <div className="col-lg-7 col-sm-12">
          <PatientHistory />
        </div>

      </div>
    </div>
  );
}
