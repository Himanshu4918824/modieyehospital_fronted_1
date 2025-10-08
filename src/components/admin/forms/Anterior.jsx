export default function Anterior({onClose, onRefresh}) 
{
  const fields = ["Intraocular pressure (NCT)", "Intraocular pressure (Tonopen)", "Intraocular pressure (AT)", "Eyelids", "Eyelashes", "Lacrimal punctum", "Orbit", "Extraocular movements", "Eye position", "Sclera/episclera", "Conjunctiva", "Cornea", "Anterior chamber", "Angles", "Iris/pupil", "Lens", "Lacrimal syringing", "Gonioscopy", "Others",];

  function resetData()
  {
    onClose();
    onRefresh();
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <div style={{ width: 600, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "40%" }}>Parameter</th>
              <th>Right Eye</th>
              <th>Left Eye</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={index}>
                <td className="text-start">{field}</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-secondary" onClick={resetData}>Cancel</button>
          <button className="btn btn-primary" >Confirm</button>
        </div>



      </div>

    </div>)
}