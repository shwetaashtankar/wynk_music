import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function getData() {
    try {
      let res = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            projectId: " fgq9fidgo5dw",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            appType: "music",
          }),
        }
      );
      let data = await res.json();
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("name", data.data.user.name);
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(email);
    getData();
  }

  return (
    <div>
      <div className="account">
        <form onSubmit={handleChange}>
        <h2>Create Account</h2>
          <div className="display-flex">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="enter name..."
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="enter email..."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="enter password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
