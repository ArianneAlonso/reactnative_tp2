const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5432;

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'abril', 'arianne'];

app.get('/validar/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  res.json({ valido: usuariosValidos.includes(nombre) });
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});