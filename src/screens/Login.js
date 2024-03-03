import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [credential, setCredentials] = useState({email:"", password:""});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials({
            ...credential,
            [e.target.name] : e.target.value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
          });
        const responseJson = await response.json();
        if(!responseJson.success){
            alert("Invalid Credential")
            return;
        }
        console.log(responseJson)
        localStorage.setItem("email", credential.email)
        localStorage.setItem("authToken",responseJson.authToken);
        navigate("/");

    }
  return (
    <div className="container mt-2 mb-3">
      <form onSubmit={handleSubmit}>
    
        <div className="form-group">
          <label htmlFor="userEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            name="email"
            onChange={handleChange}
            value={credential.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="userPwd"
            name="password"
            onChange={handleChange}
            value={credential.password}
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
