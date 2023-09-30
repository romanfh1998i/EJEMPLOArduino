import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [doorStatus, setDoorStatus] = useState('Desconocido');

  const sendCommand = async (command) => {
    try {
      const response = await axios.post(`http://192.168.8.99/control`, { command });
      setDoorStatus(response.data);
    } catch (error) {
      alert("Error  de conexion");
      setDoorStatus('Error de conexión');
    }
  };

  return (
    <div className="container">
      <h2 className="statusText">Estado de la Puerta:</h2>
      <p className="doorStatus">{doorStatus}</p>
      <button onClick={() => sendCommand('abrir')}>Abrir</button>
      <button onClick={() => sendCommand('cerrar')}>Cerrar</button>
    </div>
  );
}

export default App;
