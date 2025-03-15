import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { BussinesManIcon } from '../../components/Icons';

function ChasisEmpresarial() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleOptionClick = (option) => {
    navigate(`/dashboard/chasis/${id}/type/${option}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHASIS EMPRESARIAL</h1>
      <p className={styles.subtitle}>Selecciona la categoría de la cual desees descargar su chasis</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </button>
      
      <div className={styles.optionContainer}>
        <div 
          className={styles.optionBox}
          onClick={() => handleOptionClick('startemporal')}
        >
          <div className={styles.iconContainer}>
            <BussinesManIcon />
          </div>
          <span className={styles.optionTitle}>Star Temporal</span>
        </div>
        
        <div 
          className={styles.optionBox}
          onClick={() => handleOptionClick('stardotal')}
        >
          <div className={styles.iconContainer}>
            <BussinesManIcon />
          </div>
          <span className={styles.optionTitle}>Star Dotal</span>
        </div>
      </div>
    </div>
  );
}

export default ChasisEmpresarial; 