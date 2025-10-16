import { useState,useRef } from "react";
import Header from "../homepage/Header";
import { useNavigate } from "react-router-dom";
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function DisplayDoctor()
{

  const data =[{seq:"1",name:'Himanshu',department:'Retina',destination:'	Administrator',mobile:'4561987326',email:'him@gmil.com',address:'gola',state:'mp',city:'gwalior'},
      {seq:"1",name:'Himanshu',department:'Retina',destination:'	Administrator',mobile:'4561987326',email:'him@gmil.com',address:'gola',state:'mp',city:'gwalior'},
      {seq:"1",name:'Himanshu',department:'Retina',destination:'	Administrator',mobile:'4561987326',email:'him@gmil.com',address:'gola',state:'mp',city:'gwalior'},
      {seq:"1",name:'Himanshu',department:'Retina',destination:'	Administrator',mobile:'4561987326',email:'him@gmil.com',address:'gola',state:'mp',city:'gwalior'},
      {seq:"1",name:'Himanshu',department:'Retina',destination:'	Administrator',mobile:'4561987326',email:'him@gmil.com',address:'gola',state:'mp',city:'gwalior'},
      

    ]

  const navigate=useNavigate();
  const [showDialog,setShowDialog]=useState(false);
  const fileInputRef = useRef(null);

  /******************Doctor Action *******************/
    const [name,setName]=useState('');
    const [department,setDepartment]=useState('');
    const [designation,setDesignation]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddrss]=useState('');
    const [state,setState]=useState('');
    const [city,setCity]=useState('');
    const [uploadReport,setUploadReport]=useState('');
  /*******************************************************/
  

    const openDailog=()=>{
      setShowDialog(true)
    }

    const closeDailog=()=>{
      setShowDialog(false)
    }


    const DoctorForm=()=>{
      return(<div>
        <div style={{ width: '100%'}}>
          <div style={{ width: '100%', background: '#f7f1e3', padding: 10, borderRadius: 10 }}>

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
                    <button onClick={handleEditSubmit}  type="button" className="btn btn-primary">Edit</button>
                 </div>

                  <div className="col-6 d-flex justify-content-center">
                    <button onClick={handleDeleteDoctor} type="button" className="btn btn-primary">Delete</button>
                  </div>
            
           </div>


        </div>

      </div>
      </div>)
    }


    const handleEditSubmit=async()=>{
      var formData=new FormData();

      formData.append('name',name);
        formData.append('department',department);
        formData.append('designation',designation);
        formData.append('mobile',mobile);
        formData.append('email',email);
        formData.append('address',address);
        formData.append('state',state);
        formData.append('city',city);
        formData.append('uploadReport',uploadReport);
        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

         const response=await postData('',formData);
           if (response.status) 
             {
                Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Doctor Edit Submit Successfully",
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
    

     const handleDeleteDoctor = async () => {

    Swal.fire({
      title: "Do you want to Delete the category?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "delete",
      denyButtonText: `Don't delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        DoctorDelete()

      } else if (result.isDenied) {
        Swal.fire("Category  not change", "", "info");
      }
    });
  }

  const DoctorDelete=async()=>{
     var body = {
      doctorid: doctorId,
    }

    var result = await postData('', body)

    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Doctor Delete Successfully",
        showConfirmButton: false,
        timer: 2000
      });
    }
    else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000
      });
    }

  }




    const renderModal=()=>{
      if(!showDialog) return null;

      return(<div>
        <div className="modal show d-flex" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 720, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 'auto', width: 820 }}>
              <div className="modal-header h4">
                Add Doctor
                <button type="button" className="btn-close" onClick={closeDailog}></button>
              </div>

              <div className="modal-body">
                {DoctorForm()}
              </div>

            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>

      </div>)
    }


    return(<div>
      {renderModal()}
        <div>
            <Header/>
        </div>

        <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-secondary">
            <tr>
              <th className="text-center">Seq</th>
              <th className="text-center">Doctor Name</th>
              <th className="text-center">Department</th>
              <th className="text-center">Destination</th>
              <th className="text-center">Mobile no.</th>
              <th className="text-center">Email</th>
              <th className="text-center">Address</th>
              <th className="text-center">State</th>
              <th className="text-center">City</th>
              <th className="text-center">Edit Data</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ? (

                data.map((item, i) => {
                  return (<tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.department}</td>
                    <td className="text-center">{item.destination}</td>
                    <td className="text-center">{item.mobile}</td>
                    <td className="text-center">{item.email}</td>
                    <td className="text-center">{item.address}</td>
                    <td className="text-center">{item.state}</td>
                    <td className="text-center">{item.city} </td>
                    <td className="text-center">
                      <button onClick={openDailog} className="bg-warning px-3 text-uppercase text-white rounded border border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    </td>
                  </tr>
                  )
                }
                )
              )
                : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>

    </div>)
}