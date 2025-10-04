import MainContext from './MainContext'
import { getData, postData } from "../services/FetchNodeAdminServices"
import { useState } from 'react'

const ContextProvider = ({ children }) => {


  const [ P_id, SetP_id ] = useState('')


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
    id: "",
    created_at: "",
  }])

  const [Advise, setAdvise] = useState([{
    Date: "",
    type: "",
    message: ""
  }])
  const [complaint, setComplaint] = useState([{
    Date: "",
    Complaint: "",
    AptId: ""
  }])

  const [treatment, setTreatment] = useState([{
    Date: "",
    type: "",
    message: ""
  }])
  const [Medicine, setMedicine] = useState([{
    Medicine: "", days: "", Dosa: "", Intake: "", Comment: ""
  }])

  const [refractionData, setRefractionData] = useState([{
    Glass_Type: "",
    L_D_AXIS: "",
    L_D_CYL: "",
    L_D_SPH: "",
    L_D_VA: "",
    L_N_AXIS: "",
    L_N_CYL: "",
    L_N_SPH: "",
    L_N_VA: "",
    R_D_AXIS: "",
    R_D_CYL: "",
    R_D_SPH: "",
    R_D_VA: "",
    R_N_AXIS: "",
    R_N_CYL: "",
    R_N_SPH: "",
    R_N_VA: "",
    appointmentId: "",
    created_at: "",
    id: "",
    patientId: "",
    refractionType: "",
  }]);

  const [anterior, setAnterior] = useState([{
    L_Angles: "",
    L_Anterior_chamber: "",
    L_Conjunctiva: "",
    L_Cornea: "",
    L_Extraocular_movements: "",
    L_Eye_position: "",
    L_Eyelashes: "",
    L_Eyelids: "",
    L_Gonioscopy: "",
    L_Intraocular_pressure_AT: "",
    L_Intraocular_pressure_NCT: "",
    L_Intraocular_pressure_Tonopen: "",
    L_Iris_pupil: "",
    L_Lacrimal_punctum: "",
    L_Lacrimal_syringing: "",
    L_Lens: "",
    L_Orbit: "",
    L_Others: "",
    L_Sclera_episclera: "",
    R_Angles: "",
    R_Anterior_chamber: "",
    R_Conjunctiva: "",
    R_Cornea: "",
    R_Extraocular_movements: "",
    R_Eye_position: "",
    R_Eyelashes: "",
    R_Eyelids: "",
    R_Gonioscopy: "",
    R_Intraocular_pressure_AT: "",
    R_Intraocular_pressure_NCT: "",
    R_Intraocular_pressure_Tonopen: "",
    R_Iris_pupil: "",
    R_Lacrimal_punctum: "",
    R_Lacrimal_syringing: "",
    R_Lens: "",
    R_Orbit: "",
    R_Others: "",
    R_Sclera_episclera: "",
    appointmentId: "",
    created_at: "",
    id: "",
    patientId: "",
  }]);

  const [posterior, setPosterior] = useState([{
    L_Choroid: "",
    L_Macula: "",
    L_Media: "",
    L_Optic_nerve_head: "",
    L_Others: "",
    L_Retina: "",
    L_Vitreous: "",
    R_Choroid: "",
    R_Macula: "",
    R_Media: "",
    R_Optic_nerve_head: "",
    R_Others: "",
    R_Retina: "",
    R_Vitreous: "",
    appointmentId: "",
    created_at: "",
    id: "",
    patientId: "",
  }]);




















  const getPatientData = async (url) => {
    try {
      const data = await getData(url);
      // return data;
      // console.log(data)
      setDiagnosisList(data.Diagnosis)
      SetPatientData({
        Age: data.Age || "",
        Address: data.Address || "",
        City: data.City || "",
        State: data.State || "",
        RegDt: new Date(data.created_at).toLocaleDateString() || "",
        FullName: data.FullName || "",
        Dob: new Date(data.DOB).toLocaleDateString() || "",
        Latest_Apt: data.Appointment[0].id || ""
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
            medicine: item.medicine || ""
          }))
        );
      }
      if (Array.isArray(data.Complaint)) {
        setComplaint(
          data.Complaint.map((item) => ({
            Date: item.created_at || "",
            Complaint: item.message,
            AptId: item.appointmentId
          }))
        );
      }
      setRefractionData(data.Refraction)
      setAnterior(data.Anterior)
      setPosterior(data.Posterior)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <MainContext.Provider value={{ getPatientData, diagnosisList, patientData, vision, Histroy, Advise, treatment, Medicine, complaint, refractionData, anterior, posterior, SetP_id , P_id }}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
