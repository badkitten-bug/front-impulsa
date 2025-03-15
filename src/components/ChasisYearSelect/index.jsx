import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisYearSelect() {
  const { id } = useParams(); // Obtiene el ID del tipo de seguro
  const navigate = useNavigate();
  
  // Mapeo para los títulos según el ID
  const titleMap = {
    '1': 'CHASIS DE EDUCACION',
    '2': 'CHASIS DE AHORRO',
    '3': 'CHASIS DE RETIRO Y PENSIÓN',
    '4': 'CHASIS DE PROTECCIÓN',
    '5': 'CHASIS DE EMPRESARIAL',
    '6': 'CHASIS DE INVERSIONES'
  };
  
  // Años a mostrar
  const years = Array.from({ length: 10 }, (_, i) => i);
  
  const handleYearClick = (year) => {
    // Navegar a la ruta para subir el PDF, incluyendo el tipo de seguro y el año
    navigate(`/dashboard/chasis/${id}/year/${year}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titleMap[id] || 'CHASIS DE SEGURO'}</h1>
      <p className={styles.subtitle}>Selecciona la categoría de la cual desees descargar su chasis</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        ← Volver
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

export default ChasisYearSelect;