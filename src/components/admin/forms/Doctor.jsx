import { useState } from "react"
import { currentDate } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Doctor()
{
    const [name,setName]=useState('')
    const [consultationOne,setConsultationOne]=useState('');
    const [consultationTwo,setConsultationTwo]=useState('');
    const [consultationThree,setConsultationThree]=useState('');
    const [consultationFour,setConsultationFour]=useState('');
    const [consultationFive,setConsultationFive]=useState('');

    


    const handleSubmit=async()=>{
        var formData=new FormData();

        formData.append('name',setName);
        formData.append('consultationone',consultationOne);
        formData.append('consultationtwo',consultationTwo);
        formData.append('consultationthree',consultationThree);
        formData.append('consultationfour',consultationFour);
        formData.append('consultationfive',consultationFive);

        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

         var result=await postData('',formData)
        if(result.status)
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
        setConsultationFive('');
        setConsultationFour('');
        setConsultationThree('');
        setConsultationTwo('');
        setConsultationOne('');
        setName('')

    }



    return(<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <div style={{width:700, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

             <div className="row">
                <div className="col-12 col-lg-4 mb-2">
                    <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Primary Doctor</div>
                        <select  className='form-select'
                                    value={name}
                                     onChange={(e)=>setName(e.target.value)}
                         >

                            <option value={'Select-Doctor'}>Select-Doctor</option>
                            <option value={'Dr.Ankit Patikar'}>Dr.Ankit Patikar</option>
                            <option value={'Dr.Himanshu Sharna'}>Dr.Himanshu Sharna</option>
                            <option value={'Dr.Kartik Gangil'}>Dr.Kartik Gangil</option>
                            
                         </select>
                    </div>


                    <div className="col-12 col-lg-4 mb-2">
                       <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Cross consultation 1</div>
                      <input type="text" className="form-control" value={consultationOne} onChange={(e)=>setConsultationOne(e.target.value)}/>
                    </div>


                     <div className="col-12 col-lg-4 mb-2">
                       <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Cross consultation 2</div>
                      <input type="text" className="form-control" value={consultationTwo} onChange={(e)=>setConsultationTwo(e.target.value)}/>
                    </div>
            </div>


            <div className="row mb-3">

                <div className="col-12 col-lg-4 mb-2">
                       <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Cross consultation 3</div>
                      <input type="text" className="form-control" value={consultationThree} onChange={(e)=>setConsultationThree(e.target.value)}/>
                    </div>

                    <div className="col-12 col-lg-4 mb-2">
                       <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Cross consultation 4</div>
                      <input type="text" className="form-control" value={consultationFour} onChange={(e)=>setConsultationFour(e.target.value)}/>
                    </div>

                    <div className="col-12 col-lg-4 mb-2">
                       <div style={{fontSize:16,fontWeight:'bold',margin:3,marginLeft:10}}>Cross consultation 5</div>
                      <input type="text" className="form-control" value={consultationFive} onChange={(e)=>setConsultationFive(e.target.value)}/>
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