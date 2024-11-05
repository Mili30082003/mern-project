import React, { useState } from 'react';
import axios from 'axios';

const DateForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/rooms/search', {
        params: { startDate, endDate, roomType, searchTerm },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching for rooms:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Room Type:</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="form-control"
            >
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
        </div>
      </div>
      <button onClick={handleSearch} className="btn btn-primary mt-2">
        Search Rooms
      </button>

      {/* Resultados */}
      <div className="mt-4">
        {results.length > 0 ? (
          results.map((room) => (
            <div key={room.id}>
              <h5>{room.name}</h5>
              <p>{room.description}</p>
            </div>
          ))
        ) : (
          <p>No rooms found</p>
        )}
      </div>
    </div>
  );
};

export default DateForm;
