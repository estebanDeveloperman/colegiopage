import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// URLs de videos remotos
const videos = [
    'https://storage.googleapis.com/la_liga_files/colegio/video1.mp4',
    'https://storage.googleapis.com/la_liga_files/colegio/video2.mp4',
];

const VideosSection = () => {
    const videoRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const vid = entry.target;
                    if (vid.dataset.src) {
                        vid.src = vid.dataset.src;
                        vid.load();
                        delete vid.dataset.src;
                    }
                    obs.unobserve(vid);
                }
            });
        }, { threshold: 0.5 });

        videoRefs.current.forEach(v => {
            if (v) observer.observe(v);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold mb-4">Videos</h2>
                <Row className="g-4 justify-content-center">
                    {videos.map((src, idx) => (
                        <Col key={idx} xs={12} md={6} lg={5} className="d-flex justify-content-center">
                            <Card className="border-0 shadow-sm rounded-4" style={{ width: '100%' }}>
                                <Card.Body className="p-0">
                                    <video
                                        data-src={src}
                                        ref={el => (videoRefs.current[idx] = el)}
                                        controls
                                        className="w-100 rounded-4"
                                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default VideosSection;
