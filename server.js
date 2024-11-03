const express = require("express");
const cors = require("cors");
const app = express();

const dbConfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');

app.use(cors()); // Habilita CORS
app.use('/api/rooms', roomsRoute); // Usa las rutas

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node Server Started on port ${port}`));


