import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
    const [rooms, setRooms] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [users, setUsers] = useState([]);
    const [newRoom, setNewRoom] = useState({ name: '', rentperday: '', imageUrl: '' });
    const [editingRoom, setEditingRoom] = useState(null);

    useEffect(() => {
        fetchRooms();
        fetchReservations();
        fetchUsers();
    }, []);

    const fetchRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
            setRooms(response.data);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reservations/getall');
            setReservations(response.data);
        } catch (error) {
            console.error("Error fetching reservations:", error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users/getall');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleCreateRoom = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/rooms/create', newRoom);
            setRooms([...rooms, response.data]);
            setNewRoom({ name: '', rentperday: '', imageUrl: '' });
        } catch (error) {
            console.error("Error creating room:", error);
        }
    };

    const handleEditRoom = async (room) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/rooms/edit/${room._id}`, room);
            setRooms(rooms.map(r => r._id === room._id ? response.data : r));
            setEditingRoom(null);
        } catch (error) {
            console.error("Error editing room:", error);
        }
    };

    const handleDeleteRoom = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/rooms/delete/${id}`);
            setRooms(rooms.filter(room => room._id !== id));
        } catch (error) {
            console.error("Error deleting room:", error);
        }
    };

    return (
        <div className="admin-panel container my-5" style={{ backgroundColor: '#f8f4e3', borderRadius: '10px', padding: '20px' }}>
            <h1 className="text-center text-dark">Panel de Administrador</h1>

            <h2 className="mt-4">Crear Habitación</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={newRoom.name}
                    onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                />
                <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Precio por día"
                    value={newRoom.rentperday}
                    onChange={(e) => setNewRoom({ ...newRoom, rentperday: e.target.value })}
                />
                <input
                    type="url"
                    className="form-control mt-2"
                    placeholder="URL de la imagen"
                    value={newRoom.imageUrl}
                    onChange={(e) => setNewRoom({ ...newRoom, imageUrl: e.target.value })}
                />
                <button className="btn btn-primary mt-3" onClick={handleCreateRoom}>Crear Habitación</button>
            </div>

            <h2 className="mt-4">Habitaciones</h2>
            <ul className="list-group">
                {rooms.map(room => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={room._id}>
                        {editingRoom?._id === room._id ? (
                            <>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={editingRoom.name}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, name: e.target.value })}
                                />
                                <input
                                    type="number"
                                    className="form-control mt-2"
                                    value={editingRoom.rentperday}
                                    onChange={(e) => setEditingRoom({ ...editingRoom, rentperday: e.target.value })}
                                />
                                <button className="btn btn-success mt-2" onClick={() => handleEditRoom(editingRoom)}>Guardar</button>
                            </>
                        ) : (
                            <>
                                <div>
                                    <strong>{room.name}</strong> - ${room.rentperday} por día
                                </div>
                                <div>
                                    <img src={room.imageUrl} alt={room.name} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                                </div>
                                <div>
                                    <button className="btn btn-warning" onClick={() => setEditingRoom(room)}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteRoom(room._id)}>Eliminar</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            <h2 className="mt-4">Reservas</h2>
            <ul className="list-group">
                {reservations.map(reservation => (
                    <li className="list-group-item" key={reservation._id}>
                        Habitación {reservation.roomid} reservada por {reservation.userid} de {reservation.fromdate} a {reservation.todate}
                    </li>
                ))}
            </ul>

            <h2 className="mt-4">Usuarios</h2>
            <ul className="list-group">
                {users.map(user => (
                    <li className="list-group-item" key={user._id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
