import { useState, useRef } from "react";
import Header from "../homepage/Header";
import { useNavigate } from "react-router-dom";
import { currentDate, deleteData, putData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

// eske andr handle submit ka function bna de jo add doctor krne k liye ho or doctordialog mai edit button and delete button condational render krvnae hai mtlb agr doctor id hai to edit or delete show krna hai agr nhi hai to add doctor ka button show krna hai

export default function DisplayDoctor() 
{
  const { getAllDoctors, allDoctors } = useContext(MainContext);


  useEffect(() => {
    getAllDoctors();
  }, [])

  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef(null);

  /******************Doctor Action *******************/
  const [doctorId, setDoctorId] = useState('')
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddrss] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [uploadReport, setUploadReport] = useState('');
  /*******************************************************/


  const openDailog = (doctor) => {
    setShowDialog(true);
    // console.log(doctor)
    setDoctorId(doctor?.id);
    setName(doctor?.FullName);
    setDepartment(doctor?.Department);
    setDesignation(doctor?.Designation);
    setMobile(doctor?.Phone);
    setEmail(doctor?.email);
    setAddrss(doctor?.Address);
    setState(doctor?.State);
    setCity(doctor?.City);
    setUploadReport(doctor?.uploadReport || "");
  }

  const closeDailog = () => {
    setShowDialog(false)
  }


  const DoctorForm = () => {
    // console.log(doctorId)
    return (
      <>
        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', background: '#f7f1e3', padding: 10, borderRadius: 10 }}>

            <div className="row">
              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Full Name" />
              </div>

              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Department</label>
                <input value={department} onChange={(e) => setDepartment(e.target.value)} type="text" className="form-control" placeholder="Enter Department Name" />
              </div>

            </div>


            <div className="row">
              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Designation</label>
                <input value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" className="form-control" placeholder="Enter Designation Name" />
              </div>

              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Mobile no.</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" className="form-control" placeholder="Enter Mobile no." />
              </div>

            </div>


            <div className="row">
              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email Address" />
              </div>

              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">Address</label>
                <textarea rows='1' value={address} onChange={(e) => setAddrss(e.target.value)} type="text" className="form-control" placeholder="Enter Address" />
              </div>

            </div>


            <div className="row">
              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">State</label>
                <input value={state} onChange={(e) => setState(e.target.value)} type="text" className="form-control" placeholder="Enter State" />
              </div>

              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="form-label fw-bold ms-3">City</label>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder="Enter City" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-xs-12 mb-3">
                <label className="from-control m-1 ms-3 fw-bold ms-3" style={{ fontSize: 18 }}>Upload Report</label>
                <input ref={fileInputRef} className="form-control" type="file" id="formFile" onChange={(e) => setUploadReport(e.target.files[0])} />
              </div>
            </div>


            <div className="row mt-3">
              <div className="col-6 d-flex justify-content-center">
                <button onClick={() => handleEditSubmit(doctorId)} type="button" className="btn btn-primary">Edit</button>
              </div>

              <div className="col-6 d-flex justify-content-center">
                <button onClick={handleDeleteDoctor} type="button" className="btn btn-primary">Delete</button>
              </div>

            </div>


          </div>

        </div>
      </>)
  }


  const handleEditSubmit = async (id) => {
    const body = {
      'FullName': name,
      'Department': department,
      'Designation': designation,
      'Phone': mobile,
      'email': email,
      'Address': address,
      'State': state,
      'City': city,
      'uploadReport': uploadReport,
      'updated_at': currentDate(),
    }

    const response = await putData(`doctor/api/v1/${id}`, body);
    if (response.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Doctor Edit Submit Successfully",
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

    getAllDoctors();

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
        Swal.fire("Category not change", "", "info");
      }
    });
  }

  const DoctorDelete = async () => {
    const body = {
      doctorid: doctorId,
    }

    const result = await deleteData(`doctor/api/v1/${id}`, { Authorization: localStorage.getItem('token') })
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




  const renderModal = () => {
    if (!showDialog) return null;

    return (
      <div>
        <div className="modal show d-flex" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 720, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 'auto', width: 820 }}>
              <div className="modal-header h4">
                Add Doctor
                <button type="button" className="btn-close" onClick={closeDailog}></button>
              </div>

              <div className="modal-body">
                {/* {DoctorForm()} */}
                <DoctorForm />
              </div>

            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>

      </div>)
  }


  return (<div>
    {renderModal()}
    <div>
      <Header />
    </div>

    <div className="table-responsive">
      <table className="table table-bordered table-sm">
        <thead className="table-secondary">
          <tr>
            <th className="text-center">SNo.</th>
            <th className="text-center">Doctor Name</th>
            <th className="text-center">Department</th>
            <th className="text-center">Designation</th>
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
            allDoctors.length > 0 ? (

              allDoctors.map((item, i) => {
                return (<tr key={i}>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.FullName}</td>
                  <td className="text-center">{item.Department}</td>
                  <td className="text-center">{item.Designation}</td>
                  <td className="text-center">{item.Phone}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.Address}</td>
                  <td className="text-center">{item.State}</td>
                  <td className="text-center">{item.City} </td>
                  <td className="text-center">
                    <button onClick={() => openDailog(item)} className="bg-warning px-3 text-uppercase text-white rounded border border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
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
    <div className="d-flex justify-content-center">
      <button onClick={()=>navigate('/adddoctor')} className="bg-primary rounded px-3 py-1 border-0">Add Doctor</button>
    </div>

  </div>
  )
}