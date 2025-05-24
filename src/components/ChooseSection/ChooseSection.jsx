import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* Card de Misión */}
                <div className="col-12 col-md-6">
                    <Card
                        className="h-100 bg-white text-dark rounded-4"
                        style={{
                            border: '4px solid #003B7A',
                            boxShadow: '0 6px 20px rgba(0, 59, 122, 0.15)',
                        }}
                    >
                        <Card.Body className="d-flex flex-column justify-content-center text-center p-4">
                            <Card.Title className="fw-bold fs-4 mb-3">Misión</Card.Title>
                            <Card.Text className="lh-base">
                                Somos una institución emblemática de mujeres que ofrece formación integral de calidad en inicial, primaria y secundaria. Fomentamos competencias, valores éticos y respeto a la diversidad, integrando tecnología y formación técnica para impulsar la inserción laboral y el acceso a la educación superior. Todo ello guiado por nuestro lema: “Somos Juanalarquinas, líderes nobles de corazón”.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card de Visión */}
                <div className="col-12 col-md-6">
                    <Card
                        className="h-100 bg-white text-dark rounded-4"
                        style={{
                            border: '4px solid #C00000',
                            boxShadow: '0 6px 20px rgba(192, 0, 0, 0.15)',
                        }}
                    >
                        <Card.Body className="d-flex flex-column justify-content-center text-center p-4">
                            <Card.Title className="fw-bold fs-4 mb-3">Visión</Card.Title>
                            <Card.Text className="lh-base">
                                Nos visualizamos como referentes de educación de calidad, cimentada en principios personales, morales y laborales, que promueve una ciudadanía activa, inclusiva y responsable con el medio ambiente. Forjamos una comunidad de docentes, directivos y familias comprometidas que potencian el crecimiento personal y profesional de nuestras estudiantes, preparándolas para afrontar con éxito los retos del siglo XXI.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ChooseSection;