import MainContext from './MainContext'
import { getData, postData } from "../services/FetchNodeAdminServices"
import { useState } from 'react'

const ContextProvider = ({ children }) => {
  const [diagnosisList, setDiagnosisList] = useState([])
  const [patientData, SetPatientData] = useState({
    Age: "",
    Address: "",
    City: "",
    State: "",
    RegDt: "",
    FullName: "",
    Dob: "",
    Latest_Apt: ""
  })

  const [vision, SetVision] = useState([{
    L_Distance_With_CT: "",
    L_Distance_With_PMT: "",
    L_Distance_With_Pin_Hole: "",
    L_Distance_unaided: "",
    L_Distance_with_current_subjective: "",
    L_Distance_with_previous_glasses: "",
    R_Distance_With_CT: "",
    R_Distance_With_PMT: "",
    R_Distance_With_Pin_Hole: "",
    R_Distance_unaided: "",
    R_Distance_with_current_subjective: "",
    R_Distance_with_previous_glasses: "",
    appointmentId: "",
    created_at: "",
    id: "",
    patientId: ""
  }])

  const [Histroy, setHistroy] = useState([{
    D_id: "",
    Dite_Histroy: "",
    Family_Histroy: "",
    P_id: "",
    Systemic_illness: "",
    Treatment_Histroy: "",
    appointmentId: "",
    id: ""
  }])

  const [Advise, setAdvise] = useState([{
    Date: "",
    type: "",
    message: ""
  }])

  const [Treatment, setTreatment] = useState([{
    Date: "",
    type: "",
    message: ""
  }])
  const [Medicine, setMedicine] = useState([{
    Medicine: "", days: "", Dosa: "", Intake: "", Comment: ""
  }])



  const getPatientData = async (url) => {
    try {
      const data = await getData(url);
      // return data;
      console.log(data)
      setDiagnosisList(data.Diagnosis)
      SetPatientData({
        Age: data.Age,
        Address: data.Address,
        City: data.City,
        State: data.State,
        RegDt: new Date(data.created_at).toLocaleDateString(),
        FullName: data.FullName,
        Dob: new Date(data.DOB).toLocaleDateString(),
        Latest_Apt: data.Appointment[0].id
      })
      SetVision(data.Vision)
      setHistroy(data.History)
      if (Array.isArray(data.Advise)) {
        setAdvise(
          data.Advise.map((item) => ({
            Date: item.created_at || "",
            type: item.type || "",
            message: item.message || ""
          }))
        );
      }
      // ✅ If Advise is a single object
      else if (data.Advise) {
        setAdvise([{
          Date: data.Advise.created_at || "",
          type: data.Advise.type || "",
          message: data.Advise.message || ""
        }]);
      }
      if (Array.isArray(data.Advise)) {
        setTreatment(
          data.Treatment.map((item) => ({
            Date: item.created_at || "",
            type: item.type || "",
            message: item.message || ""
          }))
        );
      }
      if (Array.isArray(data.Medicine)) {
        setMedicine(
          data.Medicine.map((item) => ({
            Days: item.Days || "",
            Dose: item.Dose || "",
            Intake: item.Intake || "",
            message: item.message || "",
            medicine: item.id || ""
          }))
        );
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <MainContext.Provider value={{ getPatientData, diagnosisList, patientData, vision, Histroy, Advise, Treatment, Medicine }}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
