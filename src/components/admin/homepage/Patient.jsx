export default function Patient()
{
    return(<div>
        <div style={{background:'lightgrey', borderRadius:5,textAlign:'center', fontWeight:'bold'}}>
            Patient
        </div>


        <div className="table-responsive mb-3" style={{marginBottom:10}}>
            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                        <th>Date</th>
                        <th>Time</th>
                        <th>Method</th>
                        <th>OD</th>
                        <th>OS</th>
                        <th>Pachy</th>
                        <th>C-IOP</th>
                        <th>CCT OD</th>
                        <th>CCT OS</th>
                        <th>Remarks</th>
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
                    </tr>
                </tbody>
            </table> 
        </div>


         <div className="table-responsive mb-3" style={{marginBottom:20}}>
            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                       <th>
                          <div className="d-flex align-items-center">
                             <span className="me-2">C</span>
                             <span className="flex-grow-1 text-center">Investigation/OPD Procedure</span>
                            </div>
                       </th>
                        <th>Comments</th>
                        <th>Site</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </table>         
        </div>


         <div className="table-responsive mb-3" style={{marginBottom:10}}>
            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                       <th>C ICD</th>
                        <th style={{width:'34%'}}>Diagnosis</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </table>         
        </div>


         <div className="table-responsive mb-3">
            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                       <th>
                          <div className="d-flex align-items-center">
                             <span className="me-2">C</span>
                             <span className="flex-grow-1 text-center">Medicine</span>
                            </div>
                       </th>
                        <th>Qty</th>
                        <th>Dosage</th>
                        <th>Dur.</th>
                        <th>Unit</th>
                        <th>Site</th>
                        <th>U.Qty</th>
                        <th>Remarks</th>
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
                    </tr>
                </tbody>
            </table>         
        </div>


        <div className="table-responsive mb-3" style={{marginBottom:10}}>
            <table className="table table-bordered border-black w-100 mb-0 text-center" border={2}>
                <thead>
                    <tr className="table-secondary">
                       <th>
                          <div className="d-flex align-items-center">
                             <span className="me-2">C</span>
                             <span className="flex-grow-1 text-center">Surgery Name</span>
                            </div>
                       </th>
                        <th>Qlfr(F3)</th>
                        <th>Site</th>
                        <th>Doctor</th>
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

                </tbody>
            </table>         
        </div>


       <div className="table-responsive mb-3">
  <table className="table table-bordered border-dark w-100 mb-0 text-center align-middle">
    <tbody>
      <tr className="d-block d-md-table-row">
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Review Notes:</td>
        <td className="d-block d-md-table-cell">
          <input type="text" className="form-control" value={''} />
        </td>
        <td colSpan={2} className="fw-bold bg-light rounded text-center d-block d-md-table-cell">
          Guarded Visual Prog. <input type="checkbox" className="form-check-input ms-2" value={''} />
        </td>
      </tr>

      <tr className="d-block d-md-table-row">
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Next Review:</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Ref.</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
      </tr>

      <tr className="d-block d-md-table-row">
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Treatment Plan:</td>
        <td colSpan={3} className="d-block d-md-table-cell">
          <input type="text" className="form-control" value={''}/>
        </td>
      </tr>

      <tr className="d-block d-md-table-row">
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Dr. Advice:</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Personal:</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
      </tr>

      <tr className="d-block d-md-table-row">
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Inv. Remarks:</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
        <td className="fw-bold bg-light rounded d-block d-md-table-cell">Nutritional:</td>
        <td className="d-block d-md-table-cell"><input type="text" className="form-control" value={''} /></td>
      </tr>
    </tbody>
  </table>




        </div>







    </div>)
}