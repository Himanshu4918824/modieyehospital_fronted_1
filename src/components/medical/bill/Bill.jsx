import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import { postData } from "../../../services/FetchNodeAdminServices";
import Header from "../../admin/homepage/Header";
import { useContext, useState, useEffect } from "react";

export default function Bill() {
  const { product, supplier, getAllCompany, getAllProduct } = useContext(MainContext);
  const navigate = useNavigate();

  const emptyRow = { productId: "", pack: "", batchNo: "", expiryDate: "", quantity: "", freeQty: "", mrp: "", purchaseRate: "", gstPercent: "", amount: "" };
  const [items, setItems] = useState([emptyRow]);

  const [companyName, setCompanyName] = useState('');
  const [billNo, setBillNo] = useState('');
  const [type, settype] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    getAllCompany();
    getAllProduct()
  }, [])


  // Update input
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };


  // Check row complete
  const isRowComplete = (row) => {
    return row.pack && row.batchNo && row.expiryDate && row.quantity && row.freeQty && row.mrp && row.purchaseRate && row.gstPercent;
  };


  // Enter key handler
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // If last row & completed → add new row
      if (index === items.length - 1 && isRowComplete(items[index])) {
        setItems([...items, emptyRow]);
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

    const billData = {
      supplierId: companyName,   // you can bind later
      invoiceNo: billNo,
      type: type,
      invoiceDate: new Date(),
      items: filteredItems
    };

    try {
      console.log(billData)
      const response = await postData("medical/api/PurchaseBill", billData);

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



  return (<div>
    <div>
      <Header />
    </div>

    <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20' }} >
      Add Bill
    </div>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', margin: 10, padding: 10, borderRadius: 10 }}>

        <div className="row mb-2">
          <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Company Name :</label>
            <select className="form-select"
              value={companyName}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "other") {
                  navigate("/addcompany");
                } else {
                  setCompanyName(value);
                }

              }}
            >
              <option value="">Select Company Name</option>

              {supplier?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}

              <option value="other">Other</option>
            </select>

          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Bill No :</label>
            <input value={billNo} onChange={(e) => setBillNo(e.target.value)} type="text" className="form-control form-control-sm" />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Type :</label>
            <input value={type} onChange={(e) => settype(e.target.value)} type="text" className="form-control form-control-sm" />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Date :</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-sm" />
          </div>

        </div>



        <div className="table-responsive">
          <table className="table table-bordered table-sm purchase-table">
            <thead className="table-light">
              <tr>
                <th>PRODUCT</th>
                <th>PACK</th>
                <th>BATCH</th>
                <th>EXPIRE DATE</th>
                <th>QTY</th>
                <th>FREE</th>
                <th>M.R.P</th>
                <th>P. RATE/S</th>
                <th>GST %</th>
                <th>AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (

                <tr key={index}>
                  <td><select className="form-select"
                    aria-label="Default select example"
                    value={item.productId}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "Other") {
                        navigate("/addproduct");
                      } else {
                        handleChange(index, "productId", value)
                      }

                    }}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    <option defaultValue={true}>Select Product Name</option>

                    {product?.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}

                    <option value="Other">Other</option>
                  </select>
                  </td>


                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.pack} onChange={(e) => handleChange(index, "pack", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={item.batchNo} onChange={(e) => handleChange(index, "batchNo", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="date" className="form-control form-control-sm" value={item.expiryDate} onChange={(e) => handleChange(index, "expiryDate", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.quantity} onChange={(e) => handleChange(index, "quantity", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.freeQty} onChange={(e) => handleChange(index, "freeQty", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.mrp} onChange={(e) => handleChange(index, "mrp", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={4} type="text" className="form-control form-control-sm" value={item.purchaseRate} onChange={(e) => handleChange(index, "purchaseRate", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.gstPercent} onChange={(e) => handleChange(index, "gstPercent", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
                  <td><input size={2} type="text" className="form-control form-control-sm" value={item.mrp * item.quantity + (item.mrp * item.quantity) * item.gstPercent / 100} /></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-lg-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleSave} type="button" className="btn btn-primary">Save</button>
          </div>

          <div className="col-lg-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={resetData} type="button" className="btn btn-primary">Cancel</button>
          </div>

        </div>



      </div>
    </div>
  </div>)
}






{/*
      <div className="row mt-2">
        <div className="col-md-4 border p-2">
            <div className="d-flex justify-content-between">
            <span className="fw-bold">Item :</span>
            <span>0.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">Stock :</span>
            <span>0.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">Batch :</span>
            <span>0.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">SRate :</span>
            <span>0.00</span>
          </div>
          
        </div>


        <div className="col-md-4 border p-2">
            <div className="d-flex justify-content-between">
            <span className="fw-bold">Expiry :</span>
            <span>0.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">Date :</span>
            <span>0.00</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-bold">M.R.P :</span>
            <span>0.00</span>
          </div>
          
        </div>



        <div className="col-md-4 border p-2">
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Value of Goods :</span>
            <span>0.00</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Discount :</span>
            <span>0.00</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">GST :</span>
            <span>0.00</span>
          </div>
        </div>
      </div>
      
      */}


