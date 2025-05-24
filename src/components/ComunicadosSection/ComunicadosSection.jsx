import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import feb1 from "../../utils/comunicados/febrero_1.jpg";
import mar1 from "../../utils/comunicados/marzo_1.jpg";

const comunicadosData = [
    { month: 'Junio', images: [feb1] },
    { month: 'Julio', images: [mar1] },
    { month: 'Abril', images: [feb1] },
    { month: 'Mayo', images: [mar1] },
    { month: 'Febrero', images: [feb1] },
    { month: 'Marzo', images: [mar1] },
];

const ComunicadosSection = () => {
    const [activeKey, setActiveKey] = useState(null);
    const handleSelect = (key) => setActiveKey(prev => (prev === key ? null : key));

    return (
        <div className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Comunicados 2025</h2>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Accordion activeKey={activeKey} onSelect={handleSelect} flush>
                        {/* Centrar y limitar ancho del grid */}
                        <div className="row g-4 mx-auto" style={{ maxWidth: '960px' }}>
                            {comunicadosData.map((item, idx) => (
                                <div className="col-12 col-md-6" key={idx}>
                                    <Accordion.Item
                                        eventKey={`${idx}`}
                                        className="h-100 shadow-sm rounded-4 border"
                                    >
                                        <Accordion.Header className="text-center py-4">
                                            <span className="fs-1 fw-bold text-uppercase w-100">
                                                {item.month}
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body className="d-flex flex-wrap gap-3 justify-content-center p-4">
                                            {item.images.length ? (
                                                item.images.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`${item.month} - comunicado ${i + 1}`}
                                                        className="img-fluid rounded shadow-sm"
                                                        style={{ maxWidth: '400px' }}
                                                    />
                                                ))
                                            ) : (
                                                <p className="text-center mb-0">No hay comunicados.</p>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            ))}
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default ComunicadosSection;
