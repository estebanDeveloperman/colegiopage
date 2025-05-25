import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import foto1 from '../../utils/carrusel/foto1.jpg';
import foto2 from '../../utils/carrusel/foto2.jpg';
import foto3 from '../../utils/carrusel/foto3.jpg';
import foto4 from '../../utils/carrusel/foto4.jpg';
import foto5 from '../../utils/carrusel/foto5.jpg';
import foto6 from '../../utils/carrusel/foto6.jpg';
import foto7 from '../../utils/carrusel/foto7.jpg';
import foto8 from '../../utils/carrusel/foto8.jpg';
import foto9 from '../../utils/carrusel/foto9.jpg';
import foto10 from '../../utils/carrusel/foto10.jpg';
import foto11 from '../../utils/carrusel/foto11.jpg';
import foto12 from '../../utils/carrusel/foto12.jpg';
import foto13 from '../../utils/carrusel/foto13.jpg';

// Orden personalizado
const images = [
    foto13, foto12, foto6, foto7, foto5,
    foto1, foto2, foto3, foto4, foto8,
    foto9, foto10, foto11,
];

const CarruselSection = () => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [autoPlay, setAutoPlay] = useState(false);

    // IntersectionObserver para iniciar autoplay sólo cuando la sección esté visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAutoPlay(true);
                    // react‑slick necesita que llamemos a slickPlay para arrancar
                    sliderRef.current?.slickPlay();
                } else {
                    // pausa cuando sale del viewport
                    sliderRef.current?.slickPause();
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const settings = {
        infinite: true,
        speed: 6000,
        autoplay: autoPlay,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div ref={containerRef} className="py-5 bg-light">
            <div className="container">
                <Slider ref={sliderRef} {...settings}>
                    {images.map((src, idx) => (
                        <div key={idx} className="px-2">
                            <img
                                src={src}
                                alt={`Slide ${idx + 1}`}
                                className="img-fluid rounded-4 shadow-sm"
                                style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CarruselSection;
