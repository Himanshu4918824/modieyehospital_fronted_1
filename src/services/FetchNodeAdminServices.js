import axios from "axios";

// const serverURL = 'https://hospital-management-system.up.railway.app'
const serverURL = import.meta.env.VITE_serverURL || 'http://localhost:5000'

const currentDate = () => {
      let d = new Date();
      let cd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let ct = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      return cd + " " + ct;
}

const createdDate = (date) => {
      let d = new Date(date);
      let cd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let ct = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      return cd + " " + ct;
}

const postData = async (url, body, headers = {}) => {
      try {
            let response = await axios.post(`${serverURL}/${url}`, body, { headers })
            let result = response;
            // console.log(result)
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}

const getData = async (url, headers = {}) => {
      try {
            let response = await axios.get(`${serverURL}/${url}`, { headers })
            let result = response.data;
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}
const putData = async (url, body, headers = {}) => {
      try {
            let response = await axios.put(`${serverURL}/${url}`, body, { headers })
            let result = response;
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}
const deleteData = async (url, headers = {}) => {
      try {
            let response = await axios.put(`${serverURL}/${url}`, { headers })
            let result = response;
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}
export { postData, serverURL, currentDate, getData, createdDate, putData, deleteData }