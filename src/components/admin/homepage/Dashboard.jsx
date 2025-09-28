import DoctorConcern from "./DoctorConcern";
//import Patient from "./Patient";
import PatientHistory from "./PatientHistory";

export default function DashBoard() {
  var data = [
    "send",
    "History",
    "Primary",
    "Opto",
    "Remakrs",
    "Summary",
    "Procedure",
    "Proc. Summ.",
    "Document",
    "Post-Op",
    "Prog.Note",
    "IP Medicine",
    "IOG Graphs",
    "OC",
    "OT Check",
    "Drawing",
    "Drawing Summ.",
    "Template",
    "T.C.",
  ];

  const showButton = () => {
    return data.map((item, i) => (
      <button
        key={i}
        style={{ margin: 2, borderRadius: 5, background: "pink" }}
      >
        {item}
      </button>
    ));
  };

  return (
    <div>
      <div
        style={{
          background: "lightgrey",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Doctor Examination
      </div>

      {/* Buttons row */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>{showButton()}</div>

      {/* Table */}
      <div className="row mb-3 mt-3">

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Appointment No.:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

        <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Patient Name</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Doctor Name</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

          <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Patient Age</span>
              <input type="text" class="form-control"/>
             </div>
         </div>    
        
      </div>

       <div className="row mb-3 mt-3">

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Patient DOB:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

        <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Reffered By:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Insurance:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

          <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Address</span>
              <input type="text" class="form-control"/>
             </div>
         </div>    
        
      </div>


      <div className="row mb-3 mt-3">

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">City</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

        <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">State</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

         <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Reg.Dt:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>

          <div className="col-xs-12 col-lg-3">
            <div class="input-group">
              <span class="input-group-text">Last Visit Date:</span>
              <input type="text" class="form-control"/>
             </div>
         </div>    
        
      </div>



      
      
       

      {/* Components in 3 columns */}
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <DoctorConcern />
        </div>
        <div className="col-lg-7 col-sm-12">
          <PatientHistory />
        </div>
        
      </div>
    </div>
  );
}
