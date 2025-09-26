import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Payment()
{
    const [particular,setParticular]=useState('');
    const [amount,setAmount]=useState('');
    const [paymentMethod,setPaymentMethod]=useState('')


    function resetData()
    {
        setParticular('')
        setAmount('');
        setPaymentMethod('')
    }



    const handleSubmit=async()=>{
        var formData=new FormData()
        formData.append('particular',particular);
        formData.append('amount',amount);
        formData.append('paymentmethod',paymentMethod);

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
         <div style={{width:500, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

           <div class="mb-3">
                <label className="form-label ms-2 fw-bold">Particular:</label>
                <input value={particular} onChange={(e)=>setParticular(e.target.value)} type="text" class="form-control" placeholder="Type Paid Particular....."/>
            </div>

           <div class="mb-3">
                <label className="form-label ms-2 fw-bold">Received Amount:</label>
                <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" class="form-control" placeholder="Enter Received Amount..."/>
            </div>

             <div class="mb-3">
                <label className="form-label ms-2 fw-bold">By Cash/Card/Cheque No.:</label>
                <input value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} type="text" class="form-control" placeholder="Enter Cash/Card/Cheque No..."/>
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