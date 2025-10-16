import Header from "../homepage/Header";
import { useState, useRef  } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function AddDoctor()
{
    const [name,setName]=useState('');
    const [department,setDepartment]=useState('');
    const [designation,setDesignation]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddrss]=useState('');
    const [state,setState]=useState('');
    const [city,setCity]=useState('');
    const [uploadReport,setUploadReport]=useState('');

     const fileInputRef = useRef(null);


    const handleSubmit=async()=>{
        var body={
            'name':name,
            'department':department,
            'designation':designation,
            'mobile':mobile,
            'email':email,
            'address':address,
            'state':state,
            'city':city,
            'uploadReport':uploadReport,
            'updated_at': currentDate(),
        }

        const response=await postData('',body);
          if (response.status) 
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Doctor Data Submit Successfully",
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

    }

    function resetData()
    {
        setName('');
        setDepartment('');
        setDesignation('');
        setMobile('');
        setEmail('');
        setAddrss('');
        setState('');
        setCity('');

        setUploadReport('');
         if (fileInputRef.current)
            {
                fileInputRef.current.value = ""; // <-- clear file input
            }
    }



    return(<div>
        <div>
            <Header/>
        </div>

       <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 700, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

                <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Full Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" placeholder="Enter Full Name"/>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Department</label>
                        <input value={department} onChange={(e)=>setDepartment(e.target.value)} type="text" class="form-control" placeholder="Enter Department Name"/>
                    </div>     
  
                </div>


                 <div className="row"> 
                   <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Designation</label>
                        <input value={designation} onChange={(e)=>setDesignation(e.target.value)} type="text" class="form-control" placeholder="Enter Designation Name"/>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Mobile no.</label>
                        <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" class="form-control" placeholder="Enter Mobile no."/>
                    </div>

                </div>


                 <div className="row">
                     <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" placeholder="Enter Email Address"/>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Address</label>
                        <textarea rows='1' value={address} onChange={(e)=>setAddrss(e.target.value)} type="text" class="form-control" placeholder="Enter Address"/>
                    </div>
                    
                </div>
                

                 <div className="row">
                     <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">State</label>
                        <input value={state} onChange={(e)=>setState(e.target.value)} type="text" class="form-control" placeholder="Enter State"/>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">City</label>
                        <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" class="form-control" placeholder="Enter City"/>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="from-control m-1 ms-3 fw-bold ms-3" style={{fontSize:18}}>Upload Report</label>
                        <input  ref={fileInputRef} class="form-control" type="file" id="formFile" onChange={(e)=>setUploadReport(e.target.files[0])}/>
                    </div>
                </div>


                <div className="row mt-3">
                  <div className="col-6 d-flex justify-content-center">
                    <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
                 </div>

                  <div className="col-6 d-flex justify-content-center">
                    <button onClick={resetData} type="reset" className="btn btn-primary">clear</button>
                  </div>
            
           </div>




                
            </div>

        </div>
    </div>)
}