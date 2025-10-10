import { useState } from "react";
import { postData,  } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Anterior({ onClose, onRefresh }) {
  const fields = [
    "Intraocular_pressure (NCT)",
    "Intraocular_pressure (Tonopen)",
    "Intraocular_pressure (AT)",
    "Eyelids",
    "Eyelashes",
    "Lacrimal_punctum",
    "Orbit",
    "Extraocular_movements",
    "Eye position",
    "Sclera/episclera",
    "Conjunctiva",
    "Cornea",
    "Anterior_chamber",
    "Angles",
    "Iris/pupil",
    "Lens",
    "Lacrimal_syringing",
    "Gonioscopy",
    "Others",
  ];

  const [data, setData] = useState({
    Cornea: { right: "", left: "" },
    Lens: { right: "", left: "" },

    NCT: { right: "", left: "" },
    Tonopen: { right: "", left: "" },

    AT: { right: "", left: "" },
    Eyelids: { right: "", left: "" },

    Eyelashes: { right: "", left: "" },
    Lacrimal: { right: "", left: "" },

    Orbit: { right: "", left: "" },
    Extraocular: { right: "", left: "" },
    
    Eye: { right: "", left: "" },
    Sclera: { right: "", left: "" },
    
    Conjunctiva: { right: "", left: "" },
    Anterior: { right: "", left: "" },

    Angles: { right: "", left: "" },
    pupil: { right: "", left: "" },

    Lacrimal_syringing: { right: "", left: "" },
    Gonioscopy: { right: "", left: "" },

    Others: { right: "", left: "" },
    
  });

  const handleSubmitData=async()=>{
    const formData=new FormData()

    formData.append( "R_Intraocular_pressure (NCT)",data.NCT.right);
    formData.append( "L_Intraocular_pressure (NCT)",data.NCT.left);

    formData.append( "R_Intraocular_pressure (Tonopen)",data.Tonopen.right);
    formData.append( "L_Intraocular_pressure (Tonopen)",data.Tonopen.left);

    formData.append( "R_Intraocular_pressure (AT)",data.AT.right);
    formData.append( "L_Intraocular_pressure (AT)",data.AT.left);

    formData.append( "R_Eyelids",data.Eyelids.right);
    formData.append( "L_Eyelids",data.Eyelids.left);

    formData.append( "R_Eyelashes",data.Eyelashes.right);
    formData.append( "L_Eyelashes",data.Eyelashes.left);

    formData.append( "R_Lacrimal",data.Lacrimal.right);
    formData.append( "L_Lacrimal",data.Lacrimal.left);

    formData.append( "R_Orbit",data.Orbit.right);
    formData.append( "L_Orbit",data.Orbit.left);

    formData.append( "R_Extraocular",data.Extraocular.right);
    formData.append( "L_Extraocular",data.Extraocular.left);

    formData.append( "R_Eye",data.Eye.right);
    formData.append( "L_Eye",data.Eye.left);

    formData.append( "R_Sclera",data.Sclera.right);
    formData.append( "L_Sclera",data.Sclera.left);

    formData.append( "R_Conjunctiva",data.Conjunctiva.right);
    formData.append( "L_Conjunctiva",data.Conjunctiva.left);

    formData.append( "R_Cornea",data.Cornea.right);
    formData.append( "L_Cornea",data.Cornea.left);

    formData.append( "R_Anterior",data.Anterior.left);
    formData.append( "L_Anterior",data.Anterior.left);

    formData.append( "R_Angles",data.Angles.right);
    formData.append( "L_Angles",data.Angles.left);

    formData.append( "R_pupil",data.pupil.right);
    formData.append( "L_pupil",data.pupil.left);

    formData.append( "R_Lens",data.Lens.right);
    formData.append( "L_Lens",data.Lens.left);

    formData.append( "R_Lacrimal_syringing",data. Lacrimal_syringing.left);
    formData.append( "L_Lacrimal_syringing",data. Lacrimal_syringing.left);

    formData.append( "R_Angles",data.Angles.right);
    formData.append( "L_Angles",data.Angles.left);

    formData.append( "R_Gonioscopy",data.Gonioscopy.right);
    formData.append( "L_Gonioscopy",data.Gonioscopy.left);

    formData.append( "R_Others",data.Others.right);
    formData.append( "L_Others",data.Others.left);


     const formDataObj = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

console.log(formDataObj)

//  const result = await postData(``, formDataObj);
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




  const handleChange = (field, side, value) => {
    setData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [side]: value },
    }));
  };

  const resetData = () => {
    onClose();
    onRefresh();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "500px",
          background: "#f8f9fa",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h5 className="text-center mb-3">Anterior Segment Examination</h5>

        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <table className="table table-sm table-bordered text-center align-middle mb-2">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "45%" }}>Parameter</th>
                <th>Right Eye</th>
                <th>Left Eye</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={index}>
                  <td className="text-start" style={{ fontSize: "12px" }}>
                    {field}
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      style={{ fontSize: "12px" }}
                      value={data[field]?.right || ""}
                      onChange={(e) =>
                        handleChange(field, "right", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      style={{ fontSize: "12px" }}
                      value={data[field]?.left || ""}
                      onChange={(e) =>
                        handleChange(field, "left", e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button className="btn btn-secondary btn-sm" onClick={resetData}>
            Edit
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleSubmitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}