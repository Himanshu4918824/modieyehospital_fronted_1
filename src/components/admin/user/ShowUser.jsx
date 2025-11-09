import MainContext from "../../../context/MainContext";
import { putData } from "../../../services/FetchNodeAdminServices";
import Header from "../homepage/Header";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ShowUser() {

  const [showDialog, setShowDialog] = useState(false);
  const { allUsers, getAllUser } = useContext(MainContext)
  const [role, setRole] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwoard, setPasswoard] = useState('');
  const [confirmPasswoard, setConfirmPasswoard] = useState('');
  const [staff, setStaff] = useState('');
  const [empStatus, setEmpStatus] = useState('');

  useEffect(() => {
    getAllUser();
  }, [])


  const UserForm = () => {
    return (<div>
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%', background: '#f7f1e3', padding: 10, borderRadius: 10 }}>

          <div className="row">
            <div className="col-lg-6 col-xs-12 mb-3 d-flex flex-column">
              <label className="form-label fw-bold ms-3">Role</label>
              <select className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}

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
              <input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} type="text" class="form-control" placeholder="Enter Employee Id" />
            </div>

          </div>

          <div className="row">
            <div className="col-lg-6 col-xs-12 mb-3">
              <label className="form-label fw-bold ms-3">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Enter Full Name" />
            </div>

            <div className="col-lg-6 col-xs-12 mb-3">
              <label className="form-label fw-bold ms-3">Mobile no.</label>
              <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" class="form-control" placeholder="Enter Mobile no." />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-xs-12 mb-3">
              <label className="form-label fw-bold ms-3">Passwoard</label>
              <input value={passwoard} onChange={(e) => setPasswoard(e.target.value)} type="text" class="form-control" placeholder="Enter Passwoard" />
            </div>

            <div className="col-lg-6 col-xs-12 mb-3">
              <label className="form-label fw-bold ms-3">Confirm Passwoard</label>
              <input value={confirmPasswoard} onChange={(e) => setConfirmPasswoard(e.target.value)} type="text" class="form-control" placeholder="Enter Confirm Passwoard." />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-xs-12 mb-3 d-flex flex-column">
              <label className="form-label fw-bold ms-3">Staff</label>
              <select className="form-select"
                value={staff}
                onChange={(e) => setStaff(e.target.value)}
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
                onChange={(e) => setEmpStatus(e.target.value)}
              >
                <option selected value="">Select-Status</option>
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
          </div>



          <div className="row mt-3">
            <div className="col-6 d-flex justify-content-center">
              <button type="Submit" className="btn btn-primary">Edit</button>
            </div>

            <div className="col-6 d-flex justify-content-center">
              <button type="reset" className="btn btn-primary">Delete</button>
            </div>

          </div>


        </div>
      </div>

    </div>)
  }

  const openDailog = () => {
    setShowDialog(true);
  }

  const closeDailog = () => {
    setShowDialog(false);
  }


  const renderModal = () => {
    if (!showDialog) return null;

    return (<div>
      <div className="modal show d-flex" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 720, width: "92%", minHeight: 100 }} >
          <div className="modal-content" style={{ minHeight: 400, height: 'auto', width: 820 }}>
            <div className="modal-header h4">
              Add user
              <button type="button" className="btn-close" onClick={closeDailog}></button>
            </div>

            <div className="modal-body">
              {UserForm()}
            </div>

          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>

    </div>)
  }

  const handleEditSubmit = async () => {

    var body = {
      'role': role,
      'employeeid': employeeId,
      'name': name,
      'mobile': mobile,
      'password': password,
      'confirmPassword': confirmPassword,
      'staff': staff,
      'empstatus': empStatus
    };

    var result = await putData('/', body);
    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Edit Submit Successfully",
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

  }

  const handleUserDoctor = async () => {
    Swal.fire({
      title: "Do you want to Delete the user?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`
    }).then((result) => {
      if (result.isConfirmed) {
        UserDelete();
      } else if (result.isDenied) {
        Swal.fire("User not deleted", "", "info");
      }
    });
  };


  const UserDelete = async () => {
    const body = {
      userId: UserId
    };

    const result = await deleteData("/", body);

    if (result?.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Delete Successfully",
        showConfirmButton: false,
        timer: 2000
      });

      closeDailog();

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
            <th className="text-center">Seq</th>
            <th className="text-center">Name</th>
            <th className="text-center">Employee Id</th>
            <th className="text-center">Mobile no.</th>
            <th className="text-center">Department</th>
            <th className="text-center">Employee Status</th>
            <th className="text-center">Edit </th>
          </tr>
        </thead>
        <tbody>
          {
            allUsers.length > 0 ? (

              allUsers.map((item, i) => {
                return (<tr key={i}>

                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.FullName}</td>
                  <td className="text-center">{item.id}</td>
                  <td className="text-center">{item.Phone}</td>
                  <td className="text-center">{item.Department}</td>
                  <td className="text-center">{item.Designation}</td>
                  <td className="text-center">
                    <button onClick={openDailog} className="bg-warning px-3 text-uppercase text-white rounded border border-0">Update</button>
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