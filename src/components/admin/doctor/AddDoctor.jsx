import Header from "../homepage/Header";
import { useState, useRef } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

export default function AddDoctor() {
    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddrss] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [Pwd, setPwd] = useState('');
    const [Gender, setGender] = useState('');
    const [uploadReport, setUploadReport] = useState('');
    const [area, setArea] = useState('')

    const fileInputRef = useRef(null);


    const handleSubmit = async () => {
        const body = {
            "FullName": name,
            "Department": department,
            "Designation": designation,
            "Phone": mobile,
            "email": email,
            "Address": address,
            "State": state,
            "City": city,
            "Password": Pwd,
            "branch": area,
            "Gender": Gender
            // 'uploadReport':uploadReport,
        }
        const response = await postData('doctor/api/v1/addDoctor', body);
        localStorage.setItem('branch', response.branch);
        if (response.status) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Doctor Data Submit Successfully",
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

    function resetData() {
        setName('');
        setDepartment('');
        setDesignation('');
        setMobile('');
        setEmail('');
        setAddrss('');
        setState('');
        setCity('');

        setUploadReport('');
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // <-- clear file input
        }
    }



    return (<div>
        <div>
            <Header />
        </div>

        <div onClick={() => navigate('/displaydoctor')} style={{ marginLeft: '90%', marginTop: 7 }}>
            <button type="button" className="btn btn-secondary">Show Doctor List</button>
        </div>

        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
            <div style={{ width: 700, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

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
                        <select className="form-select"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            defaultValue="Select-Role"
                        >
                            <option value="Select-Role">Select-Role</option>
                            <option value="CONSULTANT">CONSULTANT</option>
                            <option value="Admin">Admin</option>
                            <option value="Front_Desk">Front Desk</option>
                            <option value="Receptionist">Receptionist</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Developer">Developer</option>
                        </select>
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
                        <label className="form-label fw-bold ms-3">Password</label>
                        <input value={Pwd} onChange={(e) => setPwd(e.target.value)} type="email" className="form-control" placeholder="Enter Email Address" />
                    </div>

                    <div className="col-lg-6 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Gender</label>
                        <select className="form-select"
                            value={Gender}
                            onChange={(e) => setGender(e.target.value)}
                            defaultValue="Select Gender"
                        >
                            <option value="Select Gender">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
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

                    {designation == 'Receptionist' ?
                        <div className="col-lg-6 col-xs-12 mb-3">
                            <label className="form-label fw-bold ms-3">Receptionist</label>
                            <select className="form-select"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                defaultValue="Select Receptionist"
                            >
                                <option value="Select Receptionist Area">Select Receptionist Area</option>
                                <option value="GovindPuri">GovindPuri</option>
                                <option value="Madhav Plaza">Madhav Plaza</option>
                                <option value="Dabara">Dabra</option>
                            </select>
                        </div> : <></>}
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