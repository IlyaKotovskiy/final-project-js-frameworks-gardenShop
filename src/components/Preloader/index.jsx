import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import s from "./Preloader.module.scss";

function Preloader() {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const body = document.body;

    setLoading(true);
    body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
      body.style.overflow = 'auto';
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className={s.preloader} style={{ display: isLoading ? "flex" : "none" }}>
      <span className={s.loader}></span>
    </div>
  );
}

export default Preloader;