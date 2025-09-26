import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function RegistrationFrom()
{
    const [name,setName]=useState('');
    const [MobileNumber,setMobileNumber]=useState('');
    const [gender,setGender]=useState('');
    const [date,setDate]=useState('');
    const [age,setAge]=useState('');
    const [address,setAddress]=useState('');
    const [state,setState]=useState('');
    const [city,setCity]=useState('');
    const [reffered,setReffered]=useState('');
    const [insurance,setInsurance]=useState('');

    const resetData=()=>{
        setName('');
        setMobileNumber('');
        setGender('');
        setDate('');
        setAge('');
        setAddress('');
        setState('');
        setCity('');
        setReffered('');
        setInsurance('');
    }


    const handleSubmit=async()=>{
        var formData = new FormData()

        formData.append('name',name);
        formData.append('mobilenumber',MobileNumber);
        formData.append('gender',gender);
        formData.append('date',date);
         formData.append('age',age);
        formData.append('address',address);
        formData.append('state',state);
        formData.append('city',city);
         formData.append('reffered',reffered);
        formData.append('insurance',insurance);
        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

        var result = await postData('',formData)

         if (result.status) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Category Submit Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your work has been not saved",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            
            resetData();
    }


    return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
        <div style={{width:'600', height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

        <div className="row" style={{marginBottom:7}}>
            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                 <input required type="text" className="form-control" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>

             <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                 <input required type="text" className="form-control" placeholder="Enter Mobile Number" value={MobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
            </div>

            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <select className="form-select"
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                        required
                        
                        >
                   <option selected>Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Other">Other</option>
                </select>   
            </div>

        </div>


        <div className="row" style={{marginBottom:7}}>
            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <input required type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}/>       
            </div>

            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <input required type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>       
            </div>

            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <textarea required className="form-control" placeholder="Enter Address" rows={1} value={address} onChange={(e)=>setAddress(e.target.value)}/>      
            </div>

        </div>


        <div className="row" style={{marginBottom:7}}>
            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <select className="form-select"
                        value={state}
                        onChange={(e)=>setState(e.target.value)}
                        required
                     >
                   <option selected>Select-State</option>
                   <option value="Madhya Pradesh">Madhya Pradesh</option>
                   <option value="Uttar Pradesh">Uttar Pradesh</option>
                   <option value="Tamil Nadhu">Tamil Nadhu</option>
                   <option value='Rajasthan'>Rajasthan</option>
                   <option value='Delhi'>Delhi</option>
                </select>   
            </div>

            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <select className="form-select"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        required
                  
                  >
                   <option selected>City/Village</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
                   <option value="Other">Other</option>
                </select>   
            </div>

            <div className="col-lg-4 col-xs-12 col-sm-12" style={{marginBottom:5}}>
                <input required type="text" className="form-control" placeholder="Reffered By" value={reffered} onChange={(e)=>setReffered(e.target.value)}/>
            </div>

        </div>

        <div className="row" style={{marginBottom:7}}>
            <div className="col-12">
                <textarea required className="form-control" placeholder="Insurance" value={insurance} onChange={(e)=>setInsurance(e.target.value)}/>
            </div>
        </div>


         <div className="row" style={{marginBottom:7,marginTop:20}}>
            <div className="col-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <button onClick={handleSubmit} type="button" class="btn btn-primary">Registed Now</button>
            </div>

             <div className="col-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <button onClick={resetData} type="button" class="btn btn-primary">Cancel</button>
            </div>
            
        </div>
         


</div>

    </div>)
}