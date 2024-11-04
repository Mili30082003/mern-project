const express = require("express");
const cors = require("cors");
const app = express();

const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');
const userRoute = require('./routes/userRoute');

app.use(cors());
app.use(express.json());

// Rutas para las habitaciones
app.use('/api/rooms', roomsRoute); // Todas las rutas de roomsRoute empiezan con /api/rooms

// Ruta para registrar usuarios
app.use('/api/users', userRoute); // Todas las rutas de userRoute empiezan con /api/users

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node Server Started on port ${port}`));



