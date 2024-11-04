import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaBed, FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import '../App.css';

const Room = ({ rooms }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='container mt-5'>
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
                <Button variant="primary" style={{ backgroundColor: '#b08968', borderColor: '#b08968' }}>
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Room;
