import { useState } from "react";
import { postData, putData, } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function Anterior({ onClose, onRefresh }) {
  const { P_id, anterior , Aid } = useContext(MainContext)

  // Right side
  const [rightNCT, setRightNCT] = useState('');
  const [rightTonopen, setRightTonopen] = useState('');
  const [rightAT, setRightAT] = useState('');
  const [rightEyelids, setRightEyelids] = useState('');
  const [rightEyelashes, setRightEyelashes] = useState('');
  const [rightLacrimalPunctum, setRightLacrimalPunctum] = useState('');
  const [rightOrbit, setRightOrbit] = useState('');
  const [rightExtraocularMovements, setRightExtraocularMovements] = useState('');
  const [rightEyePosition, setRightEyePosition] = useState('');
  const [rightSclera, setRightSclera] = useState('');
  const [rightConjunctiva, setRightConjunctiva] = useState('');
  const [rightCornea, setRightCornea] = useState('');
  const [rightAnteriorChamber, setRightAnteriorChamber] = useState('');
  const [rightAngles, setRightAngles] = useState('');
  const [rightPupil, setRightPupil] = useState('');
  const [rightLens, setRightLens] = useState('');
  const [rightLacrimalSyringing, setRightLacrimalSyringing] = useState('');
  const [rightGonioscopy, setRightGonioscopy] = useState('');
  const [rightOthers, setRightOthers] = useState('');
  // Left side
  const [leftNCT, setLeftNCT] = useState('');
  const [leftTonopen, setLeftTonopen] = useState('');
  const [leftAT, setLeftAT] = useState('');
  const [leftEyelids, setLeftEyelids] = useState('');
  const [leftEyelashes, setLeftEyelashes] = useState('');
  const [leftLacrimalPunctum, setLeftLacrimalPunctum] = useState('');
  const [leftOrbit, setLeftOrbit] = useState('');
  const [leftExtraocularMovements, setLeftExtraocularMovements] = useState('');
  const [leftEyePosition, setLeftEyePosition] = useState('');
  const [leftSclera, setLefttSclera] = useState('');
  const [leftConjunctiva, setLeftConjunctiva] = useState('');
  const [leftCornea, setLeftCornea] = useState('');
  const [leftAnteriorChamber, setLeftAnteriorChamber] = useState('');
  const [leftAngles, setLeftAngles] = useState('');
  const [leftPupil, setLeftPupil]= useState('');
  const [leftLens, setLeftLens] = useState('');
  const [leftLacrimalSyringing, setLeftLacrimalSyringing] = useState('');
  const [leftGonioscopy, setLeftGonioscopy] = useState('');
  const [leftOthers, setLeftOthers] = useState('');
  const [id, setId] = useState('')
  useEffect(() => {
    const data = anterior[0];
    // Left eye
    setId(data?.id)
    setLeftAngles(data?.L_Angles);
    setLeftAnteriorChamber(data?.L_Anterior_chamber);
    setLeftConjunctiva(data?.L_Conjunctiva);
    setLeftCornea(data?.L_Cornea);
    setLeftExtraocularMovements(data?.L_Extraocular_movements);
    setLeftEyePosition(data?.L_Eye_position);
    setLeftEyelashes(data?.L_Eyelashes);
    setLeftEyelids(data?.L_Eyelids);
    setLeftGonioscopy(data?.L_Gonioscopy);
    setLeftAT(data?.L_Intraocular_pressure_AT);
    setLeftNCT(data?.L_Intraocular_pressure_NCT);
    setLeftTonopen(data?.L_Intraocular_pressure_Tonopen);
    setLeftPupil(data?.L_Iris_pupil);
    setLeftLacrimalPunctum(data?.L_Lacrimal_punctum);
    setLeftLacrimalSyringing(data?.L_Lacrimal_syringing);
    setLeftLens(data?.L_Lens);
    setLeftOrbit(data?.L_Orbit);
    setLeftOthers(data?.L_Others);
    setLefttSclera(data?.L_Sclera_episclera);

    // Right eye
    setRightAngles(data?.R_Angles);
    setRightAnteriorChamber(data?.R_Anterior_chamber);
    setRightConjunctiva(data?.R_Conjunctiva);
    setRightCornea(data?.R_Cornea);
    setRightExtraocularMovements(data?.R_Extraocular_movements);
    setRightEyePosition(data?.R_Eye_position);
    setRightEyelashes(data?.R_Eyelashes);
    setRightEyelids(data?.R_Eyelids);
    setRightGonioscopy(data?.R_Gonioscopy);
    setRightAT(data?.R_Intraocular_pressure_AT);
    setRightNCT(data?.R_Intraocular_pressure_NCT);
    setRightTonopen(data?.R_Intraocular_pressure_Tonopen);
    setRightPupil(data?.R_Iris_pupil);
    setRightLacrimalPunctum(data?.R_Lacrimal_punctum);
    setRightLacrimalSyringing(data?.R_Lacrimal_syringing);
    setRightLens(data?.R_Lens);
    setRightOrbit(data?.R_Orbit);
    setRightOthers(data?.R_Others);
    setRightSclera(data?.R_Sclera_episclera);
  }, []);


  const Edit = async () => {
    const formData = new FormData()

    formData.append("R_Intraocular_pressure_NCT", rightNCT);
    formData.append("L_Intraocular_pressure_NCT", leftNCT);

    formData.append("R_Intraocular_pressure_Tonopen", rightTonopen);
    formData.append("L_Intraocular_pressure_Tonopen", leftTonopen);

    formData.append("R_Intraocular_pressure_AT", rightAT);
    formData.append("L_Intraocular_pressure_AT", leftAT);

    formData.append("R_Eyelids", rightEyelids);
    formData.append("L_Eyelids", leftEyelids);

    formData.append("R_Eyelashes", rightEyelashes);
    formData.append("L_Eyelashes", leftEyelashes);

    formData.append("R_Lacrimal_punctum", rightLacrimalPunctum);
    formData.append("L_Lacrimal_punctum", leftLacrimalPunctum);

    formData.append("R_Orbit", rightOrbit);
    formData.append("L_Orbit", leftOrbit);

    formData.append("R_Extraocular_movements", rightExtraocularMovements);
    formData.append("L_Extraocular_movements", leftExtraocularMovements);

    formData.append("R_Eye_position", rightEyePosition);
    formData.append("L_Eye_position", leftEyePosition);

    formData.append("R_Sclera_episclera", rightSclera);
    formData.append("L_Sclera_episclera", leftSclera);

    formData.append("R_Conjunctiva", rightConjunctiva);
    formData.append("L_Conjunctiva", leftConjunctiva);

    formData.append("R_Cornea", rightCornea);
    formData.append("L_Cornea", leftCornea);

    formData.append("R_Anterior_chamber", rightAnteriorChamber);
    formData.append("L_Anterior_chamber", leftAnteriorChamber);

    formData.append("R_Angles", rightAngles);
    formData.append("L_Angles", leftAngles);

    formData.append("R_Iris_pupil", rightPupil);
    formData.append("L_Iris_pupil", leftPupil);

    formData.append("R_Lens", rightLens);
    formData.append("L_Lens", leftLens);

    formData.append("R_Lacrimal_syringing", rightLacrimalSyringing);
    formData.append("L_Lacrimal_syringing", leftLacrimalSyringing);

    formData.append("R_Gonioscopy", rightGonioscopy);
    formData.append("L_Gonioscopy", leftGonioscopy);

    formData.append("R_Others", rightOthers);
    formData.append("L_Others", leftOthers);


    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });


    const result = await putData(`patient/v1/update/Anterior/${id}`, formDataObj);

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


  const handleSubmitData = async () => {
    const formData = new FormData()

    formData.append("R_Intraocular_pressure_NCT", rightNCT);
    formData.append("L_Intraocular_pressure_NCT", leftNCT);

    formData.append("R_Intraocular_pressure_Tonopen", rightTonopen);
    formData.append("L_Intraocular_pressure_Tonopen", leftTonopen);

    formData.append("R_Intraocular_pressure_AT", rightAT);
    formData.append("L_Intraocular_pressure_AT", leftAT);

    formData.append("R_Eyelids", rightEyelids);
    formData.append("L_Eyelids", leftEyelids);

    formData.append("R_Eyelashes", rightEyelashes);
    formData.append("L_Eyelashes", leftEyelashes);

    formData.append("R_Lacrimal_punctum", rightLacrimalPunctum);
    formData.append("L_Lacrimal_punctum", leftLacrimalPunctum);

    formData.append("R_Orbit", rightOrbit);
    formData.append("L_Orbit", leftOrbit);

    formData.append("R_Extraocular_movements", rightExtraocularMovements);
    formData.append("L_Extraocular_movements", leftExtraocularMovements);

    formData.append("R_Eye_position", rightEyePosition);
    formData.append("L_Eye_position", leftEyePosition);

    formData.append("R_Sclera_episclera", rightSclera);
    formData.append("L_Sclera_episclera", leftSclera);

    formData.append("R_Conjunctiva", rightConjunctiva);
    formData.append("L_Conjunctiva", leftConjunctiva);

    formData.append("R_Cornea", rightCornea);
    formData.append("L_Cornea", leftCornea);

    formData.append("R_Anterior_chamber", rightAnteriorChamber);
    formData.append("L_Anterior_chamber", leftAnteriorChamber);

    formData.append("R_Angles", rightAngles);
    formData.append("L_Angles", leftAngles);

    formData.append("R_Iris_pupil", rightPupil);
    formData.append("L_Iris_pupil", leftPupil);

    formData.append("R_Lens", rightLens);
    formData.append("L_Lens", leftLens);

    formData.append("R_Lacrimal_syringing", rightLacrimalSyringing);
    formData.append("L_Lacrimal_syringing", leftLacrimalSyringing);

    formData.append("R_Gonioscopy", rightGonioscopy);
    formData.append("L_Gonioscopy", leftGonioscopy);

    formData.append("R_Others", rightOthers);
    formData.append("L_Others", leftOthers);


    const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });


    const result = await postData(`patient/v1/Clinical/anterior/${Aid}`, formDataObj);

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


  const resetData = () => {
    onClose();
    onRefresh();
  };



  return (<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

      <div className="table-responsive" style={{ maxHeight: 450 }}>
        <table className="table table-bordered align-middle" >
          <thead className="table-secondary">
            <tr>
              <th>Visual Acuity</th>
              <th>Right Eye</th>
              <th>Left Eye</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><b><i>Intraocular_pressure (NCT)</i></b></td>
              <td><input value={rightNCT} onChange={(e) => setRightNCT(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftNCT} onChange={(e) => setLeftNCT(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Intraocular_pressure (Tonopen)</i></b></td>
              <td><input value={rightTonopen} onChange={(e) => setRightTonopen(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftTonopen} onChange={(e) => setLeftTonopen(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Intraocular_pressure (AT)</i></b></td>
              <td><input value={rightAT} onChange={(e) => setRightAT(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftAT} onChange={(e) => setLeftAT(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Eyelids</i></b></td>
              <td><input value={rightEyelids} onChange={(e) => setRightEyelids(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftEyelids} onChange={(e) => setLeftEyelids(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Eyelashes</i></b></td>
              <td><input value={rightEyelashes} onChange={(e) => setRightEyelashes(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftEyelashes} onChange={(e) => setLeftEyelashes(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Lacrimal Punctum</i></b></td>
              <td><input value={rightLacrimalPunctum} onChange={(e) => setRightLacrimalPunctum(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftLacrimalPunctum} onChange={(e) => setLeftLacrimalPunctum(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Orbit</i></b></td>
              <td><input value={rightOrbit} onChange={(e) => setRightOrbit(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftOrbit} onChange={(e) => setLeftOrbit(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Extraocular Movements</i></b></td>
              <td><input value={rightExtraocularMovements} onChange={(e) => setRightExtraocularMovements(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftExtraocularMovements} onChange={(e) => setLeftExtraocularMovements(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Eye Position</i></b></td>
              <td><input value={rightEyePosition} onChange={(e) => setRightEyePosition(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftEyePosition} onChange={(e) => setLeftEyePosition(e.target.value)} type="text" className="form-control" /></td>
            </tr>

            <tr>
              <td><b><i>Sclera</i></b></td>
              <td><input value={rightSclera} onChange={(e) => setRightSclera(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftSclera} onChange={(e) => setLefttSclera(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Conjunctiva</i></b></td>
              <td><input value={rightConjunctiva} onChange={(e) => setRightConjunctiva(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftConjunctiva} onChange={(e) => setLeftConjunctiva(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Cornea</i></b></td>
              <td><input value={rightCornea} onChange={(e) => setRightCornea(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftCornea} onChange={(e) => setLeftCornea(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Anterior Chamber</i></b></td>
              <td><input value={rightAnteriorChamber} onChange={(e) => setRightAnteriorChamber(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftAnteriorChamber} onChange={(e) => setLeftAnteriorChamber(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Angles</i></b></td>
              <td><input value={rightAngles} onChange={(e) => setRightAngles(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftAngles} onChange={(e) => setLeftAngles(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Pupil</i></b></td>
              <td><input value={rightPupil} onChange={(e) => setRightPupil(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftPupil} onChange={(e) => setLeftPupil(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Lens</i></b></td>
              <td><input value={rightLens} onChange={(e) => setRightLens(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftLens} onChange={(e) => setLeftLens(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Lacrimal Syringing</i></b></td>
              <td><input value={rightLacrimalSyringing} onChange={(e) => setRightLacrimalSyringing(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftLacrimalSyringing} onChange={(e) => setLeftLacrimalSyringing(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Gonioscopy</i></b></td>
              <td><input value={rightGonioscopy} onChange={(e) => setRightGonioscopy(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftGonioscopy} onChange={(e) => setLeftGonioscopy(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>

            <tr>
              <td><b><i>Others</i></b></td>
              <td><input value={rightOthers} onChange={(e) => setRightOthers(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
              <td><input value={leftOthers} onChange={(e) => setLeftOthers(e.target.value)} type="text" className="form-control form-control-sm p-1" /></td>
            </tr>


          </tbody>
        </table>
      </div>


      <div className="row mb-2">
        <div className="col-6 d-flex justify-content-center">
          <button onClick={handleSubmitData} type="Submit" className="btn btn-primary">Submit</button>
        </div>

        <div className="col-6 d-flex justify-content-center">
          <button onClick={Edit} type="reset" className="btn btn-primary">Edit</button>
        </div>

      </div>

    </div>

  </div>


  );
}