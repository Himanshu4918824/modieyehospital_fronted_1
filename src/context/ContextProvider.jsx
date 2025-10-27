import MainContext from './MainContext'
import { getData, putData } from "../services/FetchNodeAdminServices"
import { useState } from 'react'


const ContextProvider = ({ children }) => {


  const [P_id, SetP_id] = useState('')
  const [Aid, SetAid] = useState('')

  const [allPatients, setAllPatients] = useState([])
  const [DoctorDetail, setDoctorDetail] = useState([])
  const [allTodayAppointments, setAllTodayAppointments] = useState([])
  const [allDoctors, setAllDoctors] = useState([])
  const [diagnosisList, setDiagnosisList] = useState([])
  const [patientData, SetPatientData] = useState({
    Age: "",
    Address: "",
    City: "",
    State: "",
    RegDt: "",
    FullName: "",
    Dob: "",
    Latest_Apt: "",
    Latest_Apt_Date: ""
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

  const [histroy, setHistroy] = useState([{
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
    message: "",
    id: ""
  }])
  const [complaint, setComplaint] = useState([{
    Date: "",
    Complaint: "",
    AptId: "",
    id: ""
  }])

  const [treatment, setTreatment] = useState([{
    Date: "",
    type: "",
    message: "",
    id: ""
  }])
  const [Medicine, setMedicine] = useState([{
    Medicine: "", days: "", Dosa: "", Intake: "", Comment: "", date: "", id: ""
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

  const [PatientReports, setReports] = useState([])





  const getPatientData = async (url) => {
    try {
      const data = await getData(url);
      // return data;
      console.log(data)
      setDiagnosisList(data.Diagnosis)
      SetPatientData({
        Age: data.Age || "",
        Address: data.Address || "",
        City: data.City || "",
        State: data.State || "",
        RegDt: new Date(data.created_at).toLocaleDateString() || "",
        FullName: data.FullName || "",
        Dob: new Date(data.DOB).toLocaleDateString() || "",
        Latest_Apt: data.Appointment[0].id || "",
        Latest_Apt_Date: new Date(data.Appointment[0].created_at).toLocaleDateString() || ""
      })
      SetVision(data.Vision)
      setHistroy(data.History)

      if (Array.isArray(data.Advise)) {
        setAdvise(
          data.Advise.map((item) => ({
            Date: item.created_at || "",
            type: item.type || "",
            message: item.message || "",
            id: item.id
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
            message: item.message || "",
            id: item.id
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
            medicine: item.medicine || "",
            date: new Date(item.created_at).toLocaleDateString() || "",
            id: item.id
          }))
        );
      }
      if (Array.isArray(data.Complaint)) {
        setComplaint(
          data.Complaint.map((item) => ({
            Date: item.created_at || "",
            Complaint: item.message,
            AptId: item.appointmentId,
            id: item.id
          }))
        );
      }
      setRefractionData(data.Refraction)
      setAnterior(data.Anterior)
      setPosterior(data.Posterior)
      setReports(data.Report[0].document)
    } catch (error) {
      console.log(error)
    }


  }
  //  fetch all the patients
  const getAllPatients = async () => {
    try {
      const result = await getData('patient/v1/patient/allPatient')
      // console.log(result)
      setAllPatients(result)
    } catch (error) {
      console.log(error)
    }
  }
  // fetch all the doctors
  const getAllDoctors = async () => {
    try {
      const result = await getData('doctor/api/v1/get/allDoctors')
      console.log(result)
      setAllDoctors(result)
    } catch (error) {
      console.log(error)
    }
  }
  const getDoctorsDetail = async (id) => {
    try {
      const result = await getData(`doctor/api/v1/${id}`, { Authorization: localStorage.getItem('token') })
      // console.log(result)
      setDoctorDetail(result)
      return result
    } catch (error) {
      console.log(error)
    }
  }
  const getAppointmentCount = async () => {
    try {
      const result = await getData(`patient/v1/appointment/latestCounts`)
      // console.log(result)
      return result
    } catch (error) {
      console.log(error)
    }
  }
  const getAllTodayAppointments = async () => {
    try {
      const { data } = await getData('patient/v1/appointment/allAppointment')
      // console.log(counts)
      const updateAppointment = await Promise.all(
        data.map(async (appoint) => {
          // console.log(appoint.D_id)
          const doctor = await getDoctorsDetail(appoint.D_id);
          return { ...appoint, doctor }
        })
      )
      // console.log("Appointments with Doctor Info:", updateAppointment);
      setAllTodayAppointments(updateAppointment)
    } catch (error) {
      console.log(error)
    }
  }

  const changeStatus = async (id , status) => {
    try {
      const data = await putData(`patient/v1/appointment/updateStatus/${id}`, { status })
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainContext.Provider value={{ changeStatus,getAppointmentCount, PatientReports, SetAid, Aid, getPatientData, diagnosisList, patientData, vision, histroy, Advise, treatment, Medicine, complaint, refractionData, anterior, posterior, SetP_id, P_id, getAllPatients, allPatients, getAllDoctors, allDoctors, getAllTodayAppointments, allTodayAppointments, getDoctorsDetail, DoctorDetail }}>
      {children}
    </MainContext.Provider>
  )
}

export default ContextProvider
