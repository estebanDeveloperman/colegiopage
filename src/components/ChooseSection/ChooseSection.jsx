import React from 'react';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    return (
        <div className="container my-5">
            <div className="row g-4 align-items-stretch">
                {/* Card de Misión */}
                <div className="col-12 col-md-6">
                    <Card
                        className="h-100 bg-white text-dark rounded-4"
                        style={{
                            border: '4px solid #003B7A',
                            boxShadow: '0 6px 20px rgba(0, 59, 122, 0.15)',
                        }}
                    >
                        <Card.Body className="d-flex flex-column justify-content-start text-center p-4">
                            <Card.Title className="fw-bold fs-4 mb-3">Misión</Card.Title>
                            <Card.Text className="lh-base" style={{ textAlign: 'justify' }}>
                                Somos una institución educativa pública emblemática de mujeres, que brinda una formación integral de calidad en los niveles de inicial, primaria y secundaria. Promovemos el desarrollo de competencias y habilidades, fortaleciendo valores éticos y ciudadanos, el respeto a la diversidad, la inclusión y el compromiso con el cuidado del medio ambiente.
                                <br /><br />
                                Incorporamos la tecnología como herramienta para la productividad, la investigación y la sostenibilidad, ofreciendo además una educación secundaria con formación técnica que prepara a nuestras estudiantes para su inserción en el mundo laboral y su acceso a la educación superior.
                                <br /><br />
                                Contamos con un equipo directivo, docente y administrativo en permanente fortalecimiento y actualización profesional, comprometido con el logro de aprendizajes que contribuyan al crecimiento personal y social de nuestras estudiantes en una sociedad en constante transformación.
                                <br /><br />
                                Nos guía el lema: “Somos Juanalarquinas, líderes nobles de corazón”.
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
                        <Card.Body className="d-flex flex-column justify-content-start text-center p-4">
                            <Card.Title className="fw-bold fs-4 mb-3">Visión</Card.Title>
                            <Card.Text className="lh-base" style={{ textAlign: 'justify' }}>
                                Nos distinguiremos por ofrecer una educación de calidad, cimentada en sólidos principios personales, morales, tecnológicos y laborales, que promueva el desarrollo de una ciudadanía activa, crítica y solidaria, respetuosa de la diversidad, inclusiva, equitativa y comprometida con la sostenibilidad ambiental y social.
                                <br /><br />
                                Construiremos una comunidad educativa fortalecida por docentes y directivos altamente calificados, personal administrativo eficiente y familias corresponsables, que impactarán positivamente en el crecimiento personal y profesional de nuestras estudiantes, preparándolas para enfrentar con éxito los desafíos del mundo laboral, la educación superior y el ejercicio pleno de una vida ciudadana transformadora, en una sociedad más justa, equitativa y sostenible.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ChooseSection;
