import { useState } from "react";
import { postData, currentDate } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Signup() {

  const [name,setName]=useState('');
  const [registed,setRegisted]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [conformPassword,setConformPassword]=useState('');

  const handleSubmit=async()=>{
    var formData=new FormData()
    formData.append('name',name);
    formData.append('registed',registed);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('conformPassword',conformPassword);
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


  }


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Registed As</label>
            <input type="text" className="form-control" placeholder="Enter Your Role" value={registed} onChange={(e)=>setRegisted(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Re-enter password" value={conformPassword} onChange={(e)=>setConformPassword(e.target.value)} />
          </div>

          <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
