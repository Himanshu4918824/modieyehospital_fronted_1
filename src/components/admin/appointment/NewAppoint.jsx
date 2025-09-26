import Header from "../homepage/Header";
import { useNavigate } from "react-router-dom";

export default function NewAppoint()
{
    var navigate=useNavigate()


    return(<div>
        <div>
            <Header/>
        </div>

        <div className="d-flex flex-wrap mb-3">
         <button className="btn btn-warning btn-sm m-1">Registration</button>
         <button className="btn btn-warning btn-sm m-1">BookAppointment</button>

        </div>

        
        
    </div>)
}