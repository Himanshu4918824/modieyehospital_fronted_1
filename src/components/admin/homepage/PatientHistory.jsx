export default function PatientHistory()
{
    return(<div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',fontWeight:'bold'}}>
           <div style={{width:'120px',border:'1px solid',borderRadius:5,background:'lightgrey'}}>Gonioscopy</div>
           <div style={{width:'120px',border:'1px solid',borderRadius:5,margin:10,background:'lightgrey'}}>Retinoscopy</div>
        </div>


        <div className="table-responsive mb-3">
            <table className="table table-bordered border-dark w-100 text-center" border={2} cellSpacing={2} cellPadding={6}>
              <thead>
                  <tr className="table-secondary">
                    <th style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}>Complaint</th>
                    <th style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}>From</th>
                    <th style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}>Unit</th>
                    <th style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}>Site</th>
                  </tr>
              </thead>
              <tbody>
                 <tr>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                 </tr>

                 <tr>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                 </tr>

                 <tr>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                   <td style={{ borderColor: '#212529', borderWidth: '2px', borderStyle: 'solid' }}></td>
                 </tr>
    
              </tbody>
            </table>
        </div>


        <div className="table-responsive mb-3">
           <table className="table table-bordered border-dark w-100 text-center align-middle">
             <thead>
               <tr className="table-secondary">
                  <th className="text-start fw-bold">Aryaman ***</th>
                  <th>Right</th>
                  <th>Left</th>
                  <th>Right</th>
                  <th>Left</th>
                 </tr>
              </thead>
              <tbody>
                <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Unaided</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                 <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">With Glass</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">With Pinhole</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Best Correct</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">With CL</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">IOP</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>  
              </tbody>

            </table>
        </div>


       <div className="d-flex align-items-center mb-2">
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: 120, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}> OP Remarks. </div>
         <input type="text" className="form-control" style={{ maxWidth: '100%' }} />
       </div>


         <div className="table-responsive mb-3">
           <table className="table table-bordered border-dark w-100 text-center align-middle">
             <thead>
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
                  <td className=" bg-light text-start fw-medium">Distance</td>
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


        <div className="d-flex align-items-center mb-2 ">   
         <input type="checkbox"/>
         <div className=" bg-lightgrey fw-bold text-center me-3" style={{ width: 140, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize:13}}> PMT Done </div>

         <input type="checkbox"/>
         <div className=" bg-lightgrey fw-bold text-center me-2" style={{ width: 120, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',fontSize:14 }}> G.P. </div>

         <div className=" bg-lightgrey fw-bold text-center me-3">GL</div>
         <input type="text" className="form-control" style={{ maxWidth: '500px',marginRight:5 }} />

          <div className=" bg-lightgrey fw-bold text-center me-3" style={{margin:2}}>GP Advice</div>
         <input type="text" className="form-control" style={{ maxWidth: '500px' }} />
       </div>


        <div className="d-flex align-items-center mb-2 " style={{border:'1px solid',fontSize:12}}>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Examination Help</div>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '180px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Load Normal Finding</div>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Load Template</div>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Transform Optom</div>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Drawing</div>
         <div className="border rounded bg-light fw-bold text-center me-2" style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>D</div>
       </div>

       
        <div className="table-responsive mb-3">
           <table className="table table-bordered border-dark w-100 text-center align-middle">
             <thead>
               <tr className="table-secondary border border-dark ">
                  <th className="text-start fw-bold">Examination C</th>
                  <th>Right</th>
                  <th>C-R</th>
                  <th>Left</th>
                  <th>C-L</th>
                  <th>BE</th>
                 </tr>
              </thead>
              <tbody>
                <tr className="border border-dark">
                  <td className=" bg-light text-start fw-medium">Conjunctiva</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                 <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Cornea</td>
                 <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Anterior Chamber</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                 <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Pupil</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                 <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Lens</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Fundus</td>
                  <td ></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 </tr>

                  <tr className="border border-dark">
                  <td className="bg-light text-start fw-medium">Ocular Movements</td>
                  <td ></td>
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

        
    </div>)
}