import Header from "./Header";

export default function ProfilePage()
 {

     const stats = [
    { title: "Total Patients", value: 320, color: "primary" },
    { title: "Appointments Today", value: 42, color: "success" },
    { title: "Successfully Appoint", value: 12, color: "info" },
    { title: "Pending Patients", value: 8, color: "warning" },
  ];

    return(<div>
        <div>
            <Header/>
        </div>


     <div className="d-flex" style={{width:'99%'}}>
       <div className="bg-primary text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center mb-4">👁️ EyeCare Admin</h4>
        <hr></hr>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="/images/person.png" style={{width:70, height:70, borderRadius:35}} />
        </div>

         <div className="m-2 p-2" style={{ letterSpacing: "1px" }}>
            <span className="fw-bold text-black fs-5">Admin Name: </span> 
            <span>Mr.Himanshu sharma</span>
        </div>

         <div className="m-2 p-2" style={{ letterSpacing: "1px" }}>
            <span className="fw-bold text-black fs-5">Email Address: </span> 
            <span>cat@gmail.com</span>
        </div>

         <div className="m-2 p-2" style={{ letterSpacing: "1px" }}>
            <span className="fw-bold text-black fs-5">Phone No.: </span> 
            <span>+91 8956237140</span>
        </div>

         <div className="m-2 p-2 mt-5 text-center" style={{ letterSpacing: "1px" }}>
            <a href="/" className="fw-bold text-black fs-5">Logout </a> 
        </div>

       </div>

       <div className="flex-grow-1">
        
        <nav className="navbar navbar-light bg-light shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">Admin Dashboard</span>
        </nav>

         <div className="row p-5">
        {stats.map((item,i)=>(
             <div className="col-md-3 mb-3" key={i}>
                <div className={`card text-white bg-${item.color} shadow`}>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h3>{item.value}</h3>
                  </div>
                </div>
              </div>
        ))}

       </div>
        
       </div>

      


        
    </div>

    </div>)
}