import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { MoneyPersonIcon } from '../../components/Icons';

function ChasisInversion() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleOptionClick = () => {
    // Navegar directamente a la pantalla de subida del PDF con type=imaginaser y un valor predeterminado para payment
    navigate(`/dashboard/chasis/${id}/type/imaginaser/payment/0`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHASIS DE INVERSIÓN</h1>
      <p className={styles.subtitle}>Selecciona la opción para descargar su chasis</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </button>
      
      <div className={styles.optionContainer}>
        <div 
          className={styles.optionBox}
          onClick={handleOptionClick}
        >
          <div className={styles.iconContainer}>
            <MoneyPersonIcon />
          </div>
          <span className={styles.optionTitle}>Imagina Ser</span>
        </div>
      </div>
    </div>
  );
}

export default ChasisInversion; 