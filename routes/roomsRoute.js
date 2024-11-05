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

// Endpoint para obtener todas las habitaciones
router.post("/getroombyid", async (req, res) => {
   const roomid = req.body.roomid
   try {
       const room = await Room.findOne({_id : roomid}); // Busca todas las habitaciones
         res.send(room)
   } catch (error) {
       res.status(500).json({ message: "Error fetching rooms" });
   }
 });


 router.get("/search", async (req, res) => {
    const { startDate, endDate, roomType, searchTerm } = req.query;
 
    try {
        const rooms = await Room.find({
            type: roomType,
            availability: { $gte: new Date(startDate), $lte: new Date(endDate) },
            name: { $regex: searchTerm, $options: "i" }
        });
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar habitaciones" });
    }
 });

 router.delete('/delete/:id', async (req, res) => {
    try {
        const roomId = req.params.id;
        const deletedRoom = await Room.findByIdAndDelete(roomId);
        if (!deletedRoom) {
            return res.status(404).send('Room not found');
        }
        res.status(200).send(deletedRoom);
    } catch (error) {
        res.status(500).send('Error deleting room');
    }
});

 
 module.exports = router;





