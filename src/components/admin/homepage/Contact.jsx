import Header from "./Header";
import { useState } from "react";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Contact()
 {

    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [phone, setPhone] = useState('');
    var [message, setMessage] = useState('');

    const handleSubmitData = async () => {
        //alert(1)
        var body = { name: name, email: email, phone: phone, message: message }
        var result = await postData('', body)

        if (result.status) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Query Successfully",
                showConfirmButton: false,
                timer: 2000
            });

        }
        
        else
        {
             Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "Query not Successfully",
                                showConfirmButton: false,
                                timer: 2000
                            });

        }
    }



    return (<div>
        <div>
            <Header />
        </div>

        <div style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40, textAlign: 'center' }}>

            <div style={{ fontSize: '2.2rem', fontWeight: 500, letterSpacing: 1.2 }}>CONTACT US</div>

        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
            <div style={{ fontSize: 20, fontWeight: 500 }}>Addresses:</div>
            <div style={{ fontSize: 16, letterSpacing: 0.5, marginTop: 3, marginLeft: 25 }}><b>Head office:-</b>PMAY Building ,E-52,Flate no- 403,Sagartal Road</div>
            <div style={{}}>Gwalior MP-474008</div>
            <div style={{ fontSize: 16, letterSpacing: 0.5, marginTop: 5 }}><b>Admin office:-</b>39, Kishanbhag, Bahodapur</div>
            <div style={{}}>Gwalior MP-474012</div>

        </div>





        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 30, marginBottom: 20, textAlign: 'center' }}>

            <div>
                <i className="bi bi-envelope-fill fs-5"><div>editor@varsharesearchoriganization.com</div></i>  
            </div>

            <div>
                <i className="bi bi-telephone-fill fs-5"><div> +91 8956231470</div></i>  
            </div>

        </div>

        <hr></hr>
        

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
            <div style={{ width: 500, height: 'auto', background: "#f7f1e3", padding: 10, margin: 10 }}>
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Enter Name....." value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                 <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Enter Phone No ....." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                 <div class="mb-3">
                  <input type="email" class="form-control" placeholder="Enter Email....." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                 <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Enter Message....." value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>

                 <div class="mb-3" onClick={handleSubmitData} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <button type="button" className="btn btn-primary" >Submit</button>
                </div>

            </div>
        </div>
    </div>)
}