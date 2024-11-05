// HomePage.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";

interface Ad {
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [ads, setAds] = useState<Ad[]>([]);

  const handleNavigateToLogin = () => {
    navigate('/login'); // Putanja do stranice za prijavu
  };

  const handleNavigateToRegistration = () => {
    navigate('/register'); // Putanja do stranice za registraciju
  };

  useEffect(() => {
    // Dohvati postojeće oglase iz localStorage
    const savedAds = JSON.parse(localStorage.getItem("ads") || "[]");
    setAds(savedAds);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="left-section">
          <h1>Javni oglasi</h1>
        </div>
        <div className="right-section">
          <button className="button" onClick={handleNavigateToLogin}>
            Prijava
          </button>
          <button className="button" onClick={handleNavigateToRegistration}>
            Registracija
          </button>
        </div>
      </nav>

      <h3 className='naslov'>Zadnji oglasi:</h3>
      <div className="ads-section">
        {ads.map((ad, index) => (
          <div key={index} className="ad">
            <h4>{ad.title}</h4>
            <p>{ad.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;