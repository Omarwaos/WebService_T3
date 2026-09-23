const express = require('express');
const mysql = require('mysql2');

const PORT = 3000;
const app = express();

app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_audifonos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Prueba inicial de conexión
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado exitosamente a la base de datos');
  connection.release();
});

// 1. GET: Listar registros
app.get('/items', (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener la conexión' });
    }

    const sql = 'SELECT * FROM audifonos';
    connection.query(sql, (queryErr, results) => {
      connection.release(); // Liberar siempre la conexión

      if (queryErr) {
        return res.status(500).json({ error: 'Error al consultar datos' });
      }

      res.json(results);
    });
  });
});

// 2. DELETE: Eliminar un registro por ID
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;

  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener la conexión' });
    }

    const sql = 'DELETE FROM audifonos WHERE id = ?';
    connection.query(sql, [id], (queryErr, result) => {
      connection.release(); // Liberar siempre la conexión

      if (queryErr) {
        return res.status(500).json({ error: 'Error al eliminar el registro' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Registro no encontrado' });
      }

      res.json({ message: `Registro con ID ${id} eliminado correctamente` });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});