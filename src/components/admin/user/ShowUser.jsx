import Header from "../homepage/Header";

export default function ShowUser()
{
     const data =[{seq:"1",name:'Himanshu',empid:'2345',mobile:'4561987326',otp:'0025',empstatus:'123'},
      {seq:"1",name:'Himanshu',empid:'2345',mobile:'4561987326',otp:'0025',empstatus:'123'},
      {seq:"1",name:'Himanshu',empid:'2345',mobile:'4561987326',otp:'0025',empstatus:'123'},
      {seq:"1",name:'Himanshu',empid:'2345',mobile:'4561987326',otp:'0025',empstatus:'123'},

    ]


    return(<div>
        <div>
            <Header/>
        </div>

         <div className="table-responsive">
        <table className="table table-bordered table-sm">
          <thead className="table-secondary">
            <tr>
              <th className="text-center">Seq</th>
              <th className="text-center">Name</th>
              <th className="text-center">Employee Id</th>
              <th className="text-center">Mobile no.</th>
              <th className="text-center">OTP</th>
              <th className="text-center">Employee Status</th> 
              <th className="text-center">Edit </th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 ? (

                data.map((item, i) => {
                  return (<tr key={i}>
                   
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.empid}</td>
                    <td className="text-center">{item.mobile}</td>
                    <td className="text-center">{item.otp}</td>
                    <td className="text-center">{item.empstatus}</td> 
                    <td className="text-center"><i className="bi bi-pencil" style={{cursor:'pointer'}}></i></td>   
                  </tr>
                  )
                }
                )
              )
                : (
                  <tr>
                    <td colSpan="10" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>

    </div>)
}