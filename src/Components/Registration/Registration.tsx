import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration: FC = () => {
  const [name, setName] = useState<string>("Ime");
  const [email, setEmail] = useState<string>("primjer@gmail.com");
  const [password, setPassword] = useState<string>("123");

  const navigate = useNavigate();

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    navigate("/login"); // Preusmeravanje na login nakon registracije
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="Registration">
      <h2>Registracija</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ime"
      /><br />
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
      <button onClick={handleRegister}>Spremi podatke</button>
      <br />
      <button className="button" onClick={handleNavigateToLogin}>Već imate račun? Prijavite se</button>
    </div>
  );
};

export default Registration;