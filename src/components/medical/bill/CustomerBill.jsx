import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import { postData } from "../../../services/FetchNodeAdminServices";
import Header from "../../admin/homepage/Header";
import { useContext, useState, useEffect } from "react";

export default function CustomerBill() {
  const { product, supplier, getAllCompany, getAllProduct } = useContext(MainContext);
  const navigate = useNavigate();

  const emptyRow = { productId: "", quantity: "", mrp: "", amount: "" };
  const [items, setItems] = useState([emptyRow]);

  const [patientName, setPatientName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    getAllCompany();
    getAllProduct();
  }, [])


  // Update input
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };


  // Recalculate totals when items or discount change
  useEffect(() => {
    const sum = items.reduce((acc, row) => {
      const q = Number(row.quantity) || 0;
      const m = Number(row.mrp) || 0;
      return acc + q * m;
    }, 0);
    setSubtotal(sum);
    const disc = Number(discount) || 0;
    setTotalAmount(Math.max(0, sum - disc));
  }, [items, discount]);


  // Check row complete
  const isRowComplete = (row) => {
    return row.quantity && row.mrp && row.productId;
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
    const filteredItems = items
      .filter(row => isRowComplete(row))
      .map(row => ({
        ...row,
        amount: Number(row.quantity) * Number(row.mrp)
      }));;

    if (filteredItems.length === 0) {
      alert("Please enter at least one item");
      return;
    }

    const billData = {
      name: patientName,   // you can bind later
      phone: phoneNo,
      amount: subtotal,
      TotalAmount: totalAmount,
      discount: discount,
      items: filteredItems
    };

    try {
      console.log(billData)
      const response = await postData("medical/api/saleBill", billData);

      const result = response.data;
      console.log(response)
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
      Customer Bill
    </div>

    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', margin: 10, padding: 10, borderRadius: 10 }}>

        <div className="row mb-2">
          <div className="col-md-4">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Patient Name :</label>
            <input value={patientName} onChange={(e) => setPatientName(e.target.value)} type="text" className="form-control form-control-sm" />

          </div>

          <div className="col-md-4">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Phone No :</label>
            <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} type="text" className="form-control form-control-sm" />
          </div>


          {/* <div className="col-md-4">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Date :</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-sm" />
          </div> */}

        </div>

        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered table-sm purchase-table">
                <thead className="table-light">
                  <tr>
                    <th>PRODUCT NAME</th>
                    <th>QTY</th>
                    <th>M.R.P</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    const q = Number(item.quantity) || 0;
                    const m = Number(item.mrp) || 0;
                    const rowAmount = q * m;
                    return (
                      <tr key={index}>
                        <td>
                          <select className="form-select"
                            aria-label="Default select example"
                            value={item.productId}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value === "Other") {
                                navigate("/addproduct");
                              } else {
                                handleChange(index, "productId", value);
                              }
                            }}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          >
                            <option value="">Select Product Name</option>

                            {product?.map((prod) => (
                              <option key={prod.id} value={prod.id}>{prod.name}</option>
                            ))}

                            <option value="Other">Other</option>
                          </select>
                        </td>

                        <td>
                          <input type="number" min="0" className="form-control form-control-sm" value={item.quantity} onChange={(e) => handleChange(index, "quantity", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} />
                        </td>

                        <td>
                          <input type="number" min="0" step="0.01" className="form-control form-control-sm" value={item.mrp} onChange={(e) => handleChange(index, "mrp", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} />
                        </td>

                        <td>
                          {rowAmount ? (rowAmount.toFixed(2)) : ""}
                        </td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Amount:</label>
            <input value={subtotal.toFixed(2)} readOnly type="text" className="form-control form-control-sm" />

            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Discount:</label>
            <input type="number" min="0" step="0.01" value={discount} onChange={(e) => setDiscount(e.target.value)} className="form-control form-control-sm" />

            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Total Amount :</label>
            <input value={totalAmount.toFixed(2)} readOnly type="text" className="form-control form-control-sm" />
          </div>

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