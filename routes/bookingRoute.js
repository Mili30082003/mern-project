const express = require("express");
const router = express.Router(); // Corregido para usar Router correctamente
const Booking = require("../models/booking");
const Room = require("../models/room");

// Endpoint para reservar una habitación
router.post("/bookroom", async (req, res) => {
    const { room, userid, fromdate, todate, totalamount, totaldays } = req.body;

    try {
        const newBooking = new Booking({ // Creación de una nueva reserva
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays
        });

        await newBooking.save(); // Guardar la nueva reserva en la base de datos
        res.status(201).json({ message: "Reserva creada con éxito", booking: newBooking });
    } catch (error) {
        console.error("Error al crear reserva:", error);
        res.status(500).json({ message: "Error inesperado al crear la reserva." });
    }
});

module.exports = router;
