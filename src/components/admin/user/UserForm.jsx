import { useState } from "react";
import Header from "../homepage/Header";
import { postData } from "../../../services/FetchNodeAdminServices";

export default function UserForm()
{
    const [role,setRole]=useState('');
    const [employeeId,setEmployeeId]=useState('');
    const [name,setName]=useState('');
    const [mobile,setMobile]=useState('');
    const [passwoard,setPasswoard]=useState('');
    const [confirmPasswoard,setConfirmPasswoard]=useState('');
    const [staff,setStaff]=useState('');
    const [empStatus,setEmpStatus]=useState('');

    const handleSubmit=async()=>{
        var formData=new FormData();

        formData.append('role',role);
        formData.append('employeeId',employeeId);
        formData.append('name',name);
        formData.append('mobile',mobile)
        formData.append('passwoard',passwoard);
        formData.append('employeeId',employeeId)
        formData.append('confirmPasswoard',confirmPasswoard);
        formData.append('staff',staff);
        formData.append('empStatus',empStatus)

        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        var result= await postData('/',formDataObj);
         if (result.status) 
                    {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Submit Successfully",
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
        setRole('');
        setEmployeeId('');
        setName('');
        setMobile('');
        setPasswoard('');
        setConfirmPasswoard('');
        setStaff('');
        setEmpStatus('')
    }


    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 700, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

                 <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3 d-flex flex-column">
                        <label className="form-label fw-bold ms-3">Role</label>
                        <select className="form-select"
                                 value={role}
                                 onChange={(e)=>setRole(e.target.value)}
                        
                        >
                            <option selected>Select-Role</option>
                            <option value="Super Admin">Super Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="EDF Staff">EDF Staff</option>
                            <option value="App User">App User</option>
                        </select>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Employee Id</label>
                        <input value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)} type="text" class="form-control" placeholder="Enter Employee Id"/>
                    </div>     
  
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Full Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" placeholder="Enter Full Name"/>
                    </div>

                     <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Mobile no.</label>
                        <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" class="form-control" placeholder="Enter Mobile no."/>
                    </div>
                </div>

                  <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Passwoard</label>
                        <input value={passwoard} onChange={(e)=>setPasswoard(e.target.value)} type="text" class="form-control" placeholder="Enter Passwoard"/>
                    </div>

                     <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Confirm Passwoard</label>
                        <input value={confirmPasswoard} onChange={(e)=>setConfirmPasswoard(e.target.value)} type="text" class="form-control" placeholder="Enter Confirm Passwoard."/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-xs-12 mb-3 d-flex flex-column">
                        <label className="form-label fw-bold ms-3">Staff</label>
                       <select className="form-select"
                                value={staff}
                                onChange={(e)=>setStaff(e.target.value)}
                       >
                            <option selected>Select-Staff</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3 d-flex flex-column">
                        <label className="form-label fw-bold ms-3">Employee Status</label>
                        <select className="form-select"
                                 value={empStatus}
                                 onChange={(e)=>setEmpStatus(e.target.value)}
                        >
                            <option selected value="">Select-Status</option>
                            <option value="Enabled">Enabled</option>
                            <option value="Disabled">Disabled</option>
                        </select>
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