import React from 'react';
import { Card } from 'react-bootstrap';

const HimnoSection = () => {
    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="d-flex flex-column align-items-center gap-4">

                    {/* Card del Himno */}
                    <Card
                        className="bg-white text-dark rounded-4 shadow-sm"
                        style={{
                            border: '4px solid #003B7A',
                            maxWidth: '600px',
                            width: '100%',
                            minHeight: '600px',
                        }}
                    >
                        <Card.Body className="d-flex flex-column">
                            <h3 className="fw-bold text-center mb-3">Himno Juanalarquino</h3>
                            <div
                                className="lh-lg flex-grow-1"
                                style={{ maxHeight: '250px' }}
                            >
                                <p><strong>Coro:</strong><br />
                                    Entonemos fervientes el himno<br />
                                    que es enseña de nuestro plantel.<br />
                                    Y al Perú nuestra Patria querida<br />
                                    con orgullo ensalcemos también.</p>

                                <p><strong>I Estrofa:</strong><br />
                                    ¡Oh! Noble maestra forjadora de nuestro ideal,<br />
                                    empeñamos la promesa de no defraudarte jamás.<br />
                                    En el aula enseñas el sublime amor a la verdad<br />
                                    y cultivas nuestra mente con ternura, con fe y bondad.</p>

                                <p><strong>II Estrofa:</strong><br />
                                    Tú guías por el sendero nuestra alegre juventud<br />
                                    y en este hogar querido velas por nuestra virtud.<br />
                                    A nosotras nos toca como un solo corazón<br />
                                    laborar por nuestra unidad que es un núcleo de paz y de amor.</p>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Card del Video */}
                    <Card
                        className="bg-white rounded-4 shadow-sm"
                        style={{
                            border: '4px solid #C00000',
                            maxWidth: '600px',
                            width: '100%'
                        }}
                    >
                        <Card.Body className="d-flex flex-column align-items-center">
                            <h3 className="fw-bold text-center mb-3">Video del Himno</h3>
                            <div className="w-75 ratio ratio-16x9">
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fjadmiraflores%2Fvideos%2F901214850355006%2F&show_text=false&width=560&t=0"
                                    title="Himno Juanalarquino"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                />
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default HimnoSection;
