import s from './Preloader.module.scss';
import { useState, useEffect } from 'react';

function Preloader() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => setLoading(false));

    return () => {
      window.removeEventListener('load', () => setLoading(false));
    };
  }, []);

  return (
    <div
      className={s.preloader}
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <span className={s.loader}></span>
    </div>
  );
}

export default Preloader;