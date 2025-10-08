import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function BookAppoint(props) {
    const { getAllPatients, allPatients, getAllDoctors, allDoctors } = useContext(MainContext)
    const [patient, setPatient] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        getAllPatients()
        getAllDoctors()
    }, [])

    function resetData() {
        setPatient('');
        setDoctor('');
        setDate('');
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('P_id', patient);
        formData.append('D_id', doctor);
        formData.append('date', new Date(date).toISOString());

        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value
        })
        const result = await postData('v1/appointment/createAppointment', formDataObj);

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

        //resetData()

    }

    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

            <div className="row" style={{ marginBottom: 5 }}>
                <div className="col-xs-12">

                    <label style={{ fontSize: 15, color: '#000', margin: 5 }}>Appointment For Registered Patients  (पंजीकृत मरीज चुने)</label>
                    <select className="form-select"
                        value={patient}
                        onChange={(e) => setPatient(e.target.value)}
                        required

                    >
                        <option value=''>Select-Patient</option>
                        {allPatients.map((item, i) => {
                            return (
                                <option key={i} value={item.id}>{item.FullName}</option>
                            )
                        })
                        }
                    </select>

                </div>
            </div>

            <div className="row" style={{ marginBottom: 5 }}>
                <div className="col-xs-12">

                    <label style={{ fontSize: 15, color: '#000', margin: 5 }}>Appointment with Doctor  ( डॉक्टर चुने )</label>
                    <select className="form-select"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        required

                    >
                        <option value=''>Select-Doctor</option>
                        {/* {console.log(allDoctors)} */}
                        {allDoctors.map((item, i) => {
                            return (
                                <option key={i} value={item.id}>{item.FullName}</option>
                            )
                        })
                        }
                    </select>

                </div>
            </div>

            <div className="row mb-10" >
                <div className="col-xs-12">

                    <label style={{ fontSize: 15, color: '#000', margin: 5 }}>Appointment Date  (परीक्षण भेंट दिनांक)</label>
                    <input type="date" required className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>
            <div className="row mb-10" >
                <div className="col-xs-12">

                    <label style={{ fontSize: 15, color: '#000', margin: 5 }}>Complaint </label>
                    <input type="text" required placeholder="Enter your complaint here..." className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>

            <div className="row" style={{ marginBottom: 5, marginTop: 20 }}>
                <div className="col-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">Book Now</button>
                </div>

                <div className="col-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button type="button" onClick={resetData} className="btn btn-primary">Cancel</button>
                </div>

            </div>







        </div>

    </div>)
}