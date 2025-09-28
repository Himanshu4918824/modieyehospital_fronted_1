import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function History()
{
    const [sysmetic,setSystemic]=useState('');
    const [treatment,setTreatment]=useState('');
    const [family,setFamily]=useState('');
    const [diet,setDiet]=useState('');

   const handleSubmit=async()=>{
    var formData=new FormData();

    formData.append('sysmetic',sysmetic);
    formData.append('treatment',treatment);
    formData.append('family',family);
    formData.append('diet',diet);
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
       setDiet('');
       setSystemic('');
       setTreatment('');
       setFamily('');

   }


    return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>
            
            <div className="row mb-2">
                <div className="col-xs-12">
                     <label style={{margin:2,marginLeft:10}}>Sysmetic Illness History</label>
                     <textarea value={sysmetic} onChange={(e)=>setSystemic(e.target.value)} className="form-control" rows="3" placeholder="Type Sysmetic Illness History......"></textarea>
                </div>
            </div>

             <div className="row mb-2">
                <div className="col-xs-12">
                     <label style={{margin:2,marginLeft:10}}>Treatment History</label>
                     <textarea value={treatment} onChange={(e)=>setTreatment(e.target.value)} className="form-control" rows="3" placeholder="Type Treatment History....."></textarea>
                </div>
            </div>

             <div className="row mb-2" >
                <div className="col-xs-12">
                     <label style={{margin:2,marginLeft:10}}>Family History</label>
                     <textarea value={family} onChange={(e)=>setFamily(e.target.value)} className="form-control" rows="3" placeholder="Type Family History....."></textarea>
                </div>
            </div>

             <div className="row mb-3">
                <div className="col-xs-12">
                     <label style={{margin:2,marginLeft:10}}>Diet History</label>
                     <textarea value={diet} onChange={(e)=>setDiet(e.target.value)} className="form-control" rows="3" placeholder="Type Diet History......"></textarea>
                </div>
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