import axios from "axios";

const serverURL = 'http://localhost:8001'

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

const postData = async (url, body) => {
      try {
            let response = await axios.post(`${serverURL}/${url}`, body)
            let result = response;
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}

const getData = async (url) => {
      try {
            let response = await axios.get(`${serverURL}/${url}`)
            let result = response.data;
            return result;
      }
      catch (e) {
            return e.response.data;
      }

}
export { postData, serverURL, currentDate, getData, createdDate }