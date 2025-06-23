import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const verificarYSaludar = async () => {
    if (!nombre.trim()) {
      setError('Por favor, ingresa un nombre.');
      setMensaje('');
      return;
    }

    try {
      const resValidacion = await fetch(`http://localhost:5432/validar/${nombre.toLowerCase()}`);
      const dataValidacion = await resValidacion.json();

      if (dataValidacion.valido) {
        const resSaludo = await fetch(`http://localhost:5432/saludo/${nombre}`);
        const saludo = await resSaludo.text();
        setMensaje(saludo);
        setError('');
      } else {
        setError('Nombre inválido');
        setMensaje('');
      }
    } catch (err) {
      console.error(err);
      setError('Hubo un error al conectarse con el servidor');
      setMensaje('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Saludo personalizado</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribí tu nombre"
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <button onClick={verificarYSaludar} style={{ padding: '8px 16px' }}>
        Enviar
      </button>
      {mensaje && <p style={{ marginTop: 20 }}>{mensaje}</p>}
      {error && <p style={{ color: 'red', marginTop: 20 }}>{error}</p>}
    </div>
  );
}

export default App;
