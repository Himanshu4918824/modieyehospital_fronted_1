import { useState } from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { postData } from "../../../services/FetchNodeAdminServices";
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [DocId, setDocId] = useState(localStorage.getItem('doctorId'));
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (DocId) {
      navigate('/maindashboard')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email, password
      }
      const result = await postData('doctor/api/v1/login', data)
      // console.log(result)
      const token = `Bearer ${result.data.token}`;
      localStorage.setItem("token", token)
      localStorage.setItem("doctorId", result.data.id)
      localStorage.setItem("designation", result.data.designation)

      if (result.id !== '') {
        navigate('/maindashboard')
      }

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <div>
        <Header />
      </div>


      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
          <h3 className="text-center mb-4 text-primary">Modi Eye Care Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {/* <p className="text-center mt-3 mb-0">
            Dont have an account? <a href="#">SignUp</a>
          </p> */}
        </div>
      </div>

    </div>
  );
}


