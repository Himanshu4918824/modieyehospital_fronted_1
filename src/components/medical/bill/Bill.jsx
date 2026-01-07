import Header from "../../admin/homepage/Header";
import { useState } from "react";

export default function Bill()
{

  const emptyRow = { product: "", pack: "", batch: "", expdate: "", qty: "", free: "", mrp: "", purchaserate: "", gst: "", amount: "" };
  const [items, setItems] = useState([emptyRow]);

   // Update input
  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };


  // Check row complete
  const isRowComplete = (row) => {
    return row.product && row.pack && row.batch && row.expdate && row.qty && row.free && row.mrp && row.purchaserate && row.gst;
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
    customerName: "",   // you can bind later
    billNo: "",
    type: "",
    date: new Date(),
    items: filteredItems
  };

  try {
    const response = await fetch("http://localhost:5000/bill/save", {body: JSON.stringify(billData)});

    const result = await response.json();

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


function resetData()
{
  setItems([emptyRow])
}



    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' ,  height:'20'}} >
           Add Bill
        </div>

          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: '100%', margin: 10, padding: 10, borderRadius: 10 }}>

              <div className="row mb-2">
                <div className="col-md-3">
                 <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Name :</label>
                  <input type="text" className="form-control form-control-sm" />
                 </div>

        <div className="col-md-3">
          <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Bill No :</label>
          <input type="text" className="form-control form-control-sm" />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Type :</label>
          <input type="text" className="form-control form-control-sm" />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-bold me-2 mb-0" style={{ whiteSpace: 'nowrap' }}>Date :</label>
          <input type="text" className="form-control form-control-sm" />
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
                            value={item.product} 
                            onChange={(e) => handleChange(index, "product", e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                      >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                     </select>
                </td>

                
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.pack} onChange={(e) => handleChange(index, "pack", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input type="text" className="form-control form-control-sm"  value={item.batch} onChange={(e) => handleChange(index, "batch", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.expdate} onChange={(e) => handleChange(index, "expdate", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.qty} onChange={(e) => handleChange(index, "qty", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)}/></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.free} onChange={(e) => handleChange(index, "free", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.mrp} onChange={(e) => handleChange(index, "mrp", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={4} type="text" className="form-control form-control-sm" value={item.purchaserate} onChange={(e) => handleChange(index, "purchaserate", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.gst} onChange={(e) => handleChange(index, "gst", e.target.value)} onKeyDown={(e) => handleKeyDown(e, index)} /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" value={item.mrp*item.qty + (item.mrp*item.qty)*item.gst/100}/></td>
            </tr>
            ))}

          </tbody>
        </table>
      </div>

       <div className="row">
               <div className="col-lg-6" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                  <button  onClick={handleSave} type="button" class="btn btn-primary">Save</button>
               </div>

               <div className="col-lg-6" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                  <button onClick={resetData} type="button" class="btn btn-primary">Cancel</button>
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


