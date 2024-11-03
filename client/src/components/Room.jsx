import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaBed, FaDollarSign, FaInfoCircle } from 'react-icons/fa'; 
import '../App.css'
const Room = ({ rooms }) => {
  return (
    <div>
      <h1 className="text-center mb-4">Lista de Habitaciones</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {rooms.map(room => (
          <Col key={room._id}>
            <Card style={{ border: 'none', borderRadius: '10px', backgroundColor: '#f8f4e3' }}>
              <Card.Img 
                variant="top" 
                src={room.imageurls[0]} 
                style={{ borderRadius: '10px 10px 0 0', height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>
                  <FaBed /> {room.name}
                </Card.Title>
                <Card.Text>
                  <FaInfoCircle /> {room.description}
                </Card.Text>
                <Card.Text>
                  <FaDollarSign /> Precio: ${room.rentperday} por día
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Room;
