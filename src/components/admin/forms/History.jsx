import { useState } from "react"
import { currentDate, postData, putData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function History({ onClose, onRefresh }) {
    const [sysmetic, setSystemic] = useState('');
    const [treatment, setTreatment] = useState('');
    const [family, setFamily] = useState('');
    const [diet, setDiet] = useState('');
    const [id, setid] = useState('');


    const { histroy, P_id, Aid } = useContext(MainContext)
    useEffect(() => {
        setSystemic(histroy[0]?.Systemic_illness)
        setTreatment(histroy[0]?.Treatment_Histroy)
        setFamily(histroy[0]?.Family_Histroy)
        setDiet(histroy[0]?.Dite_Histroy)
        setid(histroy[0]?.id)
    }, [])
   

    const Edit = async () => {

        const formData = new FormData();

        formData.append('Systemic_illness', sysmetic);
        formData.append('Treatment_Histroy', treatment);
        formData.append('Family_Histroy', family);
        formData.append('Dite_Histroy', diet);
        formData.append('D_id', 'sasa');
        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        // Now JSON
        const result = await putData(`v1/update/Histroy/${id}`, formDataObj);

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

        const formData = new FormData();

        formData.append('Systemic_illness', sysmetic);
        formData.append('Treatment_Histroy', treatment);
        formData.append('Family_Histroy', family);
        formData.append('Dite_Histroy', diet);
        formData.append('D_id', 'sasa');
        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        // Now JSON
        const result = await postData(`v1/pre-clinical/histroy/${P_id}/${Aid}`, formDataObj);

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

    function resetData() {
        setDiet('');
        setSystemic('');
        setTreatment('');
        setFamily('');

        onClose();
        onRefresh();

    }


    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

            <div className="row mb-2">
                <div className="col-xs-12">
                    <label style={{ margin: 2, marginLeft: 10 }}>Sysmetic Illness History</label>
                    <textarea value={sysmetic} onChange={(e) => setSystemic(e.target.value)} className="form-control" rows="3" placeholder="Type Sysmetic Illness History......"></textarea>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-xs-12">
                    <label style={{ margin: 2, marginLeft: 10 }}>Treatment History</label>
                    <textarea value={treatment} onChange={(e) => setTreatment(e.target.value)} className="form-control" rows="3" placeholder="Type Treatment History....."></textarea>
                </div>
            </div>

            <div className="row mb-2" >
                <div className="col-xs-12">
                    <label style={{ margin: 2, marginLeft: 10 }}>Family History</label>
                    <textarea value={family} onChange={(e) => setFamily(e.target.value)} className="form-control" rows="3" placeholder="Type Family History....."></textarea>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-xs-12">
                    <label style={{ margin: 2, marginLeft: 10 }}>Diet History</label>
                    <textarea value={diet} onChange={(e) => setDiet(e.target.value)} className="form-control" rows="3" placeholder="Type Diet History......"></textarea>
                </div>
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