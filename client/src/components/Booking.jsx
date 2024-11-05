import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import '../App.css';

const Booking = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [room, setRoom] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const { roomId } = useParams();

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                setLoading(true);
                const response = await axios.post("http://localhost:5000/api/rooms/getroombyid", { roomid: roomId });
                setRoom(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error.response ? error.response.data.message : "Error inesperado");
                console.error("Error en la solicitud:", error);
            }
        };

        fetchRoomData();
    }, [roomId]);

    const handleReserve = async () => {
        if (!startDate || !endDate) {
            alert("Por favor selecciona las fechas de reserva.");
            return;
        }
    
        const reservationData = {
            roomId,
            startDate,
            endDate,
        };
    
        try {
            const response = await axios.post("http://localhost:5000/api/reservations/reserve", reservationData, { withCredentials: true });
            alert(response.data.message);
        } catch (error) {
            console.error("Error al reservar:", error.response ? error.response.data : error);
            alert(error.response ? error.response.data.message : "Error inesperado al reservar.");
        }
    };
    
    const calculateTotalDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        return end > start ? (end - start) / (1000 * 60 * 60 * 24) : 0;
    };

    const totalDays = calculateTotalDays();
    const totalAmount = totalDays * (room ? room.rentperday : 0);

    return (
        <div className="container my-5">
            {loading ? (
                <h1 className="text-center">Loading...</h1>
            ) : error ? (
                <h1 className="text-danger text-center">{error}</h1>
            ) : room ? (
                <div className="booking-container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h1 className="room-title">{room.name}</h1>
                            <img src={room.imageurls[0]} alt={room.name} className='img-fluid img-booking' />
                        </div>
                        <div className="col-md-6 mb-4">
                            <h2 className="details-title"><FaUser /> Detalles</h2>
                            <hr />
                            <b>
                                <p>Nombre: {room.name}</p>
                                <p>
                                    <FaCalendarAlt /> Desde:
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        value={startDate} 
                                        onChange={(e) => setStartDate(e.target.value)} 
                                    />
                                </p>
                                <p>
                                    <FaCalendarAlt /> Hasta:
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        value={endDate} 
                                        onChange={(e) => setEndDate(e.target.value)} 
                                    />
                                </p>
                                <p>Max Count: {room.maxcount}</p>
                            </b>
                            <div>
                                <h2 className="amount-title"> Pago</h2>
                                <hr />
                                <p>Total días: {totalDays}</p>
                                <p>Reserva por día: {room.rentperday}</p>
                                <p>Total a Pagar: {totalAmount}</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <button className='btn btn-primary btn-lg booking-btn' onClick={handleReserve}>
                                    Reservar Ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Booking;


