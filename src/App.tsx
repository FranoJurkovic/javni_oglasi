import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import HomePage from "./Components/HomePage/HomePage";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};