import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisNuevaPlenitudDetail() {
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
      <h1 className={styles.title}>NUEVA PLENITUD</h1>
      <p className={styles.subtitle}>Selecciona la opción de pago</p>
      
      <button className={styles.backButton} onClick={handleBackClick}>
        ← Volver
      </button>
      
      <div className={styles.paymentGrid}>
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('15')}
        >
          <div className={styles.paymentNumber}>15</div>
          <div className={styles.paymentLabel}>Pagos</div>
        </div>
      </div>
    </div>
  );
}

export default ChasisNuevaPlenitudDetail; 