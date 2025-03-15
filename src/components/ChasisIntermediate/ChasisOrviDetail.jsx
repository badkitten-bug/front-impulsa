import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisOrviDetail() {
  const { id, type } = useParams();
  const navigate = useNavigate();
  
  const handlePaymentClick = (payment) => {
    navigate(`/dashboard/chasis/${id}/type/${type}/payment/${payment}`);
  };

  const handleBackClick = () => {
    navigate(`/dashboard/chasis/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ORVI</h1>
      <p className={styles.subtitle}>Selecciona la opción de pago</p>
      
      <button className={styles.backButton} onClick={handleBackClick}>
        ← Volver
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

export default ChasisOrviDetail; 