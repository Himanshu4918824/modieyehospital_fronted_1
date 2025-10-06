import { QRCodeCanvas } from "qrcode.react";
import Header from "../homepage/Header";

export default function QRCode() {
  // Change this URL to wherever your newappoint page is hosted
  const url = "http://localhost:5173/newappoint";  

  return (
    <div style={{backgroundImage:"url('/images/background.png')", backgroundSize: "cover", width:'100%', minHeight: "100vh"}}>
      <Header/>
    
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h3>Scan to open New Appointment Page</h3>
      <QRCodeCanvas value={url} size={200} />
    </div>
    
 </div> );
}
