import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaUtensils, FaSwimmingPool, FaMapMarkedAlt } from 'react-icons/fa';
import '../App.css'

const services = [
    {
        icon: <FaUtensils size={50} />,
        title: 'Restaurante y Bar',
        description: 'Variedad de platillos locales e internacionales.',
        image: 'https://images.unsplash.com/photo-1597106525363-7916ebf5b083?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        icon: <FaSwimmingPool size={50} />,
        title: 'Piscina y Spa',
        description: 'Piscina al aire libre y tratamientos de spa revitalizantes.',
        image: 'https://plus.unsplash.com/premium_photo-1661370217072-682d12ea88fb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        icon: <FaMapMarkedAlt size={50} />,
        title: 'Actividades y Excursiones',
        description: 'Tours de aventura, clases de cocina y deportes acuáticos.',
        image: 'https://images.unsplash.com/photo-1596559058872-595ea5281b7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    }
];

const HotelServices = () => {
    return (
        <div className="container-fluid my-5">
            <Row>
                {services.map((service, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="text-center border-light shadow">
                            <Card.Img variant="top" src={service.image} alt={service.title} />
                            <Card.Body>
                                <div className="mb-3">{service.icon}</div>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <Button className='service-button'>Ver más</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HotelServices;
