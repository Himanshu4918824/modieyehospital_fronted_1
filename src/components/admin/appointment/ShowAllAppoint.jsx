import { useContext, useState } from 'react'
import Header from '../homepage/Header'
import MainContext from '../../../context/MainContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import TextSearchbar from '../homepage/TextSearchbar'

export default function ShowAllAppoint() {
    const { getAllAppointments, getPatientCities, PatientCity } = useContext(MainContext)
    const [allAppointments, setallAppointments] = useState([]);
    const [city, setCity] = useState("Select-Branch")
    useEffect(() => {
        getPatientCities()
        async function loadFirstPage() {
            const res = await getAllAppointments(1, city);
            setallAppointments(res.data);
            setHasMore(1 < res.totalPages);
        }

        loadFirstPage();
    }, [city])

    const navigate = useNavigate();
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const fetchMoreData = async () => {
        // console.log('hitt')
        const nextPage = page + 1;
        const res = await getAllAppointments(nextPage , city);

        setallAppointments((prev) => [...prev, ...res.data])
        setPage(nextPage);
        setHasMore(nextPage < res.totalPages);
    };


    return (
        <div>
            <div>
                <Header />
            </div>

            <div style={{ background: "lightgrey", textAlign: 'center', width: "100%", height: '40px', fontWeight: "bold", fontSize: 20 }} >

              <div className='mx-2 my-0 row '>
                <div className='col-3'>
                  <select className="form-select bg-transparent border border-dark" onClick={e => setCity(e.target.value)}>
                    <option value="Select-Branch">-Select-Branch-</option>
                    {PatientCity.map((city, i) => {
                        return (<option key={i} value={city.City}>{city.City}</option>)
                    }
                    )}
                  </select>
                </div>

                 <div className='col-6'>
                     Total Appointment
                 </div>

                 <div className='col-3'>
                <TextSearchbar/>
               </div>
               
            </div>

           


            </div>

            <div id="scrollableDiv" className="table-responsive" style={{ height: "70vh", overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={allAppointments.length}
                    // dataLength={0}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h6 className="text-center p-2">Loading more...</h6>}
                    scrollableTarget="scrollableDiv"
                    endMessage={<p className="text-center text-muted">No more data to load</p>}
                >
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className="text-center">Seq</th>
                                {/* <th className="text-center">Status</th> */}
                                <th className="text-center">Patient Name</th>
                                <th className="text-center">Sex/Age</th>
                                <th className="text-center">City</th>
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
                                            <td className="text-center">{item?.patient?.City}</td>
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
                                        <td colSpan="10" className="text-center">No Data Found</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>

        </div>)
}