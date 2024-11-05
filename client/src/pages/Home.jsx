import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/commons/Header';
import Hero from '../components/Hero';
import HotelServices from '../components/HotelServices'
import Banner from '../components/banner';
import Room from '../components/Room'


const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
                setRooms(response.data); 
                setLoading(false); 
            } catch (err) {
                setError('Error fetching rooms');
                setLoading(false); 
            }
        };

        fetchRooms();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
           
              <Header />
           <Hero></Hero>
           <HotelServices></HotelServices>
          <Banner></Banner>
           <Room rooms={rooms}></Room>
        </div>
    );
};

export default RoomList;

