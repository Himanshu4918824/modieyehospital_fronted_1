import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function Complaint({ stat }) {
    const [complain, setComplain] = useState('');
    const { complaint, P_id } = useContext(MainContext)

    useEffect(() => {
        if (stat === 'complaint') {
            setComplain(complaint[0].Complaint)
        }
        // else if (stat === 'allergies') {
        //     setComplain(allergies[0].Allergies)
        // }

    }, [])

    function resetData() {
        setComplain('')
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append('complain', complain);
        formData.append('D_id', "sasa");
        formData.append('message', complain);



        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });


        const result = await postData(`v1/pre-clinical/createComplaint/${P_id}/cmg9id08z0001j7nomnxe5291`, formDataObj);


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

        resetData()

    }


    return (<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

            <div className="mb-3">
                <textarea value={complain} onChange={(e) => setComplain(e.target.value)} className="form-control" rows="3" placeholder="Add Compaint or Type Allegiers"></textarea>
            </div>

            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <button onClick={resetData} type="reset" className="btn btn-primary">Cancel</button>
                </div>

            </div>



        </div>

    </div>)
}