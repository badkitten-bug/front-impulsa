// Front/src/components/ChasisIntermediate/ChasisEducacion.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisEducacion() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Años a mostrar
  const years = Array.from({ length: 10 }, (_, i) => i);
  
  const handleYearClick = (year) => {
    navigate(`/dashboard/chasis/${id}/year/${year}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHASIS DE EDUCACIÓN</h1>
      <p className={styles.subtitle}>Selecciona la categoría de la cual desees descargar su chasis</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </button>
      
      <div className={styles.yearGrid}>
        {years.map(year => (
          <div 
            key={year} 
            className={styles.yearBox}
            onClick={() => handleYearClick(year)}
          >
            <span className={styles.yearNumber}>{year}</span>
            <span className={styles.yearLabel}>Años</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChasisEducacion;