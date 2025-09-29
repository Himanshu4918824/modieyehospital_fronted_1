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
    Dob: ""
  })
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
        Dob: new Date(data.DOB).toLocaleDateString()
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <MainContext.Provider value={{ getPatientData, diagnosisList, patientData }}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
