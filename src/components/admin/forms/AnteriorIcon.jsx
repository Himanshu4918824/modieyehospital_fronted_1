export default function AnteriorIcon()
{
    return(<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 650, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

        <div className="row">
            <div className="col-lg-6 col-xs-12">
                <div className="fs-4 fw-bold mb-2">Left Eye</div>
                <div>
                    <img src="/images/lefteyeretinal.jpg" alt="lefteye" style={{width:270}}/>
                </div>
            </div>

            <div className="col-lg-6 col-xs-12">
                <div className="fs-4 fw-bold mb-2">Right Eye</div>
                <div>
                    <img src="/images/righteyeretinal.jpg" alt="lefteye" style={{width:270}}/>
                </div>
            </div>

        </div>

        
         <div className="row mb-2 mt-3">
        <div className="col-6 d-flex justify-content-center">
          <button type="Submit" className="btn btn-primary">Submit</button>
        </div>

        <div className="col-6 d-flex justify-content-center">
          <button type="reset" className="btn btn-primary">Edit</button>
        </div>

      </div>



</div>
    </div>)
}