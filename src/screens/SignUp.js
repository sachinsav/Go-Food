import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [isUserCreated, setUserCreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.userEmail.value;
    const pwd = e.target.userPwd.value;
    const obj = {
      name: name,
      location: "Pune",
      email: email,
      password: pwd
    };

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });

      const responseJson = await response.json();
      console.log(responseJson);

      if (!responseJson.status) {
        console.log("something is not right");
        console.log(responseJson);
        return;
      }

      console.log("user created successfully");
      setUserCreated(true); // Update state to indicate user creation

    } catch (err) {
      console.log(err);
    }
  };

  // Redirect to "login" route if user creation is successful
  if (isUserCreated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-2 mb-3">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="userPwd">Password</label>
          <input
            type="password"
            className="form-control"
            id="userPwd"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
