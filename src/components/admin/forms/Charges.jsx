import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Charges({onClose, onRefresh})
{
    const [particular,setParticular]=useState('');
    const [amount,setAmount]=useState('');


    function resetData()
    {
        setParticular('')
        setAmount('');

        onClose();
        onRefresh();
    }



    const handleSubmit=async()=>{
        var formData=new FormData()
        formData.append('particular',particular);
        formData.append('amount',amount);

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

                   resetData();
                   onClose();
                   onRefresh();
                   

    }


    return(<div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <div style={{width:500, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

           <div class="mb-3">
                <label className="form-label ms-2 fw-bold">Particular</label>
                <input value={particular} onChange={(e)=>setParticular(e.target.value)} type="text" class="form-control" placeholder="Type Particular....."/>
            </div>

           <div class="mb-3">
                <label className="form-label ms-2 fw-bold">Amount</label>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" class="form-control" placeholder="Enter Amount..."/>
            </div>


           <div className="row">
            <div className="col-6 d-flex justify-content-center">
                <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
            </div>

             <div className="col-6 d-flex justify-content-center">
                <button onClick={resetData} type="reset" className="btn btn-primary">Edit</button>
            </div>
            
           </div>



        </div>

    </div>)
}