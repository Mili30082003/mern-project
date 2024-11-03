import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/rooms/getallrooms');
                const data = response.data;
                console.log(data);

               
                if (Array.isArray(data)) {
                    setRooms(data);
                } else {
                    console.error("La respuesta no es un array:", data);
                }
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {rooms.length === 0 ? (
                <p>No rooms available.</p>
            ) : (
                <ul>
                    {rooms.map(room => (
                        <li key={room.id}>{room.name}</li> 
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
