import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Diagnosis()
{

    const [leftEye,setLeftEye]=useState('');
    const [rightEye,setRightEye]=useState('');
    const [systemic,setSystemic]=useState('');
    const [other,setOther]=useState('');

    const handleSubmit=async()=>{
        var formData=new FormData();

        formData.append('lefteye',leftEye);
        formData.append('righteye',rightEye);
        formData.append('systemic',systemic);
        formData.append('other',other);
        
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
        setLeftEye('');
        setRightEye('');
        setSystemic('');
        setOther('')
    }



    return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

            <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                    <div style={{fontSize:16,fontWeight:'bold',margin:10}}>Right Eye</div>
                    <input type="text" className="form-control" value={rightEye} onChange={(e)=>setRightEye(e.target.value)} fullwidth/>
                </div>

                <div className="col-12 col-lg-6 mb-3">
                   <div style={{fontSize:16,fontWeight:'bold',margin:10}}>Left Eye</div>
                    <div><input type="text" className="form-control" value={leftEye} onChange={(e)=>setLeftEye(e.target.value)}/></div>
                </div>
            </div>

            <div>
                <div style={{margin:6,fontSize:16,fontWeight:500}}>Systemic</div>
              <div className="mb-2">
                <textarea className="form-control" value={systemic} onChange={(e)=>setSystemic(e.target.value)} rows="3" placeholder="Add Systemic...."></textarea> 
              </div>
            </div>


            <div>
                <div style={{margin:6,fontSize:16,fontWeight:500}}>Other</div>
              <div className="mb-2">
                <textarea className="form-control" value={other} onChange={(E)=>setOther(e.target.value)} rows="3" placeholder="Add Other...."></textarea> 
              </div>
            </div>


            <div className="row mb-2 mt-3">
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