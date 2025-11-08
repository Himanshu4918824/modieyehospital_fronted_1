import RegistrationFrom from "../appointment/RegistrationFrom";
import BookAppoint from "../appointment/BookAppoint";
import Header from "../homepage/Header";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { useNavigate } from "react-router-dom";
import { io } from 'socket.io-client'
import InfiniteScroll from "react-infinite-scroll-component";

export default function MainDashboard() 
{
  const { getAllTodayAppointments, allTodayAppointments, getAppointmentCount, changeStatus } = useContext(MainContext)
  const navigate = useNavigate()
  const [doctorId, setDoctorId] = useState(localStorage.getItem('doctorId'))
  const [deptCounts, setDeptCounts] = useState({});
  const [hasMore, setHasMore] = useState();
  const [page, setPage] = useState(1);

  const socketURL = import.meta.env.VITE_socketURL || "http://localhost:8001/"




  useEffect(() => {
    getAppointmentCount().then((data) => {
      setDeptCounts(data.count)
    }).catch((e) => {
      console.log(e)
    })
    if (!doctorId || doctorId === undefined || doctorId === "") {
      navigate('/')
    }

    getAllTodayAppointments(page).then((stat) => {
      // console.log({ stat })
      setHasMore(stat)
    }).catch(e => {
      console.error(e)
    })
    // socket io connection and event listeners
    const socket = io(socketURL, {
      withCredentials: true,
      transports: ["websocket"],
      secure: true,
    });
    socket.on("connect", () => {
      // console.log("Connected to main service:", socket.id);
    });

    socket.on("connect_error", (err) => console.error("Socket Error:", err.message));
    // this listen on the event appointmentUpdated
    socket.on('appointmentUpdated', (data) => {
      const { result } = data;
      setDeptCounts(result);
    })
    return () => { socket.off('appointmentUpdated'); socket.disconnect(); }

  }, [])


  const fetchMoreData = async () => {
    const nextPage = page + 1;
    await getAllTodayAppointments(nextPage).then((stat) => {
      setHasMore(stat)
    }).catch(e => {
      console.error(e)
    });
    setPage(nextPage);
  };


  const handleStatusChange = async (id, status) => {
    const data = await changeStatus(id, status);
    // refreshDashboard();
  }



  const refreshDashboard = () => {
    getAllTodayAppointments()
  };
  // console.log(deptCounts)


  // console.log(allTodayAppointments)
  const [showDialog, setShowDialog] = useState(false);                    //showDialog or showmodal ek h
  const [modalPage, setModalPage] = useState("registration");

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);


  const showPage = (props) => {
    if (props === "registration") {
      return (
        <div>
          <RegistrationFrom onRefresh={refreshDashboard} />
        </div>
      );
    }
    else if (props === "bookappoint") {
      return (
        <div>
          <BookAppoint onRefresh={refreshDashboard} />
        </div>
      );
    }
    return null;
  };

  const renderModal = () => {
    if (!showDialog) return null;

    return (
      <div>

        <div className="modal show d-flex" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 600, width: "92%", minHeight: 100 }} >
            <div className="modal-content" style={{ minHeight: 400, height: 500 }}>
              <div className="modal-header">
                <button onClick={() => setModalPage("registration")} className="btn btn-warning btn-sm m-1"> Registration </button>
                <button onClick={() => setModalPage("bookappoint")} className="btn btn-warning btn-sm m-1">BookAppointment</button>
                <button type="button" className="btn-close" onClick={closeDialog}></button>
              </div>

              <div className="modal-body overflow-auto" style={{ height: 400 }}>
                {showPage(modalPage)}
              </div>

            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="modal-backdrop fade show" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  };

  return (<div>

    <div>
      <Header />
    </div>


    <div className="p-3 bg-light">
      <div className="d-flex flex-wrap mb-3">
        <button className="btn btn-secondary btn-sm m-1">Pending [{deptCounts.pending ? deptCounts?.pending : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Reception [{deptCounts.reception ? deptCounts?.reception : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Dept [{deptCounts.dept ? deptCounts?.dept : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Optometrist [{deptCounts.optometrist ? deptCounts?.optometrist : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Doctor [{deptCounts.doctor ? deptCounts?.doctor : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Diagnostic [{deptCounts.diagnostic ? deptCounts?.diagnostic : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Counsellor [{deptCounts.Counsellor ? deptCounts?.Counsellor : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Waiting [{deptCounts.waiting ? deptCounts?.waiting : 0}]</button>
        <button className="btn btn-secondary btn-sm m-1">Appointment [{deptCounts.appointment ? deptCounts?.appointment : 0}]</button>

        <button onClick={() => openDialog()} className="btn btn-warning btn-sm m-1"> Registration / Book Appointment </button>
        <div style={{ marginLeft: 5 }}>
          <select className="form-select">
            <option value="">-Select-Branch-</option>
            <option value="Madhav Plaza">Madhav Plaza</option>
            <option value="Gola Ka Mandir">Gola Ka Mandir</option>
            <option value="Dabara">Dabara</option>
          </select>
        </div>

        {renderModal()}
      </div>


      <div id="scrollableDiv" className="table-responsive" style={{ height: "70vh", overflow: "auto" }}>
        <InfiniteScroll
          dataLength={allTodayAppointments.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h6 className="text-center p-2">Loading more...</h6>}
          scrollableTarget="scrollableDiv"
          endMessage={<p className="text-center text-muted">No more data to load</p>}
        >

          <table className="table table-bordered table-sm">
            <thead className="table-secondary">
              <tr>
                <th className="text-center">Seq</th>
                <th className="text-center">Status</th>
                <th className="text-center">Patient Name</th>
                <th className="text-center">Sex/Age</th>
                <th className="text-center">Appointment Id</th>
                <th className="text-center">Date</th>
                <th className="text-center">Time</th>
                <th className="text-center">Contact</th>
                {/* <th className="text-center">Doctor</th> */}
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allTodayAppointments.length > 0 ? (

                  allTodayAppointments.map((item, i) => {

                    return (<tr key={i}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center">
                        <select className="form-select" value={item?.status} onChange={e => handleStatusChange(item.id, e.target.value)}>
                          <option value='reception'>Reception</option>
                          <option value='dept'>Dept</option>
                          <option value='optometrist'>Optometrist</option>
                          <option value='doctor'>Doctor</option>
                          <option value='diagnostic'>Diagnostic</option>
                          <option value='Counsellor'>Counsellor</option>
                          <option value='waiting'>Waiting</option>
                          <option value='appointment'>Appointment</option>
                        </select>
                      </td>
                      <td className="text-center">{item?.patient?.FullName}</td>
                      <td className="text-center">{item?.patient?.Gender}/{item?.patient?.Age}</td>
                      <td className="text-center">{item?.id}</td>
                      <td className="text-center">{new Date(item?.Appointment_date).toLocaleDateString()}</td>
                      <td className="text-center">{item?.Time}</td>
                      <td className="text-center">{item?.patient?.Phone}</td>
                      {/* <td className="text-center">{item.doctor.FullName} </td> */}
                      <td className="text-center">
                        <button onClick={() => navigate(`/dashboard/${item.P_id}/${item.id}`)} className="bg-primary px-3 text-uppercase text-white rounded border border-0">View</button>
                      </td>
                    </tr>
                    )
                  }
                  )
                )
                  : (
                    <tr>
                      <td colSpan="10" className="text-center">
                        No Data Available
                      </td>
                    </tr>
                  )
              }
            </tbody>
          </table>
        </InfiniteScroll>
      </div>

    </div >



  </div>
  );
}