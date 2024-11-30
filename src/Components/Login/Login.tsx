import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login: FC = () => {
  const [email, setEmail] = useState<string>(""); // Prazan inicijalni email
  const [password, setPassword] = useState<string>(""); // Prazna inicijalna lozinka
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.email === email && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name, email }));
      navigate("/welcome");
    } else {
      alert("Pogrešan email ili lozinka!");
    }
  }; 

  const handleNavigateToRegistration = () => {
    navigate('/register'); // Putanja do stranice za registraciju
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Lozinka"
      /><br />
      <button onClick={handleLogin}>Prijavi se</button>
      <br/>
      <button className="button" onClick={handleNavigateToRegistration}>Želite li se registrirati?</button>
    </div>
  );
};

export default Login;