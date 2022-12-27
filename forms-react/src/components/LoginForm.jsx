import React, { useState } from "react";

const LoginForm = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const [rememberMe,setRememberMe] = useState(false);
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("")
    }   

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email){
            setEmailError("Email cannot be empty");
        }

        if(!password){
            setPasswordError("Password cannot be empty");
        }
        else if(password.length < 8){
            setPasswordError("Minimum 8 characters")
        }
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" value={email} onChange={handleEmail}/>
          {email}
          <hr></hr>
          {emailError && <p>{emailError}</p>}  
        </div>
        <div>
          <label htmlFor="passw">Password</label>
          <input type="text" value={password} onChange={handlePassword}/>
            {password}
            <hr></hr>
            {passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
