import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

interface Ad {
  title: string;
  content: string;
  author: string; // Dodano polje za autora
}

const WelcomePage: FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUserName(JSON.parse(loggedInUser).name);
    } else {
      navigate("/homepage");
    }

    // Dohvatanje postojećih oglasa iz localStorage
    const savedAds = JSON.parse(localStorage.getItem("ads") || "[]");
    setAds(savedAds);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/homepage");
  };

  const handleSaveAd = () => {
    if (userName) {
      const newAd: Ad = { title, content, author: userName }; // Dodano polje za autora
      const updatedAds = [...ads, newAd];
      setAds(updatedAds);
      localStorage.setItem("ads", JSON.stringify(updatedAds)); // Čuvanje oglasa u localStorage
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="WelcomePage">
      <div className="header">
        <button className="logout-button" onClick={handleLogout}>
          Odjavite se
        </button>
        {userName && <h2>Pozdrav, {userName}!</h2>}
      </div>
      <h1>Dobrodošli!</h1>
      <p>Uspješno ste se prijavili. Dobrodošli na našu aplikaciju!</p>

      <div className="create-ad-section">
        <h3>Kreirajte novu objavu:</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Naslov objave"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Sadržaj objave"
        ></textarea>
        <button onClick={handleSaveAd}>Spremi objavu</button>
      </div>

      <div className="ads-section">
        <h3>Zadnji oglasi:</h3>
        {ads.map((ad, index) => (
            <div key={index} className="ad">
              <h4>{ad.title}</h4>
              <p>{ad.content}</p>
              <p><strong>Autor:</strong> {userName}</p> {/* Prikaz imena autora */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;