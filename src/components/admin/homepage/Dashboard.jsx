import DoctorConcern from "./DoctorConcern";
import Patient from "./Patient";
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
      <div className="table-responsive mb-3">
        <table
          className="table table-bordered"
          border={3}
          cellSpacing={0}
          style={{ width: "100%", marginBottom: 0, tableLayout: "fixed" }}
        >
          <thead>
            <tr>
              <th style={{ width: "16%", padding: "1px" }}>Patient</th>
              <th style={{ width: "8%", padding: "1px" }}></th>
              <th style={{ width: "16%", padding: "1px" }}>181318</th>
              <th style={{ width: "16%", padding: "1px" }}>Patient</th>
              <th style={{ width: "8%", padding: "1px" }}></th>
              <th style={{ width: "16%", padding: "1px" }}>181318</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Components in 3 columns */}
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <DoctorConcern />
        </div>
        <div className="col-lg-4 col-sm-12">
          <PatientHistory />
        </div>
        <div className="col-lg-4 col-sm-12">
          <Patient />
        </div>
      </div>
    </div>
  );
}
