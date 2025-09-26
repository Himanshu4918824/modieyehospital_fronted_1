import logo from '../../../assets/logo.jpg'
export default function Header()
{
    return(
        <div style={{background:'#6c757d', width:'100%', height:'60px'}}>
            
            <div style={{display:'flex',alignItems:'center'}}>
                <img src={logo} style={{width:50,height:50,margin:5,padding:5}}/>
                <div style={{fontSize:20,fontWeight:'bold'}}>Modi Eye Care Hospital</div>
            </div>
            

             
        
    </div>)
}