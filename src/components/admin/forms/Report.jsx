import { useState, useRef } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";

export default function Report({ onClose, onRefresh }) {
    const [reportName, setReportName] = useState('');
    const [uploadReport, setUploadReport] = useState('');

    const fileInputRef = useRef(null);
    const { P_id } = useContext(MainContext)

    function resetData() {
        setReportName('');
        setUploadReport('');
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // <-- clear file input
        }

        onClose();
        onRefresh();
    }
    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('name', reportName);
        formData.append('file', uploadReport)
        const formDataObj = {};

        formData.forEach((value, key) => {
            formDataObj[key] = value;
        })


        const result = await postData(`patient/v1/report/${P_id}`, formDataObj);


        if (result.status) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Report Submit Successfully",
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


    return (<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

            <div className="mb-2">
                <label className="from-control m-1 ms-3 fw-lightgrey" style={{ fontSize: 18 }}>Reports For</label>
                <input value={reportName} onChange={(e) => setReportName(e.target.value)} className="form-control" placeholder="Type Report Name..." />
            </div>

            <div className="mb-2">
                <label className="from-control m-1 ms-3 fw-lightgrey" style={{ fontSize: 18 }}>Upload Report</label>
                <input ref={fileInputRef} className="form-control" type="file" id="formFile" onChange={(e) => setUploadReport(e.target.files[0])} />
            </div>




            <div className="row mt-3">
                <div className="col-6 d-flex justify-content-center">
                    <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <button onClick={resetData} type="reset" className="btn btn-primary">Edit</button>
                </div>

            </div>



        </div>

    </div>)
}