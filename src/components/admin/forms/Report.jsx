import { useState, useRef, useEffect } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

import cart from "../../../assets/cart.png";
import { useParams } from "react-router-dom";

export default function Report({ onClose, onRefresh }) {
    const { id } = useParams()
    const [reportName, setReportName] = useState('');
    const [uploadReport, setUploadReport] = useState({ bytes: '', fileName: cart });

    /*
    handle report ko e.target.files[0] ko store kra file m uska bd file ko use kiys sab jaba
     */

   const handleReport = (e) => {
    const file = e.target.files[0];                 
    if (!file) return;

    setUploadReport({ bytes: file,  fileName: URL.createObjectURL(file), type: file.type });
};



    function resetData() {
        setReportName('');
        setUploadReport({ bytes: '', fileName: cart });


        onClose();
        onRefresh();
    }
    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('name', reportName);
        formData.append('file', uploadReport.bytes);

        //console.log('xxx',uploadReport)

        const result = await postData(`patient/v1/report/${id}`, formData);

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


            <div className="row m-2 mt-4">
                <div className="col-6 d-flex justify-content-center">
                    <label htmlFor="reportUpload" className="btn btn-primary" style={{ cursor: "pointer" }}>Upload Report</label>
                    <input id="reportUpload" onChange={handleReport} type="file" accept="image/*,video/*" hidden />
                </div>

                <div className="col-6 d-flex justify-content-center">

                     {uploadReport.type?.startsWith("image") ? (
                     <img src={uploadReport.fileName} style={{ width: 50, height: 50, borderRadius: 25 }} alt="preview" />

                     ) : uploadReport.type?.startsWith("video") ? (
                     <video src={uploadReport.fileName} width="80" height="50"  controls />
                     
                     ) : (
                      <img src={cart} style={{ width: 50, height: 50 }} alt="default" />
                    )}



                </div>

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