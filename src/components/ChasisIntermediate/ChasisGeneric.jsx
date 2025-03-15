// Front/src/components/ChasisIntermediate/ChasisGeneric.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { ShieldCardIcon, PersonMoneyIcon, MoneyIcon } from '../../components/Icons';

function ChasisGeneric() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mapeo para los títulos según el ID
  const titleMap = {
    '3': 'CHASIS DE RETIRO Y PENSIÓN',
    '4': 'CHASIS DE PROTECCIÓN',
    '5': 'CHASIS EMPRESARIAL',
    '6': 'CHASIS DE INVERSIONES'
  };

  // Mapeo para los iconos según el ID
  const getIcon = () => {
    switch(id) {
      case '3': return <PersonMoneyIcon />;
      case '4': return <ShieldCardIcon />;
      case '5': return <PersonMoneyIcon />;
      case '6': return <MoneyIcon />;
      default: return <ShieldCardIcon />;
    }
  };
  
  const handleOptionClick = (option) => {
    navigate(`/dashboard/chasis/${id}/type/${option}/payment/0`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titleMap[id] || 'CHASIS DE SEGURO'}</h1>
      <p className={styles.subtitle}>Selecciona la opción para continuar</p>
      
      <button className={styles.backButton} onClick={() => navigate('/dashboard/chasis')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Volver
      </button>
      
      <div className={styles.optionContainer}>
        <div 
          className={styles.optionBox}
          onClick={() => handleOptionClick('generic')}
        >
          <div className={styles.iconContainer}>
            {getIcon()}
          </div>
          <span className={styles.optionTitle}>Opción Genérica</span>
        </div>
      </div>
    </div>
  );
}

export default ChasisGeneric;