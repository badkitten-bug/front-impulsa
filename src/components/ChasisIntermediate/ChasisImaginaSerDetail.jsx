import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

function ChasisImaginaSerDetail() {
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
      <h1 className={styles.title}>IMAGINA SER</h1>
      <p className={styles.subtitle}>Selecciona la opción de pago</p>
      
      <button className={styles.backButton} onClick={handleBackClick}>
        ← Volver
      </button>
      
      <div className={styles.paymentGrid}>
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('todos')}
        >
          <div className={styles.paymentLabel}>Todos los pagos</div>
        </div>
        
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('5')}
        >
          <div className={styles.paymentNumber}>5</div>
          <div className={styles.paymentLabel}>Pagos (30/70)</div>
        </div>
        
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('10')}
        >
          <div className={styles.paymentNumber}>10</div>
          <div className={styles.paymentLabel}>Pagos (50/50)</div>
        </div>
        
        <div 
          className={styles.paymentBox}
          onClick={() => handlePaymentClick('15')}
        >
          <div className={styles.paymentNumber}>15</div>
          <div className={styles.paymentLabel}>Pagos (70/0)</div>
        </div>
      </div>
    </div>
  );
}

export default ChasisImaginaSerDetail; 