import { useContext } from 'react'
import Header from '../homepage/Header'
import MainContext from '../../../context/MainContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ShowAllAppoint() {
    const { getAllAppointments, allAppointments } = useContext(MainContext)
    useEffect(() => { getAllAppointments() }, [])
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <Header />
            </div>

            <div style={{ background: "lightgrey", textAlign: 'center', width: "100%", height: '40px', fontWeight: "bold", fontSize: 20 }} >
                Total Appointment
            </div>

            <div className="table-responsive">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="text-center">Seq</th>
                            {/* <th className="text-center">Status</th> */}
                            <th className="text-center">Patient Name</th>
                            <th className="text-center">Sex/Age</th>
                            <th className="text-center">Appointment Id</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Time</th>
                            <th className="text-center">Contact</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        {allAppointments.length > 0 ?
                            allAppointments.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="text-center">{i + 1}</td>
                                        {/* <td className="text-center">
                                       <select className="form-select" value={item?.status}>
                                           <option value="Front_Desk">Front Desk</option>
                                           <option value="Receptionist">Receptionist</option>
                                           <option value="Doctor">Doctor</option>
                                         </select>
                                      </td> */}
                                        <td className="text-center">{item?.patient?.FullName}</td>
                                        <td className="text-center">{item?.patient?.Gender}/{item?.patient?.Age}</td>
                                        <td className="text-center">{item?.id}</td>
                                        <td className="text-center">{new Date(item?.Appointment_date).toLocaleDateString()}</td>
                                        <td className="text-center">{item?.Time}</td>
                                        <td className="text-center">{item?.patient?.Phone}</td>
                                        <td className="text-center">
                                            <button onClick={() => navigate(`/dashboard/${item.P_id}/${item.id}`)} className="bg-primary px-3 text-uppercase text-white rounded border border-0">View</button>
                                        </td>
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