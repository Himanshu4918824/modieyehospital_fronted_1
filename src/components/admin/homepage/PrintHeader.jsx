import logo2 from "../../../assets/logo2.png";

export default function PrintHeader() 
{
  return (<div id="printArea">
      <div className="border p-4 bg-white shadow-sm">

        {/* Header Row */}
        <div className="row text-center border-bottom pb-1">

          <div className="col-6">
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                 <div><img src={logo2} style={{width:80}}/></div>

                 <div>
                    <h5 className="fw-bold mb-0">Modi eye care</h5>
                    <small className="text-muted">group of hospitals</small>
                 </div>
            </div>     
          </div>


           <div className="col-6">
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                 <div><img src={logo2} style={{width:80}}/></div>

                 <div>
                    <h5 className="fw-bold mb-0">Modi retina foundation</h5>
                    <small className="text-muted"> One stop specialty retina center... Imaging... Lasers... Surgeries</small>
                 </div>
            </div>     
          </div>


        </div>



        {/* Doctors */}
        <div className="row text-center mt-2">
          <div className="col-4">
            <strong>Dr. Hemant Modi D.O.M.S</strong>
            <div className="small">Reg. No: 4736</div>
            <div className="small">Director Modi Eye Care 1</div>
          </div>

          <div className="col-4">
            <strong>Dr. Aditya Modi FRCS (Glasgow, UK)</strong>
            <div className="small">Reg. No: 21875</div>
            <div className="small">Director Modi Eye Care 2</div>
            <div className="small">Modi Retina Foundation</div>
          </div>

          <div className="col-4">
            <strong>Dr. Ruma Modi MS</strong>
            <div className="small">Reg. No: 2967</div>
            <div className="small">Director Modi Maternity Home</div>
          </div>
        </div>

        <hr/>

        {/* Patient Info */}
       {/*  <div className="row">
          <div className="col-3">
            <strong>Patient Name:</strong> 16
          </div>

          <div className="col-3">
          </div>

          <div className="col-3">
            <strong>Appointment No:</strong>
          </div>

          <div className="col-3 text-md-end">
            <strong>MRD No:</strong> 06-02-2026
          </div>

         
        </div>


        <div className="row">
          <div className="col-3">
            <strong>Age:</strong> 16
          </div>

          <div className="col-3">
            <strong>Gender:</strong> Male
          </div>

          <div className="col-3">
            <strong>Appointment Date:</strong>
          </div>

          <div className="col-3 text-md-end">
            <strong>Reg. Date:</strong> 06-02-2026
          </div>

         
        </div> 

       */}
      </div>
    </div>
  );
}