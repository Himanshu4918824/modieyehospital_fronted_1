import { useState } from "react"
import { currentDate, postData, putData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function Vision({ onClose, onRefresh }) {
  const { vision, P_id, Aid } = useContext(MainContext)
  const [unaidedRight, setUnaidedRight] = useState('');
  const [pinHoleRight, setPinHoleRight] = useState('');
  const [cTRight, setCTRight] = useState('');
  const [pMTRight, setPMTRight] = useState('');
  const [glassesRight, setGlassesRight] = useState('');
  const [subjectiveRight, setSubjectiveRight] = useState('');
  const [nearUnaidedRight, setNearUnaidedRight] = useState('');
  const [nearGlassesRight, setNearGlassesRight] = useState('');
  const [nearSubjectiveRight, setNearSubjectiveRight] = useState('');
  const [id, setid] = useState()
  const [unaidedLeft, setUnaidedLeft] = useState('');
  const [pinHoleLeft, setPinHoleLeft] = useState('');
  const [cTLeft, setCTLeftt] = useState('');
  const [pMTLeft, setPMTLeft] = useState('');
  const [glassesLeft, setGlassesLeft] = useState('');
  const [subjectiveLeft, setSubjectiveLeft] = useState('');
  const [nearUnaidedLeft, setNearUnaidedLeft] = useState('');
  const [nearGlassesLeft, setNearGlassesLeft] = useState('');
  const [nearSubjectiveLeft, setNearSubjectiveLeft] = useState('');


  useEffect(() => {

    const v = vision[0];
    // console.log(v)
    // Right Eye
    setid(v?.id)
    setUnaidedRight(v?.R_Distance_unaided);
    setPinHoleRight(v?.R_Distance_With_Pin_Hole);
    setCTRight(v?.R_Distance_With_CT);
    setPMTRight(v?.R_Distance_With_PMT);
    setGlassesRight(v?.R_Distance_with_previous_glasses);
    setSubjectiveRight(v?.R_Distance_with_current_subjective);
    setNearUnaidedRight(v?.R_Near_unaided);
    setNearGlassesRight(v?.R_Near_with_previous_glasses);
    setNearSubjectiveRight(v?.R_Near_with_current_subjective);

    // Left Eye
    setUnaidedLeft(v?.L_Distance_unaided);
    setPinHoleLeft(v?.L_Distance_With_Pin_Hole);
    setCTLeftt(v?.L_Distance_With_CT);
    setPMTLeft(v?.L_Distance_With_PMT);
    setGlassesLeft(v?.L_Distance_with_previous_glasses);
    setSubjectiveLeft(v?.L_Distance_with_current_subjective);
    setNearUnaidedLeft(v?.L_Near_unaided);
    setNearGlassesLeft(v?.L_Near_with_previous_glasses);
    setNearSubjectiveLeft(v?.L_Near_with_current_subjective);

  }, [vision]);



  const Edit = async () => {
    const formData = new FormData();
    formData.append('R_Distance_unaided', unaidedRight);
    formData.append('R_Distance_With_Pin_Hole', pinHoleRight);
    formData.append('R_Distance_With_CT', cTRight);
    formData.append('R_Distance_With_PMT', pMTRight);
    formData.append('R_Distance_with_previous_glasses', glassesRight);
    formData.append('R_Distance_with_current_subjective', subjectiveRight);
    formData.append('R_Near_unaided', nearUnaidedRight);
    formData.append('R_Near_with_previous_glasses', nearGlassesRight);
    formData.append('R_Near_with_current_subjective', nearSubjectiveRight);

    // Left Eye
    formData.append('L_Distance_unaided', unaidedLeft);
    formData.append('L_Distance_With_Pin_Hole', pinHoleLeft);
    formData.append('L_Distance_With_CT', cTLeft);
    formData.append('L_Distance_With_PMT', pMTLeft);
    formData.append('L_Distance_with_previous_glasses', glassesLeft);
    formData.append('L_Distance_with_current_subjective', subjectiveLeft);
    formData.append('L_Near_unaided', nearUnaidedLeft);
    formData.append('L_Near_with_previous_glasses', nearGlassesLeft);
    formData.append('L_Near_with_current_subjective', nearSubjectiveLeft);

    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    const result = await putData(`patient/v1/update/Vision/${id}`, formDataObj);

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
    formData.append('R_Distance_unaided', unaidedRight);
    formData.append('R_Distance_With_Pin_Hole', pinHoleRight);
    formData.append('R_Distance_With_CT', cTRight);
    formData.append('R_Distance_With_PMT', pMTRight);
    formData.append('R_Distance_with_previous_glasses', glassesRight);
    formData.append('R_Distance_with_current_subjective', subjectiveRight);
    formData.append('R_Near_unaided', nearUnaidedRight);
    formData.append('R_Near_with_previous_glasses', nearGlassesRight);
    formData.append('R_Near_with_current_subjective', nearSubjectiveRight);

    // Left Eye
    formData.append('L_Distance_unaided', unaidedLeft);
    formData.append('L_Distance_With_Pin_Hole', pinHoleLeft);
    formData.append('L_Distance_With_CT', cTLeft);
    formData.append('L_Distance_With_PMT', pMTLeft);
    formData.append('L_Distance_with_previous_glasses', glassesLeft);
    formData.append('L_Distance_with_current_subjective', subjectiveLeft);
    formData.append('L_Near_unaided', nearUnaidedLeft);
    formData.append('L_Near_with_previous_glasses', nearGlassesLeft);
    formData.append('L_Near_with_current_subjective', nearSubjectiveLeft);

    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    const result = await postData(`patient/v1/pre-clinical/vision/${P_id}/${Aid}`, formDataObj);

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
    setUnaidedLeft('');
    setUnaidedRight('');
    setPinHoleRight('');
    setPinHoleLeft('');
    setCTLeftt('');
    setCTRight('');
    setPMTLeft('');
    setPMTRight('');
    setGlassesLeft('');
    setGlassesRight('');
    setSubjectiveLeft('');
    setSubjectiveRight('');
    setNearUnaidedLeft('');
    setNearUnaidedRight('');
    setNearGlassesLeft('');
    setNearGlassesRight('')
    setNearSubjectiveLeft('');
    setNearSubjectiveRight('');

    onClose();
    onRefresh();

  }



  return (<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10, fontSize: 13 }}>

      <div className="table-responsive" style={{ maxHeight: 450 }}>
        <table className="table table-bordered align-middle">
          <thead className="table-secondary">
            <tr>
              <th>Visual Acuity</th>
              <th>Right Eye</th>
              <th>Left Eye</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><b><i>Distance unaided</i></b></td>
              <td><input value={unaidedRight} onChange={(e) => setUnaidedRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={unaidedLeft} onChange={(e) => setUnaidedLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Distance With Pin Hole</i></b></td>
              <td><input value={pinHoleRight} onChange={(e) => setPinHoleRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={pinHoleLeft} onChange={(e) => setPinHoleLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Distance With CT</i></b></td>
              <td><input value={cTRight} onChange={(e) => setCTRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={cTLeft} onChange={(e) => setCTLeftt(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Distance With PMT</i></b></td>
              <td><input value={pMTRight} onChange={(e) => setPMTRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={pMTLeft} onChange={(e) => setPMTLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Distance with previous glasses</i></b></td>
              <td><input value={glassesRight} onChange={(e) => setGlassesRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={glassesLeft} onChange={(e) => setGlassesLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Distance with current subjective</i></b></td>
              <td><input value={subjectiveRight} onChange={(e) => setSubjectiveRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={subjectiveLeft} onChange={(e) => setSubjectiveLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Near unaided</i></b></td>
              <td><input value={nearUnaidedRight} onChange={(e) => setNearUnaidedRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={nearUnaidedLeft} onChange={(e) => setNearUnaidedLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Near with previous glasses</i></b></td>
              <td><input value={nearGlassesRight} onChange={(e) => setNearGlassesRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={nearGlassesLeft} onChange={(e) => setNearGlassesLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Near with current subjective</i></b></td>
              <td><input value={nearSubjectiveRight} onChange={(e) => setNearSubjectiveRight(e.target.value)} type="text" className="form-control" /></td>
              <td><input value={nearSubjectiveLeft} onChange={(e) => setNearSubjectiveLeft(e.target.value)} type="text" className="form-control" /></td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="row mb-2">
        <div className="col-6 d-flex justify-content-center">
          <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
        </div>

        <div className="col-6 d-flex justify-content-center">
          <button onClick={Edit} type="reset" className="btn btn-primary">Edit</button>
        </div>

      </div>

    </div>
patient/
  </div>)
}