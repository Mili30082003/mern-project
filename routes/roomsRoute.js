const express = require("express");
const router = express.Router();
const Room = require('../models/room');

// Endpoint para obtener todas las habitaciones
router.get('/getallrooms', async (req, res) => {
    try {
        const rooms = await Room.find(); // Busca todas las habitaciones
        res.json(rooms); // Devuelve la lista de habitaciones como JSON
    } catch (error) {
        res.status(500).json({ message: "Error fetching rooms" });
    }
});

module.exports = router;



