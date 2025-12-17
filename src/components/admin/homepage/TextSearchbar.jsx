import { useState } from "react"
import { postData } from "../../../services/FetchNodeAdminServices";
import { useNavigate } from "react-router-dom";

export default function TextSearchbar()
{
    const [num,setNum]=useState('');
    const navigate=useNavigate();

    const searchIteam=async()=>{
        alert(1)
        var res=await postData('',{data:num});
        navigate('#',res)
        

    }
    
    return(<div style={{display:'flex',alignItems:'center',background: "lightgrey",borderRadius:25,margin:0}}>
        
                <i className="bi bi-search fs-4 ms-4" ></i>
                <input onKeyUp={searchIteam} type="text" value={num} onChange={(e)=>setNum(e.target.value)} placeholder=" Search Here....." style={{width:'40%', height:30, border:0,marginLeft:10,borderWidth:0,outline:0,fontSize:18,color:'#000',background:'transparent'}}/>  

    </div>)
}