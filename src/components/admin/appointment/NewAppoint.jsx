import Header from "../homepage/Header";
import { useState } from "react";
import RegistrationFrom from "../appointment/RegistrationFrom";
import BookAppoint from "../appointment/BookAppoint";

export default function NewAppoint() 
{
  const [modalPage, setModalPage] = useState("registration");

  const showPage = (props) => {
    if (props === "registration") {
      return (
        <div>
          <RegistrationFrom />
        </div>
      );
    }
    else if (props === "bookappoint") {
      return (
        <div>
          <BookAppoint />
        </div>
      );
    }
    return null;
  };


  return (<div style={{ backgroundImage: "url('/images/background.png')", backgroundSize: "cover", width: '100%', minHeight: 820}}>
    <div>
      <Header />
    </div>

    <div className="d-flex flex-wrap mb-3 mt-3 ">
      <button onClick={() => setModalPage("registration")} className="btn btn-warning btn-sm m-1"> Registration </button>
      <button onClick={() => setModalPage("bookappoint")} className="btn btn-warning btn-sm m-1">BookAppointment</button>

    </div>

    <div>
      {showPage(modalPage)}
    </div>



  </div>)
}