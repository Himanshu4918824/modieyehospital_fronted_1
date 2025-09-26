export default function DoctorConcern()
{
  var check=['Suffa Drug','Prostate','Ant.Coagulant','Renal','Cardiac','Diabetic','One Eyed','Thyroid','T.B.','Allegry','Asthms','Rhemuatic D','Bio-Hazard','Covid vac.','RDC Study','HTN'];

  const showCheckBox=()=>{
    return check.map((item,i)=>{
        return(
            <div class="form-check">
             <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
             <label class="form-check-label" for="checkDefault">{item}</label>
            </div>
        )

    })
    
  }


  return(<div>
     <div  className="mb-3 d-flex flex-wrap gap-2">
            <button style={{ margin: 2, borderRadius: 5 }}>
              Referral Approval
            </button>
            <button style={{ margin: 2, borderRadius: 5 }}>
              Clinical Research
            </button>
            <button style={{ margin: 2, borderRadius: 5 }}>
              Speciality Exam
            </button>
          </div>


           <div className="table-responsive mb-3" style={{marginBottom:'10px'}}>
              <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                  <tr className="table-secondary">
                    <th className="p-1">Disease Name</th>
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


              <div className="table-responsive mb-3" style={{marginBottom:'5px'}}>
              <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                  <tr className="table-secondary">
                    <th className="p-1">Surgery Name</th>
                    <th className="p-1">Date</th>
                    <th className="p-1">Surgeon</th>
                    <th className="p-1">Place</th>
                    <th className="p-1">Remarks</th>
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


             <div className="d-flex gap-2 mb-3" style={{marginBottom:'5px',display:'flex',fontSize:14}}>
                <div  className="table-responsive" style={{width:'20%'}}>
                    <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                         <thead>
                            <tr className="table-secondary">
                              <th className="p-1 fs-12" >Drug Allergy</th>
                            </tr>
                        </thead>

                         <tbody>
                            <tr style={{ height: "20px" }}>
                              <td className="p-1"></td>
                            </tr>
                             <tr style={{ height: "20px" }}>
                              <td className="p-1"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                  <div  className="table-responsive" style={{width:'80%'}}>
              <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                  <tr className="table-secondary">
                    <th className="p-1">POC</th>
                    <th className="p-1">Sph</th>
                    <th className="p-1">Cyl</th>
                    <th className="p-1">Axis</th>
                    <th className="p-1">Add</th>
                    <th className="p-1">Sph</th>
                    <th className="p-1">Cyl</th>
                    <th className="p-1">Axis</th>
                    <th className="p-1">Add</th>

                  </tr>
                </thead>

                <tbody>
                  <tr style={{ height: "20px" }}>
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                    <td className="p-1"></td>
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
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                    <td className="p-1"></td>
                  </tr>
                </tbody>

              </table>
            </div>

         </div>


          <div  className="table-responsive">
                 <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                   <thead>
                     <tr className="table-secondary">
                       <th className="p-1">Adverse Reaction</th>
                       <th className="p-1">Past History</th>
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
                      <div className="border rounded mb-2" style={{ height: '32px', display: 'flex', alignItems: 'center', paddingLeft: '8px',  background: '#e3f2fd',marginTop:5}}>
                       <div className="form-check ms-auto">
                         <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                           <label className="form-check-label" htmlFor="checkDefault">Add with clear</label>
                        </div>
                      </div>

                      <div style={{marginBottom:5}}>
                        <input  class="form-control" type="text" value={''}/>
                      </div>

                       <div style={{marginBottom:5}}>
                        <input  class="form-control" type="text" value={''} placeholder="Doctor Name"/>
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

                      
                    <table className="table table-bordered border-black w-100 mb-0 text-center" border={2} >
                        <thead>
                            <tr className="table-secondary">
                                <th className="p-1">Investigation</th>
                                <th className="p-1">Date</th>
                                <th className="p-1">DR.</th>
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
                    </div>
                 

                   <div style={{width:'35%',margin:5}}>
                    {showCheckBox()}
                  </div>

            </div>





  </div>)
}