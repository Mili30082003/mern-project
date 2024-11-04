import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUser } from 'react-icons/fa'; // Importing icons for better visuals
import '../App.css'; // Assuming you will create this CSS file

const Booking = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [room, setRoom] = useState(null);
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
                                <p><FaCalendarAlt /> De Dia:
                                    <input type="date" className="form-control" />
                                </p>
                                <p><FaCalendarAlt /> A dia::
                                    <input type="date" className="form-control" />
                                </p>
                                <p>Max Count: {room.maxcount}</p>
                            </b>
                            <div>
                                <h2 className="amount-title"> Pago</h2>
                                <hr />
                                <p>Total days: {/* Calculate dynamically */}</p>
                                <p>Reserva por día: {room.rentperday}</p>
                                <p>Total a Pagar: {/* Calculate total amount */}</p>
                            </div>

                            <div className="d-flex justify-content-start">
                                <button className='btn btn-primary btn-lg booking-btn'>Reservar Ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Booking;

