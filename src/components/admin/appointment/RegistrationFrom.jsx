import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function RegistrationFrom() {
    const [name, setName] = useState('');
    const [MobileNumber, setMobileNumber] = useState('');
    const [Emgr_mobile_no, setEmgr_mobile_no] = useState(MobileNumber);
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [reffered, setReffered] = useState('');
    const [insurance, setInsurance] = useState('');
    const [Blood_group, setBloodGroup] = useState("Blood Group");

    const resetData = () => {
        setName('');
        setMobileNumber('');
        setGender('');
        setDate('');
        setAge('');
        setAddress('');
        setState('');
        setCity('');
        setReffered('');
        setInsurance('');
    }


    const handleSubmit = async () => {
        const formData = new FormData()

        formData.append('FullName', name);
        formData.append('Phone', MobileNumber);
        formData.append('Gender', gender);
        formData.append('DOB', new Date(date).toISOString());
        formData.append('Age', age);
        formData.append('Address', address);
        formData.append('State', state);
        formData.append('City', city);
        formData.append('Reffered_by', reffered);
        formData.append('Insurance', insurance);
        formData.append('Blood_group', Blood_group);
        formData.append('Emgr_mobile_no', Emgr_mobile_no);

        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        })
        console.log(formDataObj)
        const result = await postData('patient/v1/patient/NewPatient', formDataObj)

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

       // resetData();
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div style={{ width: '600', height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

                    <div className="row" style={{ marginBottom: 7 }}>
                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" placeholder="Enter Mobile Number" value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <select className="form-select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required

                            >
                                <option >Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                    </div>


                    <div className="row" style={{ marginBottom: 7 }}>
                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <textarea required className="form-control" placeholder="Enter Address" rows={1} value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>

                    </div>


                    <div className="row" style={{ marginBottom: 7 }}>
                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" value={state} placeholder="State" onChange={(e) => setState(e.target.value)} />
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" value={city} placeholder="City" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        {/* <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" placeholder="Enter Mobile Number" value={Emgr_mobile_no} onChange={(e) => setEmgr_mobile_no(e.target.value)} />
                        </div> */}
                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <select className="form-select"
                                value={Blood_group}
                                onChange={(e) => setBloodGroup(e.target.value)}

                            >
                                <option >Blood Group</option>
                                <option value="O_NEG">O-</option>
                                <option value="O_POS">O+</option>
                                <option value="A_POS">A+</option>
                                <option value="A_NEG">A-</option>
                                <option value="B_POS">B+</option>
                                <option value="B_NEG">B-</option>
                                <option value="AB_POS">AB+</option>
                                <option value="AB_NEG">AB-</option>

                            </select>
                        </div>

                        <div className="col-lg-4 col-xs-12 col-sm-12" style={{ marginBottom: 5 }}>
                            <input required type="text" className="form-control" placeholder="Reffered By" value={reffered} onChange={(e) => setReffered(e.target.value)} />
                        </div>

                    </div>

                    <div className="row" style={{ marginBottom: 7 }}>
                        <div className="col-12">
                            <textarea  className="form-control" placeholder="Insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
                        </div>
                    </div>


                    <div className="row" style={{ marginBottom: 7, marginTop: 20 }}>
                        <div className="col-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button onClick={handleSubmit} type="button" className="btn btn-primary">Registed Now</button>
                        </div>

                        <div className="col-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button onClick={resetData} type="button" className="btn btn-primary">Cancel</button>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}