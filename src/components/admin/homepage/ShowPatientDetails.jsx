import Header from '../homepage/Header'
export default function ShowPatientDetails()
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{ background: "lightgrey",textAlign:'center', width: "100%", height:'50px', fontWeight: "bold", fontSize:20 }} >
            Patient List
         </div>

         <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Pateint Id</th>
                        <th>Pateint Name</th>
                        <th>Mobile No.</th>
                        <th>Gender</th>
                        <th>Dob</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Reffered By</th>
                        <th>Insurance</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className="table-group-divider">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button type='button' className="btn btn-warning">Update</button></td>
                    </tr>
                   
                    
                </tbody>
            </table>
         </div>

    </div>)
}