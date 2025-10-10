import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
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
      const result = await axios.post('httpṣ://doctor-backend.up.railway.app/api/v1/login', {
        email, password
      })
      console.log(result)
      localStorage.setItem("doctorId", result.data.id)

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


