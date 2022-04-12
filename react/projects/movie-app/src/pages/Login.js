import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { googleSignIn, signIn } from "../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };
  return (
  
  <div className="d-flex justify-content-center">
    <div className="form-image">
      <img src={"https://picsum.photos/800/800"} alt="signup" />
    </div>
    <div className="register-form">
      <h1 className="form-title display-3">Login</h1>
      <form id="register" onSubmit={handleSubmit}>
        <div className="mb3">
        <label htmlFor="email" className="form-label">
          Email :
        </label>
        <input 
        type="text" 
        id="first-name" 
        className="form-control" 
        placeholder="Enter your email adress.." 
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        </div>

        <div className="mb3">
        <label htmlFor="email" className="form-label">
          Password :
        </label>
        <input 
        type="text" 
        id="password" 
        className="form-control" 
        placeholder="Enter your password.." 
        onChange={(e) => setPassword(e.target.value)}
        required
        />        
        </div>

        <input 
        type="submit" 
        className="btn btn-primary form-control" 
        value="Login"
        // onSubmit={handleSubmit}
        />
      </form>
      <button className="btn btn-primary form-control" onClick={()=>googleSignIn(navigate)}>
        Continue with Google
      </button>
    </div>
  </div>
  )
};

export default Login;
