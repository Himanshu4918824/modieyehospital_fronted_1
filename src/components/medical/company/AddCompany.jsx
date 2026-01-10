import { useState } from "react";
import Header from "../../admin/homepage/Header";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function AddCompany() {
   
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gstno, setGST] = useState('');
    const [dlno, setDL] = useState('');

    const handleSumbitData = async () => {
        var formData = new FormData();

        formData.append('name', name);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('gstNo', gstno);
        formData.append('DLno', dlno);
        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        var result = await postData('medical/api/createCompany', formDataObj)
        if (result.status) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Company Submit Successfully",
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
        setAddress('');
        setDL('')
        setEmail('');
        setGST('');
        setDL('');
    }

    return (<div>

        <div>
            <Header />
        </div>

        <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20' }} >
            Add Company
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <div style={{ width: 800, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

                <div className="row m-2">
                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="text" placeholder="Enter Company Name...." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="text" placeholder="Enter Address...." value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="email" placeholder="Enter Email...." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="text" placeholder="Enter Phone no...." value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>

                <div className="row m-2">
                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="text" placeholder="Enter GST No....." value={gstno} onChange={(e) => setGST(e.target.value)} />
                    </div>

                    <div className="col-lg-6 col-sx-12 mb-1">
                        <input className="form-control" type="text" placeholder="Enter DL No...." value={dlno} onChange={(e) => setDL(e.target.value)} />
                    </div>
                </div>


                <div className="row m-2">
                    <div className="col-lg-6 col-sx-12 mb-1 d-flex justify-content-center align-items-center">
                        <button onClick={handleSumbitData} type="button" className="btn btn-primary">Submit</button>
                    </div>

                    <div className="col-lg-6 col-sx-12 mb-1 d-flex justify-content-center align-items-center">
                        <button onClick={resetData} type="button" className="btn btn-primary">Cancel</button>
                    </div>
                </div>



            </div>
        </div>

    </div>)
}