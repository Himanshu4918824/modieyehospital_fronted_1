import { useState } from "react"
import { currentDate, postData, putData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useEffect } from "react";
import MainContext from "../../../context/MainContext";
import { useContext } from "react";

export default function Advice({ stat, onClose, onRefresh }) 
{
    const [details, setDetails] = useState('');
    const [type, setType] = useState('');
    const [id, setid] = useState();
    const { Advise, P_id, treatment , Aid } = useContext(MainContext)


    useEffect(() => {
        if (stat === 'advise') {
            // console.log(Advise[0])
            setDetails(Advise[0]?.message);
            setType(Advise[0]?.type);
            setid(Advise[0]?.id);
        }
        else if (stat === 'treatment') {
            // console.log(treatment)
            setDetails(treatment[0]?.message);
            setType(treatment[0]?.type);
            setid(treatment[0]?.id);
        }
    }, [])


    function resetData() {
        setDetails('');
        setType('');

        onClose();
        onRefresh();
    }

    const Edit = async () => {
        const formData = new FormData()
        formData.append('type', type);
        formData.append('message', details);

        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        // cmg9id08z0001j7nomnxe5291
        let result;
        if (stat === 'advise') {
            result = await putData(`v1/update/Advise/${id}`, formDataObj);
        }
        else if (stat === 'treatment') {
            result = await putData(`v1/update/Treatment/${id}`, formDataObj);
        }



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

        resetData();
        onClose();
        onRefresh();

    }



    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('type', type);
        formData.append('message', details);

        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        // cmg9id08z0001j7nomnxe5291
        let result;
        if (stat === 'advise') {
            result = await postData(`v1/advice/${P_id}/${Aid}`, formDataObj);
        }
        else if (stat === 'treatment') {
            result = await postData(`v1/treatment/${P_id}/${Aid}`, formDataObj);
        }



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

        resetData();
        onClose();
        onRefresh();

    }


    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

                <div className="mb-3">
                    <select className='form-select'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >

                        <option value={'-Select-Type-'}>-Select-Type-</option>
                        <option value={'Investigation (Ocular)'}>Investigation (Ocular)</option>
                        <option value={'Investigation (Systemic)'}>Investigation (Systemic)</option>
                        <option value={'Medicines'}>Medicines</option>
                        <option value={'Glasses'}>Glasses</option>
                        <option value={'Contact Lens'}>Contact Lens</option>
                        <option value={'Laser'}>Laser</option>
                        <option value={'Injection'}>Injection</option>
                        <option value={'Surgery'}>Surgery</option>
                        <option value={'Referral'}>Referral</option>
                        <option value={'Other'}>Other</option>

                    </select>
                </div>

                <div className="mb-3">
                    <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="form-control" rows="3" placeholder="Type Details...."></textarea>
                </div>

                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
                    </div>

                    <div className="col-6 d-flex justify-content-center">
                        <button onClick={Edit} type="reset" className="btn btn-primary">Edit</button>
                    </div>

                </div>



            </div>

        </div>)
}