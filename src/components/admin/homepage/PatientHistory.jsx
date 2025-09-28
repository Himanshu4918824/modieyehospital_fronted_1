import { useState } from 'react';
import Medicines from '../forms/Medicine';
import Vision from '../forms/Vision';
import Refraction from '../forms/Refraction';
import Anterior from '../forms/Anterior';
import Posterior from '../forms/Posterior';

export default function PatientHistory()
{
   const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
   const [modalPage, setModalPage] = useState("");
    
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
          <div className="modal-dialog modal-dialog-centered"  style={{ maxWidth: 700, width: "92%", minHeight: 100 }} >
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

  


    return(<div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontWeight:'bold'}}>
           <div style={{width:'120px',border:'1px solid',borderRadius:5,background:'lightgrey'}}>Gonioscopy</div>
           <div style={{width:'120px',border:'1px solid',borderRadius:5,margin:10,background:'lightgrey'}}>Retinoscopy</div>
        </div>


        <div className="table-responsive mb-3">

          <div style={{width:'100%',height:35,background:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                <div style={{marginLeft:'44%'}}><h3>Medicines</h3></div>
                <div style={{marginLeft:'auto',marginRight:8}}><img onClick={()=>openDialog('Medicines')} src="/images/pencil.png" alt="edit" style={{width:20}}/></div>
          </div>

            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                       <th style={{width:'35%'}}> Medicine</th>
                        <th>Qty.</th>
                        <th style={{width:'20%'}}>Dosa</th>
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

          <div style={{width:'100%',height:35,background:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                <div style={{marginLeft:'44%'}}><h3>Vision</h3></div>
                <div style={{marginLeft:'auto',marginRight:8}}><img onClick={()=>openDialog('Vision')} src="/images/pencil.png" alt="edit" style={{width:20}}/></div>
          </div>

            <table className="table table-bordered border-dark w-100 text-center align-middle">
                <thead>
                    <tr className="table-secondary border border-dark ">
                       <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
                        <th colSpan={9}>Right Eye</th>
                        <th colSpan={9}>Left Eye</th>
                    </tr>

                    <tr className="table-secondary border border-dark " style={{fontSize:14}}>
                      <th><i>Distance unaided</i></th>
                      <th><i>Distance With Pin Hole</i></th>
                      <th><i>Distance With CT</i></th>
                      <th><i>Distance With PMT</i></th>
                      <th><i>Distance With previous glasses</i></th>
                      <th><i>Distance With current subjective</i></th>
                      <th><i>Near unaided</i></th>
                      <th><i>Near with previous glasse</i></th>
                      <th><i>Near with current subjective</i></th>
                       <th><i>Distance unaided</i></th>
                      <th><i>Distance With Pin Hole</i></th>
                      <th><i>Distance With CT</i></th>
                      <th><i>Distance With PMT</i></th>
                      <th><i>Distance With previous glasses</i></th>
                      <th><i>Distance With current subjective</i></th>
                      <th><i>Near unaided</i></th>
                      <th><i>Near with previous glasse</i></th>
                      <th><i>Near with current subjective</i></th>

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

          <div style={{width:'100%',height:35,background:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                <div style={{marginLeft:'44%'}}><h3>Refraction</h3></div>
                <div style={{marginLeft:'auto',marginRight:8}}><img onClick={()=>openDialog('Refraction')} src="/images/pencil.png" alt="edit" style={{width:20}}/></div>
          </div>
            
           <table className="table table-bordered border-dark w-100 text-center align-middle">
             <thead>
               <tr className="table-secondary border border-dark ">
                       <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
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
                  <td className="bg-light text-start fw-medium">Distance</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                 <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Add</td>
                 <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">M.D.</td>
                  <td ></td>
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

          <div style={{width:'100%',height:35,background:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                <div style={{marginLeft:'44%'}}><h3>ANTERIOR</h3></div>
                <div style={{marginLeft:'auto',marginRight:8}}><img onClick={()=>openDialog('Anterior')} src="/images/pencil.png" alt="edit" style={{width:20}}/></div>
          </div>

            <table className="table table-bordered border-dark w-100 text-center align-middle">
                <thead>
                    <tr className="table-secondary border border-dark ">
                       <th rowSpan={2} style={{ minWidth: 125, width: 150 }}>Date</th>
                        <th colSpan={18}>Right Eye</th>
                    </tr>

                    <tr className="table-secondary border border-dark " style={{fontSize:14}}>
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

                    <tr className="table-secondary border border-dark " style={{fontSize:14}}>
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

          <div style={{width:'100%',height:35,background:'lightgrey',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:8}}>
                <div style={{marginLeft:'44%'}}><h3>Posterior</h3></div>
                <div style={{marginLeft:'auto',marginRight:8}}><img onClick={()=>openDialog('Posterior')} src="/images/pencil.png" alt="edit" style={{width:20}}/></div>
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



        <div className="table-responsive mb-3">
           <table className="table table-bordered border-dark w-100 mb-0 text-center align-middle">
            <tbody>
              <tr>
                 <td className="fw-bold bg-light rounded">Examination Comments:</td>
                 <td colSpan={3}><input type="text" className="form-control" /></td>
               </tr>

                <tr>
                  <td className="fw-bold bg-light rounded">Prognosis Comments:</td>
                  <td><input type="text" className="form-control" /></td>
                  <td className="fw-bold bg-light rounded">Immunization</td>
                  <td><input type="text" className="form-control" /> </td>
                </tr>

                <tr>
                    <td className="fw-bold bg-light rounded">Cross Ref.Reason:</td>
                    <td><input type="text" className="form-control" /></td>
                    <td className="fw-bold bg-light rounded">Referred Dept:</td>
                    <td><input type="text" className="form-control" /></td>
                </tr>
            </tbody>
           </table>
        </div>
{renderModal()}
        
    </div>)
}