import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Advice()
{
    const [details,setDetails]=useState('');
    const [type,setType]=useState('');

    function resetData()
    {
        setDetails('');
        setType('');
    }

    const handleSubmit=async()=>{
        var formData=new FormData()
        formData.append('type',type);
        formData.append('details',details);
        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

        var result=await postData('',formData);

       
               if (result.status) {
                       Swal.fire({
                           position: "top-end",
                           icon: "success",
                           title: "Category Submit Successfully",
                           showConfirmButton: false,
                           timer: 2000
                       });
                   }
                   else {
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


    return(<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

            <div className="mb-3">
                <select  className='form-select'
                          value={type}
                          onChange={(e)=>setType(e.target.value)}
                >

                    <option value={'-Select-Type-'}>-Select-Type-</option>
                    <option value={'Investigation (Ocular)'}>Investigation (Ocular)</option>
                    <option value={'Investigation (Systemic)'}>Investigation (Systemic)</option>
                    <option value={'Medicines'}>Medicines</option>
                    <option value={'Glasses'}>Glasses</option>
                    <option value={'Contact Lens'}>Contact Lens</option>
                    <option value={'Laser'}>Laser</option>
                    <option value={'Injection'}>Injection</option>
                    <option value={'Surgery'}>Surgery</option>
                    <option value={'Referral'}>Referral</option>
                    <option value={'Other'}>Other</option>

                </select>
            </div>

            <div className="mb-3">
                <textarea value={details} onChange={(e)=>setDetails(e.target.value)} className="form-control" rows="3" placeholder="Type Details...."></textarea>
           </div>

           <div className="row">
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