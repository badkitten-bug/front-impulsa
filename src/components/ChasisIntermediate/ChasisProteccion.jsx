import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisProteccion() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handlePaymentClick = (payment) => {
    navigate(`/dashboard/chasis/${id}/type/proteccion/payment/${payment}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHASIS DE PROTECCIÓN</h1>
      <p className={styles.subtitle}>Selecciona la opción de pago</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </button>
      
      <div className={styles.paymentGrid}>
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('10')}
        >
          <div className={styles.paymentNumber}>10</div>
          <div className={styles.paymentLabel}>Pagos</div>
        </div>
        
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('20')}
        >
          <div className={styles.paymentNumber}>20</div>
          <div className={styles.paymentLabel}>Pagos</div>
        </div>
      </div>
    </div>
  );
}

export default ChasisProteccion; 