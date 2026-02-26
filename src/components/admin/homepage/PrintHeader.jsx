import logo2 from "../../../assets/logo2.png";


export default function PrintHeader({ Name, AppointmentNo, MRDNo, Age, DOB, Date }) {
  return (
    <div >
      <div className="border p-4 bg-white shadow-sm">

        {/* Header Row */}
        <div className="d-flex align-items-center justify-content-around border-bottom pb-1">

          <div className=" d-flex align-items-center justify-content-center">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div><img src={logo2} style={{ width: 80 }} /></div>

              <div>
                <h5 className="fw-bold mb-0">Modi eye care</h5>
                <small className="text-muted">group of hospitals</small>
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-center align-items-center">
            <div style={{ display: 'flex',justifyContent: 'center' }}>
              <div><img src={logo2} style={{ width: 80 }} /></div>

              <div>
                <h5 className="fw-bold mb-0">Modi retina foundation</h5>
                <small className="text-muted " > One stop specialty retina center... Imaging... Lasers... Surgeries</small>
              </div>
            </div>
          </div>


        </div>



        {/* Doctors */}
        {/* <div className="row text-center mt-2">
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
        </div> */}

        <hr />

        {/* Patient Info */}
        <div className="d-flex justify-content-between mb-2">
          <div className="">
            <strong>Patient Name:</strong> {Name}
          </div>
          <div className="">
            <strong>Age:</strong> {Age}
          </div>

          <div className="">
            <strong>DOB:</strong> {DOB}
          </div>

        </div>


        <div className="d-flex justify-content-between mb-2">
          <div className="">
            <strong>Appointment No:</strong> XXXX{AppointmentNo}
          </div>

          <div className=" text-md-end">
            <strong>MRD No:</strong> {MRDNo}
          </div>

          <div className="">
            <strong>Appointment Date:</strong> {Date}
          </div>

          {/* <div className=" text-md-end">
            <strong>Reg. Date:</strong> 06-02-2026
          </div> */}


        </div>


      </div>
    </div>
  );
}