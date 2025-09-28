import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Vision()
{
    const [unaidedRight,setUnaidedRight]=useState('');
    const [pinHoleRight,setPinHoleRight]=useState('');
    const [cTRight,setCTRight]=useState('');
    const [pMTRight,setPMTRight]=useState('');
    const [glassesRight,setGlassesRight]=useState('');
    const [subjectiveRight,setSubjectiveRight]=useState('');
    const [nearUnaidedRight,setNearUnaidedRight]=useState('');
    const [nearGlassesRight,setNearGlassesRight]=useState('');
    const [nearSubjectiveRight,setNearSubjectiveRight]=useState('');

    const [unaidedLeft,setUnaidedLeft]=useState('');
    const [pinHoleLeft,setPinHoleLeft]=useState('');
    const [cTLeft,setCTLeftt]=useState('');
    const [pMTLeft,setPMTLeft]=useState('');
    const [glassesLeft,setGlassesLeft]=useState('');
    const [subjectiveLeft,setSubjectiveLeft]=useState('');
    const [nearUnaidedLeft,setNearUnaidedLeft]=useState('');
    const [nearGlassesLeft,setNearGlassesLeft]=useState('');
    const [nearSubjectiveLeft,setNearSubjectiveLeft]=useState('');




    const handleSubmit=async()=>{
        var formData=new FormData();

        formData.append('unaidedright',unaidedRight);
        formData.append('pinholeright',pinHoleRight);
        formData.append('ctright',cTRight);
        formData.append('pmtright',pMTRight);
        formData.append('glassesright',glassesRight);
        formData.append('subjectiveright',subjectiveRight);
        formData.append('nearUnaidedright',nearUnaidedRight);
        formData.append('nearGlassesright',nearGlassesRight);
        formData.append('nearSubjectiveright',nearSubjectiveRight);

        formData.append('unaidedleft',unaidedLeft);
        formData.append('pinholeleft',pinHoleLeft);
        formData.append('ctleft',cTLeft);
        formData.append('pmtleft',pMTLeft);
        formData.append('glassesleft',glassesLeft);
        formData.append('subjectiveleft',subjectiveLeft);
        formData.append('nearUnaidedleft',nearUnaidedLeft);
        formData.append('nearGlassesleft',nearGlassesLeft);
        formData.append('nearSubjectiveleft',nearSubjectiveLeft);


        formData.append('created_at', currentDate());
        formData.append('updated_at', currentDate());

        var result=await postData('',formData);
         if (result.status) 
                {
                   Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: "Category Submit Successfully",
                       showConfirmButton: false,
                       timer: 2000
                                   });
                               }
                 else 
                    {
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

    function resetData()
    {
        setUnaidedLeft('');
        setUnaidedRight('');
        setPinHoleRight('');
        setPinHoleLeft('');
        setCTLeftt('');
        setCTRight('');
        setPMTLeft('');
        setPMTRight('');
        setGlassesLeft('');
        setGlassesRight('');
        setSubjectiveLeft('');
        setSubjectiveRight('');
        setNearUnaidedLeft('');
        setNearUnaidedRight('');
        setNearGlassesLeft('');
        setNearGlassesRight('')
        setNearSubjectiveLeft('');
        setNearSubjectiveRight('');

    }
    


    return(<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10,fontSize:12}}>

           <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-secondary">
                    <tr>
                      <th>Visual Acuity</th>
                      <th>Right Eye</th>
                      <th>Left Eye</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                      <td><b><i>Distance unaided</i></b></td>
                      <td><input value={unaidedRight} onChange={(e)=>setUnaidedRight(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={unaidedLeft} onChange={(e)=>setUnaidedLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Distance With Pin Hole</i></b></td>
                       <td><input value={pinHoleRight} onChange={(e)=>setPinHoleRight(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={pinHoleLeft} onChange={(e)=>setPinHoleLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                      <td><b><i>Distance With CT</i></b></td>
                      <td><input value={cTRight} onChange={(e)=>setCTRight(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={cTLeft} onChange={(e)=>setCTLeftt(e.target.value)}  type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Distance With PMT</i></b></td>
                       <td><input value={pMTRight} onChange={(e)=>setPMTRight(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={pMTLeft} onChange={(e)=>setPMTLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                      <td><b><i>Distance with previous glasses</i></b></td>
                      <td><input value={glassesRight} onChange={(e)=>setGlassesRight(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={glassesLeft} onChange={(e)=>setGlassesLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Distance with current subjective</i></b></td>
                       <td><input value={subjectiveRight} onChange={(e)=>setSubjectiveRight(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={subjectiveLeft} onChange={(e)=>setSubjectiveLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Near unaided</i></b></td>
                       <td><input value={nearUnaidedRight} onChange={(e)=>setNearUnaidedRight(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={nearUnaidedLeft} onChange={(e)=>setNearUnaidedLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Near with previous glasses</i></b></td>
                       <td><input value={nearGlassesRight} onChange={(e)=>setNearGlassesRight(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={nearGlassesLeft} onChange={(e)=>setNearGlassesLeft(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                      <td><b><i>Near with current subjective</i></b></td>
                      <td><input value={nearSubjectiveRight} onChange={(e)=>setNearSubjectiveRight(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={nearSubjectiveLeft} onChange={(e)=>setNearSubjectiveLeft(e.target.value)} type="text" className="form-control" /></td>
                     </tr>
                 </tbody>
              </table>
           </div>


            <div className="row mb-2">
            <div className="col-6 d-flex justify-content-center">
                <button onClick={handleSubmit} type="Submit" className="btn btn-primary">Submit</button>
            </div>

             <div className="col-6 d-flex justify-content-center">
                <button onClick={resetData} type="reset" className="btn btn-primary">Cancel</button>
            </div>
            
           </div>

        </div>

    </div>)
}