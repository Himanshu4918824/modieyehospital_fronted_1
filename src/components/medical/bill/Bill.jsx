import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../context/MainContext";
import { postData } from "../../../services/FetchNodeAdminServices";
import Header from "../../admin/homepage/Header";
import { useContext, useState, useEffect, useMemo } from "react";

export default function Bill() {
  const { product, supplier, getAllCompany, getAllProduct } = useContext(MainContext);
  const navigate = useNavigate();

  const emptyRow = { productId: "", pack: "", batchNo: "", expiryDate: "", quantity: "", freeQty: "", mrp: "", purchaseRate: "", gstPercent: "", amount: "" };
  const [items, setItems] = useState([emptyRow]);

  const [companyName, setCompanyName] = useState('');
  const [billNo, setBillNo] = useState('');
  const [type, settype] = useState('');
  const [date, setDate] = useState('');

  const [sgstPay, setSgstPay] = useState(0);
  const [CgstPay, setCgstPay] = useState(0);
  const [round, setRound] = useState(0);
  const [discount, setDiscount] = useState(0);
  // const [totalAmount,setTotalAmount]=useState(0);

  const GST_SLABS = [0, 5, 12, 18, 28];

  const [gstSummary, setGstSummary] = useState(
    GST_SLABS.map(rate => ({
      rate,
      total: 0,
      discount: 0,
      taxable: 0,
      sgst: 0,
      cgst: 0,
      totalGst: 0
    }))
  );

  const calculatedGST = useMemo(() => {
    return GST_SLABS.map(rate => {

      const filteredItems = items.filter(
        item => Number(item.gstPercent) === rate
      );

      const total = filteredItems.reduce((sum, item) => {
        const qty = Number(item.quantity) || 0;
        const mrp = Number(item.mrp) || 0;

        return sum + qty * mrp;
      }, 0);

      const taxable = total;
      const gstAmount = taxable * rate / 100;

      return {
        rate,
        total,
        discount: 0,
        taxable,
        sgst: gstAmount / 2,
        cgst: gstAmount / 2,
        totalGst: gstAmount
      };
    });

  }, [items]);

  const totalAmount = useMemo(() => {
    return calculatedGST.reduce((sum, slab) => sum + slab.total + slab.totalGst, 0);
  }, [calculatedGST]);

  const totalGst = useMemo(() => {
    return calculatedGST.reduce((sum, slab) => sum + slab.totalGst, 0);
  },[calculatedGST])

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
      invoiceDate: new Date(date),
      items: filteredItems,
      roundOff : Math.ceil(totalAmount) ,
      discount : discount,
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

          {/* <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Type :</label>
            <input value={type} onChange={(e) => settype(e.target.value)} type="text" className="form-control form-control-sm" />
          </div> */}

          <div className="col-md-3">
            <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Date :</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-sm" />
          </div>

<div className="col-md-2"></div>
          <div onClick={() => navigate('/showbill')} className="col-md-1 d-flex align-items-center mt-3">
            <button type="button" className="btn btn-primary">Show Bill</button>
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

        <div style={{ padding: 10, width: '100%', display: 'flex', marginTop: '10%' }} className="table-responsive">
          <table style={{ width: '80%', borderCollapse: 'collapse', fontSize: 14 }} className="table table-bordered table-sm purchase-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Total</th>
                <th>Discount</th>
                <th>TAXABLE</th>
                <th>SGST</th>
                <th>CGST</th>
                <th>Total GST</th>
              </tr>
            </thead>

            <tbody>
              {calculatedGST.map((slab) => (
                <tr key={slab.rate}>
                  <th>GST {slab.rate}%</th>
                  <td>{slab.total.toFixed(2)}</td>
                  <td>{slab.discount}</td>
                  <td>{slab.taxable.toFixed(2)}</td>
                  <td>{slab.sgst.toFixed(2)}</td>
                  <td>{slab.cgst.toFixed(2)}</td>
                  <td>{slab.totalGst.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>

          </table>

          <div style={{ marginTop: 10, marginLeft: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <b>SGST PAYABLE:</b>
              <input value={totalGst/2} disabled type="text" className="form-control form-control-sm" style={{ width: '150px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <b>CGST PAYABLE:</b>
              <input value={totalGst/2} disabled type="text" className="form-control form-control-sm" style={{ width: '150px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <b>ROUND OFF:</b>
              <input value={Math.ceil(totalAmount) - totalAmount} disabled type="text" className="form-control form-control-sm" style={{ width: '150px', marginLeft: '17px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <b>Discount:</b>
              <input value={discount} disabled type="text" className="form-control form-control-sm" style={{ width: '150px', marginLeft: '40px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ margin: 0 }}>TOTAL: ₹</h3>
              <input value={totalAmount} disabled type="text" className="form-control form-control-sm" style={{ width: '150px', marginLeft: '6px' }} />
            </div>
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


