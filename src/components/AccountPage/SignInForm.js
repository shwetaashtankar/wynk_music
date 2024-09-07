import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link} from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  async function getData() {
    try{
      let res = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "projectId": " fgq9fidgo5dw",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            appType: "music",
          }),
        }
      );
      let data = await res.json();
      // console.log(data)
      // session storage
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem('name', data.data.user.name)
      navigate('/')
      window.location.reload()
    }
    catch(error){
      console.log(error.message);
      }
  }


  function handleChange(e){
    e.preventDefault();
    console.log(email)
    getData();
  }
  
  return (
    <div className="account">
      <form onSubmit={handleChange}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email..."
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password..."
          />
        </div>
        <button type="submit">Login</button>
        <p>Doesn't have an account? 
          <Link to="/SignUp">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
