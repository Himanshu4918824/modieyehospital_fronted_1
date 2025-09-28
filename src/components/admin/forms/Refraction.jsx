import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";

export default function Refraction()
{
    const [refraction,setRefraction]=useState('');
    const [leftEyeSPH,setLeftEyeSPH]=useState('');
    const [leftEyeCYL,setLeftEyeCYL]=useState('');
    const [leftEyeAXIS,setLeftEyeAXIS]=useState('')
    const [leftEyeVA,setLeftEyeVA]=useState('');

    const [rightEyeSPH,setRightEyeSPH]=useState('');
    const [rightEyeCYL,setRightEyeCYL]=useState('');
    const [rightEyeAXIS,setRightEyeAXIS]=useState('')
    const [rightEyeVA,setRightEyeVA]=useState('');


    const [nearLeftEyeSPH,setNearLeftEyeSPH]=useState('');
    const [nearLeftEyeCYL,setNearLeftEyeCYL]=useState('');
    const [nearLeftEyeAXIS,setNearLeftEyeAXIS]=useState('')
    const [nearLeftEyeVA,setNearLeftEyeVA]=useState('');

    const [nearRightEyeSPH,setNearRightEyeSPH]=useState('');
    const [nearRightEyeCYL,setNearRightEyeCYL]=useState('');
    const [nearRightEyeAXIS,setNearRightEyeAXIS]=useState('')
    const [nearRightEyeVA,setNearRightEyeVA]=useState('');


    const handleSubmit=async()=>{
        var formData= new FormData();
//Distance......

        formData.append('refraction',refraction);
        formData.append('leftEyeSPH',leftEyeSPH);
        formData.append('leftEyeCYL',leftEyeCYL);
        formData.append('leftEyeAXIS',leftEyeAXIS);
        formData.append('leftEyeVA',leftEyeVA);

        formData.append('rightEyeSPH',rightEyeSPH);
        formData.append('rightEyeCYL',rightEyeCYL);
        formData.append('rightEyeAXIS',rightEyeAXIS);
        formData.append('rightEyeVA',rightEyeVA);

//Near.....

        formData.append('nearleftEyeSPH',nearLeftEyeSPH);
        formData.append('nearleftEyeCYL',nearLeftEyeCYL);
        formData.append('nearleftEyeAXIS',nearLeftEyeAXIS);
        formData.append('nearleftEyeVA',nearLeftEyeVA);

        formData.append('nearrightEyeSPH',nearRightEyeSPH);
        formData.append('nearrightEyeCYL',nearRightEyeCYL);
        formData.append('nearrightEyeAXIS',nearRightEyeAXIS);
        formData.append('nearrightEyeVA',nearRightEyeVA);

        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

        var result=await postData('',formData);
         if (result.status) 
                        {
                           Swal.fire({
                               position: "top-end",
                               icon: "success",
                               title: "Category Submit Successfully",
                               showConfirmButton: false,
                               timer: 2000
                                           });
                                       }
                         else 
                            {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "error",
                                    title: "Your work has been not saved",
                                    showConfirmButton: false,
                                    timer: 2000
                                           });
                              }
                    
 resetData()

    }

    function resetData()
    {
        setRefraction('');
        setLeftEyeSPH('');
        setRightEyeSPH('');
        setLeftEyeCYL('');
        setRightEyeCYL('');
        setLeftEyeAXIS('');
        setRightEyeAXIS('');
        setLeftEyeVA('');
        setRightEyeVA('');

        setNearLeftEyeSPH('');
        setNearRightEyeSPH('');
        setNearLeftEyeCYL('');
        setNearRightEyeCYL('');
        setNearLeftEyeAXIS('');
        setNearRightEyeAXIS('');
        setNearLeftEyeVA('');
        setNearRightEyeVA('');

    }


    return(<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:900, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

            <div className="mb-3">
              <select className="form-select" 
                      value={refraction}
                      onChange={(e)=>setRefraction(e.target.value)}
                 >
                 <option defaultValue>Select Refraction</option>
                 <option value="Previous glass precription">Previous glass precription</option>
                 <option value="Autorefractometer">Autorefractometer</option>
                 <option value="Retinoscopy">Retinoscopy</option>
                 <option value="Cycloplegic Test ">Cycloplegic Test</option>
                 <option value="Postmydriatic Test">Postmydriatic Test</option>
                 <option value="Subjective">Subjective</option>
              </select>
            </div>

             <div className="row mb-3">
               <div className="col-12 col-md-6 text-center fw-bold mb-2 mb-md-0">Right Eye</div>
               <div className="col-12 col-md-6 text-center fw-bold">Left Eye</div>
             </div>

                <div className="row">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                       <div className="table-responsive">
                         <table className="table table-bordered align-middle mb-0">
                          <thead className="table-secondary">
                            <tr>
                              <th>Ref.</th>
                              <th>SPH</th>
                              <th>CYL</th>
                              <th>AXIS</th>
                              <th>VA</th>
                            </tr>
                          </thead>

                           <tbody>
                             <tr>
                               <td>Dist...</td>
                               <td><input value={rightEyeSPH} onChange={(e)=>setRightEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={rightEyeCYL} onChange={(e)=>setRightEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={rightEyeAXIS} onChange={(e)=>setRightEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={rightEyeVA}  onChange={(e)=>setRightEyeVA(e.target.value)} type="text" className="form-control" /></td>
                             </tr>

                             <tr>
                               <td>Near</td>
                               <td><input value={nearRightEyeSPH} onChange={(e)=>setNearRightEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearRightEyeCYL} onChange={(e)=>setNearRightEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearRightEyeAXIS} onChange={(e)=>setNearRightEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearRightEyeVA}  onChange={(e)=>setNearRightEyeVA(e.target.value)} type="text" className="form-control" /></td>
                             </tr>

                           </tbody>                       
                        </table>
                       </div>
                    </div>

                   <div className="col-12 col-md-6 mb-3">
                      <div className="table-responsive">
                        <table className="table table-bordered align-middle mb-0">
                          <thead className="table-secondary">
                            <tr>
                              <th>Ref.</th>
                              <th>SPH</th>
                               <th>CYL</th>
                               <th>AXIS</th>
                                <th>VA</th>
                            </tr>
                          </thead>

                           <tbody>
                             <tr>
                               <td>Dist..</td>
                               <td><input value={leftEyeSPH} onChange={(e)=>setLeftEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={leftEyeCYL} onChange={(e)=>setLeftEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={leftEyeAXIS} onChange={(e)=>setLeftEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={leftEyeVA}  onChange={(e)=>setLeftEyeVA(e.target.value)} type="text" className="form-control" /></td>
                             </tr>

                             <tr>
                               <td>Near</td>
                              <td><input value={nearLeftEyeSPH} onChange={(e)=>setNearLeftEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearLeftEyeCYL} onChange={(e)=>setNearLeftEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearLeftEyeAXIS} onChange={(e)=>setNearLeftEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                               <td><input value={nearLeftEyeVA}  onChange={(e)=>setNearLeftEyeVA(e.target.value)} type="text" className="form-control" /></td>
                             </tr>

                           </tbody>                       
                        </table>
                      </div>
                   </div>
               </div>

                <div className="row mb-2">
            <div className="col-6 d-flex justify-content-center">
                <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
            </div>

             <div className="col-6 d-flex justify-content-center">
                <button onClick={resetData} type="reset" className="btn btn-primary">Cancel</button>
            </div>
            
           </div>


        </div>
    </div>)
}