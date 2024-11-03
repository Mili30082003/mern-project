import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Room from '../components/Room'


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
           <Hero></Hero>
           <Room rooms={rooms}></Room>
        </div>
    );
};

export default RoomList;

