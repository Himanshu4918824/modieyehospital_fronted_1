import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Complaint()
{
    const [complain,setComplain]=useState('');

    function resetData()
    {
        setComplain('')
    }

    const handleSubmit=async()=>{
        var formData=new FormData()
        formData.append('complain',complain);
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


    return(<div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

            <div class="mb-3">
                <textarea value={complain} onChange={(e)=>setComplain(e.target.value)} className="form-control" rows="3" placeholder="Add Compaint"></textarea>
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