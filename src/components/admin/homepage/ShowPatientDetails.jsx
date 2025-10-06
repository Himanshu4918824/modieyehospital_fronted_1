import { useContext } from 'react'
import Header from '../homepage/Header'
import MainContext from '../../../context/MainContext'
import { useEffect } from 'react'

export default function ShowPatientDetails() {
    const { allPatients, getAllPatients } = useContext(MainContext)
    useEffect(() => { getAllPatients() }, [])
    return (
        <div>
            <div>
                <Header />
            </div>

            <div style={{ background: "lightgrey", textAlign: 'center', width: "100%", height: '50px', fontWeight: "bold", fontSize: 20 }} >
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
                    {console.log(allPatients)}
                    <tbody className="table-group-divider">
                        {allPatients.length > 0 ?
                            allPatients.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.FullName}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Gender}</td>
                                        <td>{new Date(item.DOB).toLocaleDateString()}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.State}</td>
                                        <td>{item.City}</td>
                                        <td>{item.Reffered_by}</td>
                                        <td>{item.Insurance}</td>
                                        <td><button type='button' className="btn btn-warning">Update</button></td>
                                    </tr>)
                            })
                            : (
                                <tr >
                                    <td colSpan="11" className="text-center">No Data Found</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>)
}