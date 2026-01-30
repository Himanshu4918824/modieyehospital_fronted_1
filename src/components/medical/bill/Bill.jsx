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

  const [gst1,setGst1]=useState('GST 0.00%');
  const [gst2,setGst2]=useState('GST 5.00%');
  const [gst3,setGst3]=useState('GST 12.00%');
  const [gst4,setGst4]=useState('GST 18.00%');
  const [gst5,setGst5]=useState('GST 28.00%');

  const [tot1,settot1]=useState('');
  const [tot2,settot2]=useState('');
  const [tot3,settot3]=useState('');
  const [tot4,settot4]=useState('');
  const [tot5,settot5]=useState('');

  const [dis1,setDis1]=useState('');
  const [dis2,setDis2]=useState('');
  const [dis3,setDis3]=useState('');
  const [dis4,setDis4]=useState('');
  const [dis5,setDis5]=useState('');

  const [tax1,setTax1]=useState('');
  const [tax2,setTax2]=useState('');
  const [tax3,setTax3]=useState('');
  const [tax4,setTax4]=useState('');
  const [tax5,setTax5]=useState('');
  

  const [sgst1,setSgst1]=useState('');
  const [sgst2,setSgst2]=useState('');
  const [sgst3,setSgst3]=useState('');
  const [sgst4,setSgst4]=useState('');
  const [sgst5,setSgst5]=useState('');

  const [cgst1,setCgst1]=useState('');
  const [cgst2,setCgst2]=useState('');
  const [cgst3,setCgst3]=useState('');
  const [cgst4,setCgst4]=useState('');
  const [cgst5,setCgst5]=useState('');

  const [tolGst1,setTolGst1]=useState('');
  const [tolGst2,setTolGst2]=useState('');
  const [tolGst3,setTolGst3]=useState('');
  const [tolGst4,setTolGst4]=useState('');
  const [tolGst5,setTolGst5]=useState('');


  const [sgstPay,setSgstPay]=useState('');
  const [CgstPay,setCgstPay]=useState('');
  const [round,setRound]=useState('');
  const [discount,setDiscount]=useState('');
  const [totalAmount,setTotalAmount]=useState('');
  

 

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

        <div style={{padding:10,width:'100%',display:'flex',marginTop:'10%'}} className="table-responsive">
          <table style={{width:'80%',borderCollapse:'collapse',fontSize:14}} className="table table-bordered table-sm purchase-table">
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
              <tr>
                  
                  <th><input type="text" className="form-control form-control-sm" value={gst1} onChange={(e)=>setGst1(e.target.value)} /></th>
                  <td><input type="text" className="form-control form-control-sm" value={tot1} onChange={(e)=>settot1(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={dis1} onChange={(e)=>setDis1(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tax1} onChange={(e)=>setTax1(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={sgst1} onChange={(e)=>setSgst1(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={cgst1} onChange={(e)=>setCgst1(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tolGst1} onChange={(e)=>setTolGst1(e.target.value)} /></td>

              </tr>

              <tr>
                  <th><input size={2} type="text" className="form-control form-control-sm" value={gst2} /></th>
                  <td><input type="text" className="form-control form-control-sm" value={tot2} onChange={(e)=>settot2(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={dis2} onChange={(e)=>setDis2(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tax2} onChange={(e)=>setTax2(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={sgst2} onChange={(e)=>setSgst2(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={cgst2} onChange={(e)=>setCgst2(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tolGst2} onChange={(e)=>setTolGst2(e.target.value)} /></td>

              </tr>

              <tr>
                  <th><input size={2} type="text" className="form-control form-control-sm" value={gst3} /></th>
                  <td><input type="text" className="form-control form-control-sm" value={tot3} onChange={(e)=>settot3(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={dis3} onChange={(e)=>setDis3(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tax3} onChange={(e)=>setTax3(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={sgst3} onChange={(e)=>setSgst3(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={cgst3} onChange={(e)=>setCgst3(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tolGst3} onChange={(e)=>setTolGst3(e.target.value)} /></td>

              </tr>

              <tr>
                  <th><input size={2} type="text" className="form-control form-control-sm" value={gst4} /></th>
                 <td><input type="text" className="form-control form-control-sm" value={tot4} onChange={(e)=>settot4(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={dis4} onChange={(e)=>setDis4(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tax4} onChange={(e)=>setTax4(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={sgst4} onChange={(e)=>setSgst4(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={cgst4} onChange={(e)=>setCgst4(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tolGst4} onChange={(e)=>setTolGst4(e.target.value)} /></td>

              </tr>

              <tr>
                  <th><input size={2} type="text" className="form-control form-control-sm" value={gst5} /></th>
                  <td><input type="text" className="form-control form-control-sm" value={tot5} onChange={(e)=>settot5(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={dis5} onChange={(e)=>setDis5(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tax5} onChange={(e)=>setTax5(e.target.value)} /></td>
                  <td><input type="text" className="form-control form-control-sm" value={sgst5} onChange={(e)=>setSgst5(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={cgst5} onChange={(e)=>setCgst5(e.target.value)}  /></td>
                  <td><input type="text" className="form-control form-control-sm" value={tolGst5} onChange={(e)=>setTolGst5(e.target.value)} /></td>
              </tr>
            </tbody>

          </table>

           <div style={{marginTop:10,marginLeft:'auto'}}>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
              <b>SGST PAYABLE:</b>
              <input value={sgstPay} onChange={(e)=>setSgstPay(e.target.value)} type="text" className="form-control form-control-sm" style={{width:'150px'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
              <b>CGST PAYABLE:</b>
              <input value={CgstPay} onChange={(e)=>setCgstPay(e.target.value)} type="text" className="form-control form-control-sm" style={{width:'150px'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
              <b>ROUND OFF:</b>
              <input value={round} onChange={(e)=>setRound(e.target.value)} type="text" className="form-control form-control-sm" style={{width:'150px', marginLeft:'17px'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px'}}>
              <b>Discount:</b>
              <input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="text" className="form-control form-control-sm" style={{width:'150px', marginLeft:'40px'}} />
            </div>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
              <h3 style={{margin:0}}>TOTAL: ₹</h3>
              <input value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)} type="text" className="form-control form-control-sm" style={{width:'150px', marginLeft:'6px'}} />
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


