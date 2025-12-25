import { useState } from "react";
import Header from "../../admin/homepage/Header";

export default function AddProduct()
{
   const [status,setStataus]=useState('');
   const [type,setType]=useState('');
   const [hide,setHide]=useState('');
   const [product,setProduct]=useState('');
   const [packing,setPacking]=useState('');
   const [ask,setAsk]=useState('');
   const [unit1,setUnit1]=useState('');
   const [unit2,setUnit2]=useState('');
   const [decimal,setDecimal]=useState('');
   const [color,setColor]=useState('');
   const [item,setItem]=useState('');
   const [company,setCompany]=useState('');
   const [salt,setSalt]=useState('');
   const [category,setCategory]=useState('');
   const [hsn,setHsn]=useState('');

   const [local,setLocal]=useState('');
   const [cental,setCentral]=useState('');
   const [mrp,setMRP]=useState('');
   const [rateA,setRateA]=useState('');
   const [case1,setCase1]=useState('');
   const [sgst,setSgst]=useState('');
   const [igst,setIgst]=useState('');
   const [prate,setPRate]=useState('');
   const [rateB,setRateB]=useState('');
   const [case2,setCase2]=useState('');
   const [cgst,setCGST]=useState('');
   const [csr,setCSR]=useState('');
   const [cost,setCost]=useState('');
   const [rateC,setRateC]=useState('');
   const [neg,setNeg]=useState('');




   return(<div>
      <div>
         <Header/>
      </div>

        <div style={{ background: "lightgrey", width: "100%", fontWeight: "bold", display: 'flex', alignItems: 'center', justifyContent: 'center' ,  height:'20'}} >
           Add Product
        </div>


        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: 900, height: 'auto', background: '#f7f1e3', margin: 10, padding: 10, borderRadius: 10 }}>

            <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Status:</label>
                        <select className="form-select"
                              value={status}
                             onChange={(event)=>setStataus(event.target.value)}
                        >
                            <option value="Select-status">Select-status</option>
                            <option value="continue">Continue</option>
                            <option value="Discontinue">Discontinue</option> 
                        </select>
                    </div>

                     <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Type:</label>
                        <select className="form-select"
                             value={type}
                             onChange={(event)=>setType(event.target.value)}

                        >
                            <option value="Select-Type">Select-Type</option>
                            <option value="Normal">Normal</option>
                            <option value="Discontinue">Discontinue</option> 
                        </select>
                    </div>

                     <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Hide:</label>
                        <select className="form-select"
                             value={hide}
                             onChange={(event)=>setHide(event.target.value)}
                        >
                            <option value="Select-Hide">Select-Hide</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option> 
                        </select>
                    </div>
            </div>

            <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Product:</label>
                        <input type="text" value={product} onChange={(event)=>setProduct(event.target.value)} className="form-control" placeholder="Enter Product." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Packing:</label>
                        <input type="text" value={packing} onChange={(event)=>setPacking(event.target.value)} className="form-control" placeholder="Enter Packing." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Ask Dose:</label>
                        <input type="text" value={ask} onChange={(event)=>setAsk(event.target.value)} className="form-control" placeholder="Enter Product." />
                    </div>
            </div>


             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">UNIT 1st:</label>
                        <input type="text" value={unit1} onChange={(event)=>setUnit1(event.target.value)} className="form-control" placeholder="Enter unit." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">UNIT 2nd:</label>
                        <input type="text" value={unit2} onChange={(event)=>setUnit2(event.target.value)} className="form-control" placeholder="Enter unit." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Decimal:</label>
                        <input type="text" value={decimal} onChange={(event)=>setDecimal(event.target.value)} className="form-control" placeholder="Enter...." />
                    </div>
            </div>


             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Color Type:</label>
                        <input type="text" value={color} onChange={(event)=>setColor(event.target.value)} className="form-control" placeholder="Enter...." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Item Type:</label>
                        <input type="text" value={item} onChange={(event)=>setItem(event.target.value)} className="form-control" placeholder="Enter......" />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Company:</label>
                        <input type="text" value={company} onChange={(event)=>setCompany(event.target.value)} className="form-control" placeholder="Enter companay." />
                    </div>
            </div>

             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Salt:</label>
                        <input type="text" value={salt} onChange={(event)=>setSalt(event.target.value)} className="form-control" placeholder="Enter salt." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Category:</label>
                        <input type="text" value={category} onChange={(event)=>setCategory(event.target.value)} className="form-control" placeholder="Enter Category." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">HSN/SAC:</label>
                        <input type="text" value={hsn} onChange={(event)=>setHsn(event.target.value)} className="form-control" placeholder="Enter...." />
                    </div>
            </div>

<hr/>



 <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Local:</label>
                        <input type="text" value={local} onChange={(event)=>setLocal(event.target.value)} className="form-control" placeholder="Enter here..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">SGST % :</label>
                        <input type="text" value={sgst} onChange={(event)=>setSgst(event.target.value)} className="form-control" placeholder="Enter SGST." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">CGST % :</label>
                        <input type="text" value={cgst} onChange={(event)=>setCGST(event.target.value)} className="form-control" placeholder="Enter CGST." />
                    </div>
            </div>


             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Central:</label>
                        <input type="text" value={cental} onChange={(event)=>setCentral(event.target.value)} className="form-control" placeholder="Enter Here..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">IGST % :</label>
                        <input type="text" value={igst} onChange={(event)=>setIgst(event.target.value)} className="form-control" placeholder="Enter IGST." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">C.S.R.:</label>
                        <input type="text" value={csr} onChange={(event)=>setCSR(event.target.value)} className="form-control" placeholder="Enter C.S.R...." />
                    </div>
            </div>


             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">M.R.P.:</label>
                        <input type="text" value={mrp} onChange={(event)=>setMRP(event.target.value)} className="form-control" placeholder="Enter M.R.P...." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">P Rate:</label>
                        <input type="text" value={prate} onChange={(event)=>setPRate(event.target.value)} className="form-control" placeholder="Enter rate..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Cost/:</label>
                        <input type="text" value={cost} onChange={(event)=>setCost(event.target.value)} className="form-control" placeholder="Enter Product." />
                    </div>
            </div>

             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Rate-A:</label>
                        <input type="text" value={rateA} onChange={(event)=>setRateA(event.target.value)} className="form-control" placeholder="Enter Here..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Rate-B:</label>
                        <input type="text" value={rateB} onChange={(event)=>setRateB(event.target.value)} className="form-control" placeholder="Enter Her..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Rate-C:</label>
                        <input type="text" value={rateC} onChange={(event)=>setRateC(event.target.value)} className="form-control" placeholder="Enter Here..." />
                    </div>
            </div>

             <div className="row">
               <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Conv.CASE:</label>
                        <input type="text" value={product} onChange={(event)=>setProduct(event.target.value)} className="form-control" placeholder="Enter Here...." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Conv.CAS:</label>
                        <input type="text" className="form-control" placeholder="Enter Here..." />
                    </div>

                    <div className="col-lg-4 col-xs-12 mb-3">
                        <label className="form-label fw-bold ms-3">Negative:</label>
                        <input type="text" className="form-control" placeholder="Enter Here...." />
                    </div>
            </div>

            <div className="row">
               <div className="col-lg-6" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                  <button type="button" class="btn btn-primary">Save</button>
               </div>

               <div className="col-lg-6" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                  <button type="button" class="btn btn-primary">Cancel</button>
               </div>
              
            </div>


           </div>
         </div>

   </div>)
}