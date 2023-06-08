import { useState, useEffect } from 'react';
import "./Preloader.css";
import logo_preloader from "../../../public/imgs/Preloader/logo-holding-white.svg"

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <img src={logo_preloader} alt="preloader" />
        <div className="loader"></div>
      </div>
    );
  }
  return null;
};

export default Preloader;
