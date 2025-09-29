import { useState } from 'react';
import Medicines from '../forms/Medicine';
import Vision from '../forms/Vision';
import Refraction from '../forms/Refraction';
import Anterior from '../forms/Anterior';
import Posterior from '../forms/Posterior';

export default function PatientHistory() {
  const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
  const [modalPage, setModalPage] = useState("");


  const records = [
    {
      date: "25-09-2025",
      rows: [
        {
          right: {
            unaided: "6/36P",
            pinhole: "NI",
            ct: "",
            pmt: "",
            prev: "",
            current: "6/36P",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N24",
          },
          left: {
            unaided: "6/12P",
            pinhole: "NI",
            ct: "",
            pmt: "",
            prev: "",
            current: "6/12P",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N10",
          },
        },
      ],
    },
    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },

    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },

    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },

    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },

    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },

    {
      date: "24-09-2025",
      rows: [
        {
          right: {
            unaided: "6/18",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N12",
          },
          left: {
            unaided: "6/9",
            pinhole: "",
            ct: "",
            pmt: "",
            prev: "",
            current: "",
            nearUnaided: "",
            nearPrev: "",
            nearCurrent: "N6",
          },
        },
      ],
    },
    
  ];

  const [activeDate, setActiveDate] = useState(records[0].date);

  const activeRecord = records.find((rec) => rec.date === activeDate);



  const openDialog = (e) => {
    setShowDialog(true);
    setModalPage(e)
  }
  const closeDialog = () => setShowDialog(false);

  const showPage = (props) => {
    if (props === "Medicines") {
      return (
        <div>
          <Medicines />
        </div>
      );
    }
    else if (props === "Vision") {
      return (
        <div>
          <Vision />
        </div>
      );
    }
    else if (props === "Refraction") {
      return (
        <div>
          <Refraction />
        </div>
      );
    }
    else if (props === "Anterior") {
      return (
        <div>
          <Anterior />
        </div>
      );
    }
    else if (props === "Posterior") {
      return (
        <div>
          <Posterior />
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>
      <div style={{ width: '120px', border: '1px solid', borderRadius: 5, background: 'lightgrey' }}>Gonioscopy</div>
      <div style={{ width: '120px', border: '1px solid', borderRadius: 5, margin: 10, background: 'lightgrey' }}>Retinoscopy</div>
    </div>


    <div className="table-responsive mb-3">

       <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "35px" }} >

        <h3 className="fs-5 m-0">Medicines</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Medicines")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
        
      </div>

      <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
        <thead>
          <tr className="table-secondary">
            <th style={{ width: '35%' }}> Medicine</th>
            <th>Qty.</th>
            <th style={{ width: '20%' }}>Dosa</th>
            <th>Intake</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3">
       <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "35px" }} >

        <h3 className="fs-5 m-0">Vision</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Vision")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
        
      </div>

      
      {/* these are the date tabs which is used to see different appointment data in the table */}
      <div className="hide-scrollbar" style={{overflowX:'auto', whiteSpace:'nowrap', padding: '4px 0', background: '#f5f5f5',borderRadius: 6,marginBottom: '16px',scrollbarWidth: 'none', msOverflowStyle: 'none'}}>

      <ul className="nav nav-tabs mb-3"  style={{ flexWrap: 'nowrap', borderBottom: 'none', minWidth: 'max-content' }}>
        {records.map((rec,i) => (
          <li className="nav-item" key={rec.date}>
            <button
              className={`nav-link ${rec.date === activeDate ? "active" : ""}`}
              onClick={() => setActiveDate(rec.date)}
            >
              {rec.date} Appoint: {i + 1}
            </button>
          </li>
        ))}
      </ul>

      </div>

      <table className="table table-bordered border-dark w-100 text-center align-middle">
        <thead className="table-secondary">
          <tr>
            <th>Examination</th>
            <th>Right Eye</th>
            <th>Left Eye</th>
          </tr>
        </thead>
        <tbody>
          {activeRecord.rows.map((row, idx) => (
            <>
              <tr key={`unaided-${idx}`}>
                <td>Distance unaided</td>
                <td>{row.right.unaided}</td>
                <td>{row.left.unaided}</td>
              </tr>
              <tr key={`pinhole-${idx}`}>
                <td>Distance With Pin Hole</td>
                <td>{row.right.pinhole}</td>
                <td>{row.left.pinhole}</td>
              </tr>
              <tr key={`ct-${idx}`}>
                <td>Distance With CT</td>
                <td>{row.right.ct}</td>
                <td>{row.left.ct}</td>
              </tr>
              <tr key={`pmt-${idx}`}>
                <td>Distance With PMT</td>
                <td>{row.right.pmt}</td>
                <td>{row.left.pmt}</td>
              </tr>
              <tr key={`prev-${idx}`}>
                <td>Distance With Previous Glasses</td>
                <td>{row.right.prev}</td>
                <td>{row.left.prev}</td>
              </tr>
              <tr key={`current-${idx}`}>
                <td>Distance With Current Subjective</td>
                <td>{row.right.current}</td>
                <td>{row.left.current}</td>
              </tr>
              <tr key={`nearUnaided-${idx}`}>
                <td>Near Unaided</td>
                <td>{row.right.nearUnaided}</td>
                <td>{row.left.nearUnaided}</td>
              </tr>
              <tr key={`nearPrev-${idx}`}>
                <td>Near With Previous Glasses</td>
                <td>{row.right.nearPrev}</td>
                <td>{row.left.nearPrev}</td>
              </tr>
              <tr key={`nearCurrent-${idx}`}>
                <td>Near With Current Subjective</td>
                <td>{row.right.nearCurrent}</td>
                <td>{row.left.nearCurrent}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3">

     <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "35px" }} >

        <h3 className="fs-5 m-0">Refraction</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Refraction")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
        
      </div>


      <table className="table table-bordered border-dark w-100 text-center align-middle">
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date & Refraction Type</th>
            <th colSpan={5}>Right Eye</th>
            <th colSpan={4}>Left Eye</th>
          </tr>


          <tr className="table-secondary border border-dark ">
            <th className="text-start fw-bold">Refraction</th>
            <th>Sph</th>
            <th>Cyl</th>
            <th>Axis</th>
            <th>VA</th>
            <th>Sph</th>
            <th>Cyl</th>
            <th>Axis</th>
            <th>VA</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-dark">
            <td rowSpan={3}></td>
            <td >Distance</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className="border border-dark">
            <td>Near</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className="border border-dark">
            <td>Add</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          
        </tbody>

      </table>
    </div>



    <div className="table-responsive mb-3">

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "35px" }} >

        <h3 className="fs-5 m-0">Anterior</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Anterior")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
        
      </div>

      <table className="table table-bordered border-dark w-100 text-center align-middle">
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
            <th colSpan={18}>Right Eye</th>
          </tr>

          <tr className="table-secondary border border-dark " style={{ fontSize: 14 }}>
            <th><i>Intraocular pressure(NCT)</i></th>
            <th><i>Intraocular pressure(Tonopen)</i></th>
            <th><i>Intraocular pressure(AT)</i></th>
            <th><i>Eyelids</i></th>
            <th><i>Eyelashes</i></th>
            <th><i>Orbit</i></th>
            <th><i>Extraocular movements</i></th>
            <th><i>Eye position</i></th>
            <th><i>Sclera/episclera</i></th>
            <th><i>Conjunctiva</i></th>
            <th><i>Cornea</i></th>
            <th><i>Anterior chamber</i></th>
            <th><i>Angles</i></th>
            <th><i>Iris/pupil</i></th>
            <th><i>Lens</i></th>
            <th><i>Lacrimal syringing</i></th>
            <th><i>Gonioscopy</i></th>
            <th><i>Other</i></th>

          </tr>

        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table className="table table-bordered border-dark w-100 text-center align-middle">
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
            <th colSpan={18}>Left Eye</th>
          </tr>

          <tr className="table-secondary border border-dark " style={{ fontSize: 14 }}>
            <th><i>Intraocular pressure(NCT)</i></th>
            <th><i>Intraocular pressure(Tonopen)</i></th>
            <th><i>Intraocular pressure(AT)</i></th>
            <th><i>Eyelids</i></th>
            <th><i>Eyelashes</i></th>
            <th><i>Orbit</i></th>
            <th><i>Extraocular movements</i></th>
            <th><i>Eye position</i></th>
            <th><i>Sclera/episclera</i></th>
            <th><i>Conjunctiva</i></th>
            <th><i>Cornea</i></th>
            <th><i>Anterior chamber</i></th>
            <th><i>Angles</i></th>
            <th><i>Iris/pupil</i></th>
            <th><i>Lens</i></th>
            <th><i>Lacrimal syringing</i></th>
            <th><i>Gonioscopy</i></th>
            <th><i>Other</i></th>

          </tr>

        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <div className="table-responsive mb-3">

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "35px" }} >

        <h3 className="fs-5 m-0">Posterior</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Posterior")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 20 }} />
        </button>
        
      </div>

      <table className="table table-bordered border-dark w-100 text-center align-middle">
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
            <th colSpan={7}>Right Eye</th>
            <th colSpan={7}>Left Eye</th>
          </tr>


          <tr className="table-secondary border border-dark ">
            <th>Media</th>
            <th>Vitreous</th>
            <th>Retina</th>
            <th>Optic nerve head</th>
            <th>Choroid</th>
            <th>Macula</th>
            <th>Other</th>
            <th>Media</th>
            <th>Vitreous</th>
            <th>Retina</th>
            <th>Optic nerve head</th>
            <th>Choroid</th>
            <th>Macula</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-dark">
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className="border border-dark">
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className="border border-dark">
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>

      </table>
    </div>




       
    {renderModal()}

  </div>)
}