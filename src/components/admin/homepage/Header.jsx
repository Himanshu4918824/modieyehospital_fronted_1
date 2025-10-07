{/*import { useState } from 'react';
import logo from '../../../assets/logo.jpg';
import logo1 from "../../../assets/logo1.png";
import './Menubar.css';


export default function Header()
{
    const [menu,setMenu]=useState(false);




    return(<div>

   
        <div style={{background: '#8395a7',color: 'Black',  width:'100%', height:'70px'}}> 
            <div style={{display:'flex',alignItems:'center'}}>
                <img alt='logo' src={logo1} style={{width:90,height:70,marginLeft:4}}/>
                <div style={{fontSize:20,fontWeight:'bold'}}>Modi Eye Care Hospital</div>
            </div>     
       </div> 
       

       <div style={{ background: '#576574',width:'100%',height:'54px' }}>

         <nav>
            <div className="main">
                <ul style={{ flexDirection: 'row', color: '#000' }}>
                    <li className='dropdown-1'>Patient</li>

                    <li className='dropdown-2'>Advice Report </li>

                    <li className='dropdown-2'>Appointment</li>

                    <li className='dropdown-2'>Users</li>

                    <li className='dropdown-2'>Staff </li>

                    <li className='dropdown-2'>About </li>


                    <li className='dropdown-2'>Master Setup
                        <div className="Subdropdown-2">
                            <ul>
                                <li>Drug Type</li>
                                <li>Drug</li>
                                <li>Department</li>
                                <li>Designation</li>
                                <li>Patient Group</li>
                                <li>Unit</li>
                                <li>City</li>
                                <li>State</li>
                                <li>Medicine Frequency</li>
                                <li>In Take</li>
                                <li>Dr. Session</li>
                               
                                {/*<li>Proceeding</li>
                                <li>Apply for External Proceeding</li>
                            </ul>
                        </div>
                    </li>

                     <li onClick={()=>navigate('/datasetrepositry')}>Dataset Repositry</li>

                </ul>
            </div>
        </nav>


        </div>     
        
    </div>)
}

*/}

import { useState } from "react";
import logo1 from "../../../assets/logo1.png";
import "./Menubar.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Top Bar */}
      <div style={{ background: "#daa316ff",color: "black",width: "100%", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px",  }}  >

        <div style={{ display: "flex", alignItems: "center" }}>
          <img alt="logo" src={logo1} style={{ width: 90, height: 70 }} />
          <div style={{fontSize: "clamp(16px, 3vw, 24px)", fontWeight: "bold", marginLeft: 10 }}>
            Modi Eye Care Hospital
          </div>  

        </div>


         <button className="btn d-lg-block d-none" type="button">
               <i className="bi bi-telephone" style={{ fontSize: 30, color: "black" }}></i>
          </button>


        {/* Bootstrap Hamburger Icon for small screens */}
        <button
          className="btn d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <i className="bi bi-list" style={{ fontSize: 30, color: "black" }}></i>
        </button>
      </div>

      {/* Navbar for large screens */}
      <div className="main-navbar d-none d-lg-block">
        <nav style={{ background: "#daa316ff", width: "100%", height: "54px" }}>
          <div className="main">
            <ul style={{ flexDirection: "row", color: "#000",fontWeight: 620}}>
              <li className="dropdown-1">Patient</li>
              <li className="dropdown-2">Advice Report</li>
              <li className="dropdown-2">Appointment</li>
              <li className="dropdown-2">Users</li>
              <li className="dropdown-2">Staff</li>
              <li className="dropdown-2">About</li>
              <li className="dropdown-2">
                Master Setup
                <div className="Subdropdown-2">
                  <ul>
                    <li>Drug Type</li>
                    <li>Drug</li>
                    <li>Department</li>
                    <li>Designation</li>
                    <li>Patient Group</li>
                    <li>Unit</li>
                    <li>City</li>
                    <li>State</li>
                    <li>Medicine Frequency</li>
                    <li>In Take</li>
                    <li>Dr. Session</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bootstrap Offcanvas (Drawer for mobile) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="py-2 border-bottom">Patient</li>
            <li className="py-2 border-bottom">Advice Report</li>
            <li className="py-2 border-bottom">Appointment</li>
            <li className="py-2 border-bottom">Users</li>
            <li className="py-2 border-bottom">Staff</li>
            <li className="py-2 border-bottom">About</li>
             <li className="dropdown-2">
                Master Setup
                <div className="Subdropdown-2">
                  <ul>
                    <li>Drug Type</li>
                    <li>Drug</li>
                    <li>Department</li>
                    <li>Designation</li>
                    <li>Patient Group</li>
                    <li>Unit</li>
                    <li>City</li>
                    <li>State</li>
                    <li>Medicine Frequency</li>
                    <li>In Take</li>
                    <li>Dr. Session</li>
                  </ul>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

