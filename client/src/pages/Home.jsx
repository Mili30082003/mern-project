import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
                setRooms(response.data); // Guarda los datos en el estado
                setLoading(false); // Cambia el estado de carga
            } catch (err) {
                setError('Error fetching rooms');
                setLoading(false); // Cambia el estado de carga
            }
        };

        fetchRooms();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Room List</h1>
            <ul>
                {rooms.map(room => (
                    <li key={room._id}>
                        <h2>{room.name}</h2>
                        <p>{room.description}</p>
                        <p>Price: ${room.rentperday} per day</p>
                        <img src={room.imageurls[0]} alt={room.name} style={{ width: '100px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;

