import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Row } from 'react-bootstrap';
import { FaBed, FaDollarSign, FaInfoCircle } from 'react-icons/fa'; 
import '../App.css'

const Room = ({ rooms }) => {
    const [show, setShow] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null); // Nuevo estado para la habitación seleccionada

    const handleClose = () => setShow(false);
    const handleShow = (room) => {
        setSelectedRoom(room); // Establece la habitación seleccionada
        setShow(true);
    };

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

                                <Button variant="primary" onClick={() => handleShow(room)}>
                                    Ver Detalles
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{selectedRoom ? selectedRoom.name : ''}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {selectedRoom && (
                                            <Carousel>
                                                {selectedRoom.imageurls.map((url, index) => (
                                                    <Carousel.Item key={index}>
                                                        <img src={url} alt="" className='d-block w-100 bigima' />
                                                    </Carousel.Item>
                                                ))}
                                            </Carousel>
                                           
                                        )}
                                         <p> {room.description} </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Room;

