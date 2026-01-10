import { useContext } from "react";
import Header from "../../admin/homepage/Header";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function ShowCompany()
{
    const {supplier, getAllCompany } = useContext(MainContext);

    useEffect(() => {
        getAllCompany();
      }, [])

    
    return(<div>

        <div>
            <Header/>
        </div>

         <div style={{ background: "lightgrey", textAlign: 'center', width: "100%", height: '30px', fontWeight: "bold", fontSize: 20 }}>
            Show Company
        </div>

         <div className="table-responsive">
           <table className="table table-bordered table-sm">
            <thead className="table-secondary">
              <tr>
                <th className="text-center">Seq</th>
                <th className="text-center">Suppler Id</th>
                <th className="text-center">Company Name </th>
              </tr>
            </thead>
        <tbody>
          {
            supplier.length > 0 ? (

              supplier.map((item, i) => {
                return (<tr key={i}>

                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.id}</td>
                  <td className="text-center">{item.name}</td>
                 {/* <td className="text-center">
                    <button onClick={openDailog} className="bg-warning px-3 text-uppercase text-white rounded border border-0">Update</button>
                  </td>  */}
                </tr>
                )
              }
              )
            )
              : (
                <tr>
                  <td colSpan="3" className="text-center">
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