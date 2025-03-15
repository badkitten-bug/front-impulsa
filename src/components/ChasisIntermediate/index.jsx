// Front/src/components/ChasisIntermediate/index.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ChasisEducacion from './ChasisEducacion';
import ChasisAhorro from './ChasisAhorro';
import ChasisAhorroDetail from './ChasisAhorroDetail';
import ChasisRetiroPension from './ChasisRetiroPension';
import ChasisImaginaSerDetail from './ChasisImaginaSerDetail';
import ChasisNuevaPlenitudDetail from './ChasisNuevaPlenitudDetail';
import ChasisOrviDetail from './ChasisOrviDetail';
import ChasisProteccion from './ChasisProteccion';
import ChasisEmpresarial from './ChasisEmpresarial';
import ChasisStarTemporalDetail from './ChasisStarTemporalDetail';
import ChasisStarDotalDetail from './ChasisStarDotalDetail';
import ChasisInversion from './ChasisInversion';
import ChasisGeneric from './ChasisGeneric'; // Para otros tipos que no tengan vista específica

function ChasisIntermediate() {
  const { id, type, option } = useParams();
  
  // Renderizar diferentes componentes según el tipo de chasis (id)
  if (id === '1') { // Educación
    return <ChasisEducacion />;
  } else if (id === '2') { // Ahorro
    if (type) {
      // Si tenemos un type (orvi99 o startdotal), mostrar opciones de pagos
      return <ChasisAhorroDetail />;
    } else {
      // Si no tenemos un type, mostrar las opciones principales
      return <ChasisAhorro />;
    }
  } else if (id === '3') { // Retiro y Pensión
    if (type === 'imaginaser') {
      return <ChasisImaginaSerDetail />;
    } else if (type === 'nuevaplenitud') {
      return <ChasisNuevaPlenitudDetail />;
    } else if (type === 'orvi') {
      return <ChasisOrviDetail />;
    } else {
      return <ChasisRetiroPension />;
    }
  } else if (id === '4') { // Protección
    return <ChasisProteccion />;
  } else if (id === '5') { // Empresarial
    if (type === 'startemporal') {
      return <ChasisStarTemporalDetail />;
    } else if (type === 'stardotal') {
      return <ChasisStarDotalDetail />;
    } else {
      return <ChasisEmpresarial />;
    }
  } else if (id === '6') { // Inversión
    return <ChasisInversion />;
  } else {
    // Para otros tipos de chasis que no tengan vista específica
    return <ChasisGeneric />;
  }
}

export default ChasisIntermediate;