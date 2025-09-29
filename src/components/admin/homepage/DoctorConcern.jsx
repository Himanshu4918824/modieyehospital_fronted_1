import React from "react";
import { useState } from "react";
import Complaint from '../forms/Complaint';
import History from '../forms/History';
import Allegries from '../forms/Complaint';
import Diagnosis from '../forms/Diagnosis';
import Doctor from '../forms/Doctor';
import Treatment from '../forms/Advice';
import Advice from "../forms/Advice";
import Report from '../forms/Report';
import { useContext } from "react";
import MainContext from "../../../context/MainContext";



export default function DoctorConcern() {
  const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
  const [modalPage, setModalPage] = useState("");
  const { diagnosisList } = useContext(MainContext)

  const openDialog = (e) => {
    setShowDialog(true);
    setModalPage(e)
  }
  const closeDialog = () => setShowDialog(false);

  const showPage = (props) => {
    if (props === "Complaints") {
      return (
        <div>
          <Complaint />
        </div>
      );
    }
    else if (props === "History") {
      return (
        <div>
          <History />
        </div>
      );
    }
    else if (props === "Allegries") {
      return (
        <div>
          <Allegries />
        </div>
      );
    }
    else if (props === "Doctor") {
      return (
        <div>
          <Doctor />
        </div>
      );
    }
    else if (props === "Diagnosis") {
      return (
        <div>
          <Diagnosis />
        </div>
      );
    }
    else if (props === "Treatment") {
      return (
        <div>
          <Treatment />
        </div>
      );
    }
    else if (props === "Advice") {
      return (
        <div>
          <Advice />
        </div>
      );
    }
    else if (props === "Report") {
      return (
        <div>
          <Report />
        </div>
      );
    }
    else if (props === "Medicine") {
      return (
        <div>
          <Medicine />
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
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 700, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 'auto' }}>
              <div className="modal-header h4">
                {modalPage}
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


  return (<div>
    <div className="mb-3 d-flex flex-wrap gap-2">
      <button style={{ margin: 2, borderRadius: 5 }}>
        Referral Approval
      </button>
      <button style={{ margin: 2, borderRadius: 5 }}>
        Clinical Research
      </button>
      <button style={{ margin: 2, borderRadius: 5 }}>
        Speciality Exam
      </button>

      {renderModal()}
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: '10px' }}>
      <div
        className="d-flex justify-content-between align-items-center w-100 mb-2 px-3"
        style={{ background: "lightgrey", height: "35px" }}
      >
        <h3 className="fs-5 m-0">Complaints</h3>
        <button
          className="btn p-0 border-0 bg-transparent"
          style={{ marginRight: 8 }}
          onClick={() => openDialog("Complaints")}
        >
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th className="p-1">Complain</th>
            <th className="p-1">Start Date</th>
            <th className="p-1">Remarks</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>

          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>
        </tbody>

      </table>
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: '5px' }}>

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3"
        style={{ background: "lightgrey", height: "35px" }}>
        <div className="fs-5 m-0"><h3 className="fs-5">History</h3></div>
        <button className="btn p-0 border-0 bg-transparent"
          style={{ marginRight: 8 }} role="button"
          onClick={() => openDialog('History')}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th className="p-1 w-25">Date</th>
            <th className="p-1">Systemic illness</th>
            <th className="p-1">Treatment History</th>
            <th className="p-1">Diet History</th>
            <th className="p-1">Family History</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>

          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>
        </tbody>

      </table>
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: '10px' }}>

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3"
        style={{ background: "lightgrey", height: "35px" }}>
        <div className="fs-5 m-0"><h3 className="fs-5">Allergies</h3></div>
        <button className="btn p-0 border-0 bg-transparent"
          style={{ marginRight: 8 }} onClick={() => openDialog('Allegries')} role="button" ><img src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></button>
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th className="p-1">Allergies</th>
            <th className="p-1">Start Date</th>
            <th className="p-1">Remarks</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>

          <tr style={{ height: "20px" }}>
            <td className="p-1"></td>
            <td className="p-1"></td>
            <td className="p-1"></td>
          </tr>
        </tbody>

      </table>
    </div>


    <div className="d-flex  gap-3">
      <div style={{ flex: '2 1 350px', minWidth: 250 }}>

        <div style={{ width: '100%', height: 35, background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
          <div style={{ marginLeft: '44%' }}><h3 className="fs-5">Doctor</h3></div>
          <div style={{ marginLeft: 'auto', marginRight: 8 }} role="button" ><img onClick={() => openDialog('Doctor')} src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></div>
        </div>

        <table className="table table-bordered border-black w-100 mb-0 text-center" border={2} >
          <thead>
            <tr className="table-secondary">
              <th className="p-1">Doctor</th>
              <th className="p-1">Date</th>
              <th className="p-1">Branch</th>
            </tr>
          </thead>

          <tbody>
            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>
          </tbody>

        </table>


        <table className="table table-bordered border-black w-100 mb-0 text-center" border={2} >
          <thead>
            <tr className="table-secondary">
              <th className="p-1">Surgery</th>
              <th className="p-1">Procedure</th>
              <th className="p-1">DR</th>
              <th className="p-1">Eye</th>

            </tr>
          </thead>

          <tbody>
            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>

            <tr style={{ height: "20px" }}>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
              <td className="p-1"></td>
            </tr>
          </tbody>

        </table>

      </div>




    </div>

    <div className="table-responsive mb-3" style={{ marginBottom: 10, marginTop: 10 }}>

      <div style={{ width: '100%', height: 35, background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ marginLeft: '38%' }}><h3 className="fs-5">Diagonises</h3></div>
        <div style={{ marginLeft: 'auto', marginRight: 8 }} role="button" ><img onClick={() => openDialog('Diagnosis')} src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></div>
      </div>


      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th>Date</th>
            <th>Right Eye</th>
            <th>Left Eye</th>
            <th className="w-25">Systemic</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          {diagnosisList.map((diagnosis, i) => {
            return (<tr key={i}>
              <td>{new Date(diagnosis.created_at).toLocaleDateString()}</td>
              <td>{diagnosis.R_eye}</td>
              <td>{diagnosis.L_eye}</td>
              <td>{diagnosis.Systemic}</td>
              <td>{diagnosis.Others}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: 10 }}>

      <div style={{ width: '100%', height: 35, background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ marginLeft: '36%' }}><h3 className="fs-5">Advice Given</h3></div>
        <div style={{ marginLeft: 'auto', marginRight: 8 }} role="button" ><img onClick={() => openDialog('Advice')} src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></div>
      </div>


      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th>Date</th>
            <th>Type</th>
            <th style={{ width: '60%' }}>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: 10 }}>

      <div style={{ width: '100%', height: 35, background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ marginLeft: '40%' }}><h3 className="fs-5">Treatment</h3></div>
        <div style={{ marginLeft: 'auto', marginRight: 8 }} role="button" ><img onClick={() => openDialog('Treatment')} src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></div>
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th>Date</th>
            <th>Type</th>
            <th style={{ width: '60%' }}>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3" style={{ marginBottom: 10 }}>

      <div style={{ width: '100%', height: 35, background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ marginLeft: '42%' }}><h3 className="fs-5">Report</h3></div>
        <div style={{ marginLeft: 'auto', marginRight: 8 }} role="button" ><img onClick={() => openDialog('Report')} src="/images/pencil.png" alt="edit" style={{ width: 20 }} /></div>
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th>Date</th>
            <th>Report Name</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>




  </div>)
}