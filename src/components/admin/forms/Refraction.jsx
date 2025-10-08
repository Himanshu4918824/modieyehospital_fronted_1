import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import Swal from "sweetalert2";

export default function Refraction({onClose, onRefresh}) 
{
  const { refractionData, P_id, Aid } = useContext(MainContext)
  const [refraction, setRefraction] = useState('');
  const [leftEyeSPH, setLeftEyeSPH] = useState('');
  const [leftEyeCYL, setLeftEyeCYL] = useState('');
  const [leftEyeAXIS, setLeftEyeAXIS] = useState('')
  const [leftEyeVA, setLeftEyeVA] = useState('');

  const [rightEyeSPH, setRightEyeSPH] = useState('');
  const [rightEyeCYL, setRightEyeCYL] = useState('');
  const [rightEyeAXIS, setRightEyeAXIS] = useState('')
  const [rightEyeVA, setRightEyeVA] = useState('');


  const [nearLeftEyeSPH, setNearLeftEyeSPH] = useState('');
  const [nearLeftEyeCYL, setNearLeftEyeCYL] = useState('');
  const [nearLeftEyeAXIS, setNearLeftEyeAXIS] = useState('')
  const [nearLeftEyeVA, setNearLeftEyeVA] = useState('');

  const [nearRightEyeSPH, setNearRightEyeSPH] = useState('');
  const [nearRightEyeCYL, setNearRightEyeCYL] = useState('');
  const [nearRightEyeAXIS, setNearRightEyeAXIS] = useState('')
  const [nearRightEyeVA, setNearRightEyeVA] = useState('');
  const [GlassType, setGlassType] = useState('');



  useEffect(() => {

    const r = refractionData[0]; // pick first object

    setRefraction(r?.refractionType);

    // Right Distance
    setRightEyeSPH(r?.R_D_SPH);
    setRightEyeCYL(r?.R_D_CYL);
    setRightEyeAXIS(r?.R_D_AXIS);
    setRightEyeVA(r?.R_D_VA);

    // Right Near
    setNearRightEyeSPH(r?.R_N_SPH);
    setNearRightEyeCYL(r?.R_N_CYL);
    setNearRightEyeAXIS(r?.R_N_AXIS);
    setNearRightEyeVA(r?.R_N_VA);

    // Left Distance
    setLeftEyeSPH(r?.L_D_SPH);
    setLeftEyeCYL(r?.L_D_CYL);
    setLeftEyeAXIS(r?.L_D_AXIS);
    setLeftEyeVA(r?.L_D_VA);

    // Left Near
    setNearLeftEyeSPH(r?.L_N_SPH);
    setNearLeftEyeCYL(r?.L_N_CYL);
    setNearLeftEyeAXIS(r?.L_N_AXIS);
    setNearLeftEyeVA(r?.L_N_VA);

    // Glass Type
    setGlassType(r?.Glass_Type);

  }, []);



  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('refractionType', refraction);
    formData.append('L_D_SPH', leftEyeSPH);
    formData.append('L_D_CYL', leftEyeCYL);
    formData.append('L_D_AXIS', leftEyeAXIS);
    formData.append('L_D_VA', leftEyeVA);

    formData.append('R_D_SPH', rightEyeSPH);
    formData.append('R_D_CYL', rightEyeCYL);
    formData.append('R_D_AXIS', rightEyeAXIS);
    formData.append('R_D_VA', rightEyeVA);

    // Near?.....

    formData.append('L_N_SPH', nearLeftEyeSPH);
    formData.append('L_N_CYL', nearLeftEyeCYL);
    formData.append('L_N_AXIS', nearLeftEyeAXIS);
    formData.append('L_N_VA', nearLeftEyeVA);

    formData.append('R_N_SPH', nearRightEyeSPH);
    formData.append('R_N_CYL', nearRightEyeCYL);
    formData.append('R_N_AXIS', nearRightEyeAXIS);
    formData.append('R_N_VA', nearRightEyeVA);

    formData.append('Glass_Type', GlassType);

    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });


    const result = await postData(`v1/pre-clinical/refraction/${P_id}/${Aid}`, formDataObj);
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
    setRefraction('');
    setLeftEyeSPH('');
    setRightEyeSPH('');
    setLeftEyeCYL('');
    setRightEyeCYL('');
    setLeftEyeAXIS('');
    setRightEyeAXIS('');
    setLeftEyeVA('');
    setRightEyeVA('');

    setNearLeftEyeSPH('');
    setNearRightEyeSPH('');
    setNearLeftEyeCYL('');
    setNearRightEyeCYL('');
    setNearLeftEyeAXIS('');
    setNearRightEyeAXIS('');
    setNearLeftEyeVA('');
    setNearRightEyeVA('');

    onClose();
    onRefresh();

  }


  return (<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

      <div className="mb-3">
        <select className="form-select"
          value={refraction}
          onChange={(e) => setRefraction(e.target.value)}
        >
          <option defaultValue>Select Refraction</option>
          <option value="Previous glass precription">Previous glass precription</option>
          <option value="Autorefractometer">Autorefractometer</option>
          <option value="Retinoscopy">Retinoscopy</option>
          <option value="Cycloplegic Test ">Cycloplegic Test</option>
          <option value="Postmydriatic Test">Postmydriatic Test</option>
          <option value="Subjective">Subjective</option>
        </select>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-6 text-center fw-bold mb-2 mb-md-0">Right Eye</div>
        <div className="col-12 col-md-6 text-center fw-bold">Left Eye</div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-secondary">
                <tr>
                  <th>Ref.</th>
                  <th>SPH</th>
                  <th>CYL</th>
                  <th>AXIS</th>
                  <th>VA</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dist...</td>
                  <td><input value={rightEyeSPH} onChange={(e) => setRightEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={rightEyeCYL} onChange={(e) => setRightEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={rightEyeAXIS} onChange={(e) => setRightEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={rightEyeVA} onChange={(e) => setRightEyeVA(e.target.value)} type="text" className="form-control" /></td>
                </tr>

                <tr>
                  <td>Near</td>
                  <td><input value={nearRightEyeSPH} onChange={(e) => setNearRightEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearRightEyeCYL} onChange={(e) => setNearRightEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearRightEyeAXIS} onChange={(e) => setNearRightEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearRightEyeVA} onChange={(e) => setNearRightEyeVA(e.target.value)} type="text" className="form-control" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-3">
          <div className="table-responsive">
            <table className="table table-bordered align-middle mb-0">
              <thead className="table-secondary">
                <tr>
                  <th>Ref.</th>
                  <th>SPH</th>
                  <th>CYL</th>
                  <th>AXIS</th>
                  <th>VA</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Dist..</td>
                  <td><input value={leftEyeSPH} onChange={(e) => setLeftEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={leftEyeCYL} onChange={(e) => setLeftEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={leftEyeAXIS} onChange={(e) => setLeftEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={leftEyeVA} onChange={(e) => setLeftEyeVA(e.target.value)} type="text" className="form-control" /></td>
                </tr>

                <tr>
                  <td>Near</td>
                  <td><input value={nearLeftEyeSPH} onChange={(e) => setNearLeftEyeSPH(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearLeftEyeCYL} onChange={(e) => setNearLeftEyeCYL(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearLeftEyeAXIS} onChange={(e) => setNearLeftEyeAXIS(e.target.value)} type="text" className="form-control" /></td>
                  <td><input value={nearLeftEyeVA} onChange={(e) => setNearLeftEyeVA(e.target.value)} type="text" className="form-control" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div className="px-2 mb-3">
          <label htmlFor="glass_Type">Glass Type</label>
          <input value={GlassType} onChange={(e) => setGlassType(e.target.value)} type="text" className="form-control" />
        </div>

      </div>
      <div className="row mb-2">
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