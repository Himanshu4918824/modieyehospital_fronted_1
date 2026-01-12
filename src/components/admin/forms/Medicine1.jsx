import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import { postData } from "../../../services/FetchNodeAdminServices";
import Header from "../../admin/homepage/Header";
import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";

export default function Medicine1() {
  const { Medicine, getAllProduct, product, Aid } = useContext(MainContext);
  const navigate = useNavigate();

  const emptyRow = { DrugName: "", eye: "", type: "", dose: "", duration: "", time: "", comment: "" };
  const [items, setItems] = useState([emptyRow]);
  useEffect(() => {
    getAllProduct()
  }, [])


  useEffect(() => {
    if (!Medicine?.length) return;

    setItems([{
      DrugName: Medicine[0]?.DrugName || "",
      eye: Medicine[0]?.eye || "",
      type: Medicine[0]?.type || "",
      dose: Medicine[0]?.dose || "",
      duration: Medicine[0]?.duration || "",
      time: Medicine[0]?.time || "",
      comment: Medicine[0]?.comment || "",
      id: Medicine[0]?.comment || ""
    }]);

    setTimeout(() => {
      window.$('.selectpicker').selectpicker('refresh');
    }, 500);

  }, [Medicine])


  // Update input
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };


  // Check row complete
  const isRowComplete = (row) => {
    return (
      row.DrugName &&
      row.eye &&
      row.type &&
      row.dose &&
      row.duration &&
      row.time &&
      row.comment
    );

  };


  // Enter key handler
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // If last row & completed → add new row
      if (index === items.length - 1 && isRowComplete(items[index])) {
        setItems([...items, { ...emptyRow }]);
      }
    }
  };


  const handleSave = async () => {

    // remove empty rows
    const filteredItems = items.filter(row => isRowComplete(row));

    if (filteredItems.length === 0) {
      alert("Please enter at least one item");
      return;
    }

    try {
      // console.log(filteredItems)
      const response = await postData(`patient/v1/Medicine/${Aid}`, { filteredItems });
      console.log(response)
      const result = response.data;
      // console.log(response)
      if (result.success) {
        alert("Bill Saved Successfully ✅");
        setItems([emptyRow]); // reset table
      } else {
        alert("Failed to save bill ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    }
  };


  function resetData() {
    setItems([emptyRow])
  }




  const handleEditData = async () => {
    try {
      const medicines = items.filter(row => isRowComplete(row));

      if (filteredItems.length === 0) {
        alert("Please enter at least one item");
        return;
      }


      const formData = new FormData();

      // append medicines array
      formData.append("medicines", JSON.stringify(medicines));

      // convert FormData → Object (like your code)
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      const result = await putData(`patient/v1/update/Medicine/${id}`, formDataObj);

      if (result.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Medicine Updated Successfully",
          showConfirmButton: false,
          timer: 2000
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Medicine Update Failed",
          showConfirmButton: false,
          timer: 2000
        });
      }

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        timer: 2000
      });
    }
  };


  const handleCreateTemplate = async () => {
    try {
      const filteredItems = items.filter(row => isRowComplete(row));

      if (filteredItems.length === 0) {
        alert("Please enter at least one item");
        return;
      }

      const Name = prompt("Template Name:", ""); // Prompt for template name

      const result = await postData(`medical/api/addTemplate`, { description: filteredItems, name: Name });
      if (result.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Template Created Successfully",
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
    } catch (error) {
      console.error(error)
    }
  }

  // const handletemplateChange = (id) => {
  //     getAllTemplatesData(id);
  // }


  return (<div>

    <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20' }} >
      Add Medicine
    </div>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', margin: 10, padding: 10, borderRadius: 10 }}>

        <div className="table-responsive">
          <table className="table table-bordered table-sm purchase-table">
            <thead className="table-light">
              <tr>
                <th>Drug Name</th>
                <th>Eye</th>
                <th>Type</th>
                <th>Dose</th>
                <th>Duration</th>
                <th>Personal Comment</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (

                <tr key={index}>
                  <td>
                    <select className="form-select selectpicker"
                      data-live-search="true"
                      aria-label="Default select example"
                      value={item.DrugName}
                      onChange={(e) => handleChange(index, "DrugName", e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <option defaultValue={true}>Select Drug Name</option>

                      {product?.map((item) => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      ))}

                      <option value="Other">Other</option>
                    </select>
                  </td>


                  <td>
                    <select className="form-select selectpicker"
                      data-live-search="true"
                      value={item.eye}
                      onChange={(e) => handleChange(index, "eye", e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <option value='Select eye'>Select Eye</option>
                      <option value='Left eye'>Left Eye</option>
                      <option value='Right eye'>Right Eye</option>
                      <option value='Both eye'>Both Eye</option>
                    </select>
                  </td>

                  <td>
                    <select className="form-select selectpicker"
                      data-live-search="true"
                      aria-label="Default select example"
                      value={item.type}
                      onChange={(e) => handleChange(index, "type", e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                      <option value='Select Type'>Select Type</option>
                      <option value='Eye Drop'>Eye Drop</option>
                      <option value='Eye/o'>Eye/o</option>
                      <option value='Tablet'>Tablet</option>
                      <option value='Syrup'>Syrup</option>
                      <option value='Other'>Other</option>

                    </select>
                  </td>

                  <td><input size={2} type="text" className="form-control" value={item.dose} onChange={(e) => handleChange(index, "dose", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>

                  <td>
                    <div style={{ display: 'flex' }}>
                      <input size={2} style={{ width: "70px", marginRight: 5 }} type="text" className="form-control form-control-sm" value={item.duration} onChange={(e) => handleChange(index, "duration", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} />
                      <select className="form-select selectpicker"
                        data-live-search="true"
                        value={item.time}
                        onChange={(e) => handleChange(index, "time", e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, index)}

                      >
                        <option value='Select Duration'>Select Duration</option>
                        <option value='Days'>Days</option>
                        <option value='Week'>Week</option>
                        <option value='Month'>Month</option>
                        <option value='Year'>Year</option>


                      </select>
                    </div>
                  </td>

                  <td><input size={2} type="text" className="form-control" value={item.comment} onChange={(e) => handleChange(index, "comment", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleSave} type="button" className="btn btn-primary">Save</button>
          </div>

          <div className="col-lg-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={resetData} type="button" className="btn btn-primary">Cancel</button>
          </div>

          <div className="col-lg-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleEditData} type="reset" className="btn btn-primary">Edit</button>
          </div>

          <div className="col-lg-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleCreateTemplate} className="btn btn-primary">Create Templeate</button>
          </div>

        </div>



      </div>
    </div>
  </div>)
}




