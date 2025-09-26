import { useState } from "react"
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Posterior()
{
    const [leftMedia,setLeftMedia]=useState('');
    const [leftVitreous,setLeftVitreous]=useState('');
    const [leftRetina,setLeftRetina]=useState('');
    const [leftOptic,setLeftOptic]=useState('');
    const [leftChoroid,setLeftChoroid]=useState('');
    const [leftMacula,setLeftMacula]=useState('');
    const [leftOther,setLeftOther]=useState('');

    const [rightMedia,setRightMedia]=useState('');
    const [rightVitreous,setRightVitreous]=useState('');
    const [rightRetina,setRightRetina]=useState('');
    const [rightOptic,setRightOptic]=useState('');
    const [rightChoroid,setRightChoroid]=useState('');
    const [rightMacula,setRightMacula]=useState('');
    const [rightOther,setRightOther]=useState('');




    const handleSubmit=async()=>{
        var formData=new FormData();

        formData.append('leftmedia',leftMedia);
        formData.append('leftvitreous',leftVitreous);
        formData.append('leftretina',leftRetina);
        formData.append('leftoptic',leftOptic);
        formData.append('leftchoroid',leftChoroid);
        formData.append('leftmacula',leftMacula);
        formData.append('leftother',leftOther);


        formData.append('rightmedia',rightMedia);
        formData.append('rightvitreous',rightVitreous);
        formData.append('rightretina',rightRetina);
        formData.append('rightoptic',rightOptic);
        formData.append('rightchoroid',rightChoroid);
        formData.append('rightmacula',rightMacula);
        formData.append('rightother',rightOther);


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
        setLeftMedia('');
        setRightMedia('');
        setLeftVitreous('');
        setRightVitreous('');
        setLeftRetina('');
        setRightRetina('');
        setLeftOptic('');
        setRightOptic('');
        setLeftMacula('');
        setRightMacula('');
        setRightChoroid('');
        setLeftChoroid('');
        setLeftOther('');
        setRightOther('');
    }
    


    return(<div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:600, height:'auto',background:'#f7f1e3',margin:10,padding:10,borderRadius:10}}>

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
                      <td><b><i>Media</i></b></td>
                      <td><input value={rightMedia} onChange={(e)=>setRightMedia(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={leftMedia} onChange={(e)=>setLeftMedia(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Vitreous</i></b></td>
                       <td><input value={rightVitreous} onChange={(e)=>setRightVitreous(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={leftVitreous} onChange={(e)=>setLeftVitreous(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                      <td><b><i>Retina</i></b></td>
                      <td><input value={rightRetina} onChange={(e)=>setRightRetina(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={leftRetina} onChange={(e)=>setLeftRetina(e.target.value)}  type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Optic nerve head</i></b></td>
                       <td><input value={rightOptic} onChange={(e)=>setRightOptic(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={leftOptic} onChange={(e)=>setLeftOptic(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                      <td><b><i>Choroid</i></b></td>
                      <td><input value={rightChoroid} onChange={(e)=>setRightChoroid(e.target.value)} type="text" className="form-control" /></td>
                      <td><input value={leftChoroid} onChange={(e)=>setLeftChoroid(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Macula</i></b></td>
                       <td><input value={rightMacula} onChange={(e)=>setRightMacula(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={leftMacula} onChange={(e)=>setLeftMacula(e.target.value)} type="text" className="form-control" /></td>
                    </tr>

                    <tr>
                       <td><b><i>Other</i></b></td>
                       <td><input value={rightOther} onChange={(e)=>setRightOther(e.target.value)} type="text" className="form-control" /></td>
                       <td><input value={leftOther} onChange={(e)=>setLeftOther(e.target.value)} type="text" className="form-control" /></td>
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