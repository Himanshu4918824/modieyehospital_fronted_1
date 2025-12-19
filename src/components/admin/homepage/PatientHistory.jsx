import { useState } from 'react';
import Medicines from '../forms/Medicine';
import Vision from '../forms/Vision';
import Refraction from '../forms/Refraction';
import Anterior from '../forms/Anterior';
import Posterior from '../forms/Posterior';
import { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import React, { useEffect } from 'react';

export default function PatientHistory({ onRefresh }) {
  const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
  const [modalPage, setModalPage] = useState("");

  const { vision, Medicine, refractionData } = useContext(MainContext)


  const [activeDate, setActiveDate] = useState(vision[0]?.created_at);
  const [RefactiveDate, setRefActiveDate] = useState(refractionData[0]?.created_at);

  const activeRecord = vision.find((rec) => rec.created_at === activeDate);
  const RefactiveRecord = refractionData.find((rec) => rec.created_at === RefactiveDate);

  useEffect(() => {
    if (vision.length > 0 && !activeDate) {
      setActiveDate(vision[0].created_at);
    }
    if (refractionData.length > 0 && !RefactiveDate) {
      setRefActiveDate(refractionData[0].created_at);
    }
  }, [vision, activeDate, refractionData, RefactiveDate])


  const openDialog = (e) => {
    setShowDialog(true);
    setModalPage(e)
  }


  const closeDialog = () => setShowDialog(false);


  const showPage = (props) => {
    if (props === "Medicines") {
      return (
        <div>
          <Medicines onClose={closeDialog} onRefresh={onRefresh} />
        </div>
      );
    }
    else if (props === "Vision") {
      return (
        <div>
          <Vision onClose={closeDialog} onRefresh={onRefresh} />
        </div>
      );
    }
    else if (props === "Refraction") {
      return (
        <div>
          <Refraction onClose={closeDialog} onRefresh={onRefresh} />
        </div>
      );
    }
    else if (props === "Anterior") {
      return (
        <div>
          <Anterior onClose={closeDialog} onRefresh={onRefresh} />
        </div>
      );
    }
    else if (props === "Posterior") {
      return (
        <div>
          <Posterior onClose={closeDialog} onRefresh={onRefresh} />
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
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 800, width: "92%", minHeight: 100 }} >
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
        <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  };




  return (<div>
    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>
      <div style={{ width: '120px', border: '1px solid', borderRadius: 5, background: 'lightgrey' }}>Gonioscopy</div>
      <div style={{ width: '120px', border: '1px solid', borderRadius: 5, margin: 10, background: 'lightgrey' }}>Retinoscopy</div>
    </div>  */}


    <div className="table-responsive mb-3">

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "#c4f3d4ff", height: "27px" }} >

        <h3 className="fs-6 fw-bold m-0">Medicines</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Medicines")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 17 }} />
        </button>

      </div>

      <div className="hide-scrollbar" style={{ maxHeight: '120px', overflowY: "auto", display: 'block', scrollbarWidth: 'none' }}>
        <table className="table table-bordered table-sm border-black w-100 mb-0 text-center" style={{ fontSize: "13.5px" }} border={2}>
          <thead>
            <tr className="table-secondary">
              <th style={{ width: '25%' }}> Medicine</th>
              <th>Days</th>
              <th style={{ width: '15%' }}>Dose</th>
              <th>Intake</th>
              <th>Comment</th>
              <th style={{ width: '18%' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {Medicine.length > 0 ? Medicine.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.medicine}</td>
                  <td>{item.Days}</td>
                  <td>{item.Dose}</td>
                  <td>{item.Intake}</td>
                  <td>{item.message}</td>
                  <td>{new Date(item.Date).toLocaleDateString()}</td>
                </tr>
              )
            }
            ) : (<tr>
              <td colSpan="5">No record available</td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>



    <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "#d5ddfaff", height: "27px" }} >

      <h3 className="fs-6 fw-bold m-0">Vision</h3>
      <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Vision")}>
        <img src="/images/pencil.png" alt="edit" style={{ width: 17 }} />
      </button>

    </div>


    {/* these are the date tabs which is used to see different appointment data in the table */}
    <div className="hide-scrollbar" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '0px 0', background: '#f5f5f5', borderRadius: 6, marginBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

      <ul className="nav nav-tabs mb-0" style={{ flexWrap: 'nowrap', borderBottom: 'none', minWidth: 'max-content' }}>
        {vision.map((rec, i) => (
          <li className="nav-item" key={i}>
            <button
              className={`nav-link ${rec.created_at === activeDate ? "active" : ""}`}
              onClick={() => setActiveDate(rec.created_at)}
              style={{ fontSize: 13, fontWeight: 'bold', letterSpacing: 0.5 }}
            >
              {new Date(rec.created_at).toLocaleDateString()} Appoint: {i + 1}
            </button>
          </li>
        ))}
      </ul>

    </div>

    <div className="table-responsive mb-3">
      <div className="hide-scrollbar" style={{ maxHeight: '250px', overflowY: "auto", display: 'block', scrollbarWidth: 'none' }}>
        <table className="table table-bordered table-sm border-black w-100 mb-3 text-center" style={{ fontSize: "13px" }} border={2}>
          <thead>
            <tr>
              <th>Examination</th>
              <th>Right Eye</th>
              <th>Left Eye</th>
            </tr>
          </thead>
          <tbody>
            {activeRecord ? (
              <>
                <tr>
                  <td>Distance unaided</td>
                  <td>{activeRecord.R_Distance_unaided}</td>
                  <td>{activeRecord.L_Distance_unaided}</td>
                </tr>
                <tr>
                  <td>Distance With Pin Hole</td>
                  <td>{activeRecord.R_Distance_With_Pin_Hole}</td>
                  <td>{activeRecord.L_Distance_With_Pin_Hole}</td>
                </tr>
                <tr>
                  <td>Distance With CT</td>
                  <td>{activeRecord.R_Distance_With_CT}</td>
                  <td>{activeRecord.L_Distance_With_CT}</td>
                </tr>
                <tr>
                  <td>Distance With PMT</td>
                  <td>{activeRecord.R_Distance_With_PMT}</td>
                  <td>{activeRecord.L_Distance_With_PMT}</td>
                </tr>
                <tr>
                  <td>Distance With Previous Glasses</td>
                  <td>{activeRecord.R_Distance_with_previous_glasses}</td>
                  <td>{activeRecord.L_Distance_with_previous_glasses}</td>
                </tr>
                <tr>
                  <td>Distance With Current Subjective</td>
                  <td>{activeRecord.R_Distance_with_current_subjective}</td>
                  <td>{activeRecord.L_Distance_with_current_subjective}</td>
                </tr>
                <tr>
                  <td>Near Unaided</td>
                  <td>{activeRecord.R_Near_unaided}</td>
                  <td>{activeRecord.L_Near_unaided}</td>
                </tr>
                <tr>
                  <td>Near With Previous Glasses</td>
                  <td>{activeRecord.R_Near_with_previous_glasses}</td>
                  <td>{activeRecord.L_Near_with_previous_glasses}</td>
                </tr>
                <tr>
                  <td>Near With Current Subjective</td>
                  <td>{activeRecord.R_Near_with_current_subjective}</td>
                  <td>{activeRecord.L_Near_with_current_subjective}</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="3">No record available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>



    <div className="table-responsive mb-3">

      <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "#af89f1ff", height: "27px" }} >

        <h3 className="fs-5 fw-bold m-0">Refraction</h3>
        <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Refraction")}>
          <img src="/images/pencil.png" alt="edit" style={{ width: 17 }} />
        </button>

      </div>

      {/* these are the date tabs which is used to see different appointment data in the table */}
      <div className="hide-scrollbar" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '0px 0', background: '#f5f5f5', borderRadius: 6, marginBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

        <ul className="nav nav-tabs mb-0" style={{ flexWrap: 'nowrap', borderBottom: 'none', minWidth: 'max-content' }}>
          {refractionData.map((rec, i) => (
            <li className="nav-item" key={i}>
              <button
                className={`nav-link ${rec.created_at === RefactiveDate ? "active" : ""}`}
                onClick={() => setRefActiveDate(rec.created_at)}
                style={{ fontSize: 13, fontWeight: 'bold', letterSpacing: 0.5 }}
              >
                {new Date(rec.created_at).toLocaleDateString()} Appoint: {i + 1}
              </button>
            </li>
          ))}
        </ul>

      </div>


      <div className="hide-scrollbar" style={{ maxHeight: '140px', overflowY: "auto", display: 'block' }}>
        <table className="table table-bordered table-sm border-black w-100 mb-0 text-center" style={{ fontSize: "13.5px" }} border={2}>
          <thead>
            <tr className="table-secondary border border-dark ">
              <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Refraction Type</th>
              <th colSpan={5}>Right Eye</th>
              <th colSpan={5}>Left Eye</th>
            </tr>


            <tr className="table-secondary border border-dark ">
              <th className="fw-bold">Refraction</th>
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
            {RefactiveRecord ? (
              <>
                {/* First Row: Distance */}
                <tr className="border border-dark">
                  <td rowSpan={2}>
                    {RefactiveRecord.refractionType}
                    <br />
                    Glass: {RefactiveRecord.Glass_Type}
                  </td>
                  <td>Distance</td>
                  <td>{RefactiveRecord.R_D_SPH}</td>
                  <td>{RefactiveRecord.R_D_CYL}</td>
                  <td>{RefactiveRecord.R_D_AXIS}</td>
                  <td>{RefactiveRecord.R_D_VA}</td>
                  <td>{RefactiveRecord.L_D_SPH}</td>
                  <td>{RefactiveRecord.L_D_CYL}</td>
                  <td>{RefactiveRecord.L_D_AXIS}</td>
                  <td>{RefactiveRecord.L_D_VA}</td>
                </tr>

                {/* Second Row: Near */}
                <tr className="border border-dark">
                  <td>Near</td>
                  <td>{RefactiveRecord.R_N_SPH}</td>
                  <td>{RefactiveRecord.R_N_CYL}</td>
                  <td>{RefactiveRecord.R_N_AXIS}</td>
                  <td>{RefactiveRecord.R_N_VA}</td>
                  <td>{RefactiveRecord.L_N_SPH}</td>
                  <td>{RefactiveRecord.L_N_CYL}</td>
                  <td>{RefactiveRecord.L_N_AXIS}</td>
                  <td>{RefactiveRecord.L_N_VA}</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="10">No record available</td>
              </tr>
            )}

          </tbody>


        </table>
      </div>
    </div>


    {/*
    <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "27px" }} >
      <h3 className="fs-6 fw-bold m-0">Anterior</h3>
      <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Anterior")}>
        <img src="/images/pencil.png" alt="edit" style={{ width: 17 }} />
      </button>
    </div>

   <div className="table-responsive mb-3">
     <div className="hide-scrollbar" style={{ maxHeight: '250px', overflowY: "auto", display: 'block', scrollbarWidth: 'none' }}>
      <table className="table table-bordered table-sm border-black w-100 mb-3 text-center" style={{ fontSize: "13px" }} border={2}>
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
            <th colSpan={18}>Right Eye</th>
          </tr>

          <tr className="table-secondary border border-dark ">
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

          {anterior.length > 0 ? anterior.map((item, i) => {
            return (
              <tr key={i}>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>{item.R_Intraocular_pressure_NCT}</td>
                <td>{item.R_Intraocular_pressure_Tonopen}</td>
                <td>{item.R_Intraocular_pressure_AT}</td>
                <td>{item.R_Eyelids}</td>
                <td>{item.R_Eyelashes}</td>
                <td>{item.R_Orbit}</td>
                <td>{item.R_Extraocular_movements}</td>
                <td>{item.R_Eye_position}</td>
                <td>{item.R_Sclera_episclera}</td>
                <td>{item.R_Conjunctiva}</td>
                <td>{item.R_Cornea}</td>
                <td>{item.R_Anterior_chamber}</td>
                <td>{item.R_Angles}</td>
                <td>{item.R_Iris_pupil}</td>
                <td>{item.R_Lens}</td>
                <td>{item.R_Lacrimal_syringing}</td>
                <td>{item.R_Gonioscopy}</td>
                <td>{item.R_Others}</td>

              </tr>)
          })
            : (<tr>
              <td colSpan="19">No record available</td>
            </tr>)
          }
        </tbody>
      </table>

     
      <table className="table table-bordered table-sm border-black w-100 mb-0 text-center" style={{ fontSize: "13px" }} border={2}>
        <thead>
          <tr className="table-secondary border border-dark ">
            <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
            <th colSpan={18}>Left Eye</th>
          </tr>

          <tr className="table-secondary border border-dark ">
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
          {anterior.length > 0 ? anterior.map((item, i) => {
            return (
              <tr key={i}>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>{item.L_Intraocular_pressure_NCT}</td>
                <td>{item.L_Intraocular_pressure_Tonopen}</td>
                <td>{item.L_Intraocular_pressure_AT}</td>
                <td>{item.L_Eyelids}</td>
                <td>{item.L_Eyelashes}</td>
                <td>{item.L_Orbit}</td>
                <td>{item.L_Extraocular_movements}</td>
                <td>{item.L_Eye_position}</td>
                <td>{item.L_Sclera_episclera}</td>
                <td>{item.L_Conjunctiva}</td>
                <td>{item.L_Cornea}</td>
                <td>{item.L_Anterior_chamber}</td>
                <td>{item.L_Angles}</td>
                <td>{item.L_Iris_pupil}</td>
                <td>{item.L_Lens}</td>
                <td>{item.L_Lacrimal_syringing}</td>
                <td>{item.L_Gonioscopy}</td>
                <td>{item.L_Others}</td>

              </tr>)
          })
            : (<tr>
              <td colSpan="19">No record available</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>



    <div className="d-flex justify-content-between align-items-center w-100 mb-2 px-3" style={{ background: "lightgrey", height: "27px" }} >

      <h3 className="fs-5 fw-bold m-0">Posterior</h3>
      <button className="btn p-0 border-0 bg-transparent" style={{ marginRight: 8 }} onClick={() => openDialog("Posterior")}>
        <img src="/images/pencil.png" alt="edit" style={{ width: 17 }} />
      </button>

    </div>

    <div className="table-responsive mb-3">

    <div className="hide-scrollbar" style={{ maxHeight: '170px', overflowY: "auto", display: 'block', scrollbarWidth: 'none' }}>
      <table className="table table-bordered table-sm border-black w-100 mb-0 text-center" style={{ fontSize: "13.5px" }} border={2}>
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
          {posterior.length > 0 ? posterior.map((item, i) => {
            return (
              <tr key={i} className="border border-dark">
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>{item.R_Macula}</td>
                <td>{item.R_Media}</td>
                <td>{item.R_Optic_nerve_head}</td>
                <td>{item.R_Retina}</td>
                <td>{item.R_Choroid}</td>
                <td>{item.R_Vitreous}</td>
                <td>{item.R_Others}</td>
                <td>{item.L_Macula}</td>
                <td>{item.L_Media}</td>
                <td>{item.L_Optic_nerve_head}</td>
                <td>{item.L_Retina}</td>
                <td>{item.L_Choroid}</td>
                <td>{item.L_Vitreous}</td>
                <td>{item.L_Others}</td>

              </tr>)
          })
            : (<tr>
              <td colSpan="15">No record available</td>
            </tr>)
          }
        </tbody>

      </table>
    </div>

</div>

*/}


    {renderModal()}

  </div >)
}