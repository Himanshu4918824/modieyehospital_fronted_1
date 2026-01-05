import Header from "../../admin/homepage/Header";

export default function Bill()
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' ,  height:'20'}} >
           Add Bill
        </div>

          <div className="container-fluid px-3">
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
              <th>QTY</th>
              <th>FREE</th>
              <th>P. RATE/S</th>
              <th>DIS %</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "180px" }}>
              <td><input  type="text" className="form-control form-control-sm" /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" /></td>
              <td><input type="text" className="form-control form-control-sm" /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" /></td>
              <td><input size={2} type="text" className="form-control form-control-sm" /></td>
              <td><input size={4} type="text" className="form-control form-control-sm" /></td>
            </tr>
          </tbody>
        </table>
      </div>

    
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

</div>


    </div>)
}


