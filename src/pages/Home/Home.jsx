import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import NosotrosImg from '../../utils/assets/seccion_nosotros.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import HimnoSection from '../../components/HimnoSection/HimnoSection';
import { Card } from 'react-bootstrap';
import ComunicadosSection from '../../components/ComunicadosSection/ComunicadosSection';



function Home() {
    return (
        <div className='home-page'>
            <header id="inicio" className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Bienvenidos</h2>
                    <h1 className='text-center fw-semibold'>I.E. Juana Alarco de Dammert</h1>
                    <div className="d-flex flex-column flex-sm-row align-items-center">
                        <a href="#comunicados">
                            <button type="button" className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                                Comunicados
                            </button>
                        </a>
                        <a href="#contact">
                            <button type="button" className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0">
                                Contacto
                            </button>
                        </a>
                    </div>
                </div>
            </header>

            <div id="nosotros" className="py-5 bg-light">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-around">
                        {/* Texto Nosotros */}
                        <div className="col-12 col-lg-5">
                            <h2 className="text-capitalize mb-4">Nosotros</h2>
                            <p className="mb-3">
                                La Institución Educativa Emblemática Juana Alarco de Dammert, fundada en 1945 en Miraflores, es un colegio nacional femenino que ofrece educación integral desde inicial hasta secundaria. Nos guiamos por principios de autonomía, trabajo en equipo, innovación y mejora continua, promoviendo la inclusión, la equidad de género y el cuidado del medio ambiente.
                            </p>
                            <p className="mb-4">
                                Nuestro enfoque pedagógico combina metodologías activas con tecnología de vanguardia para formar líderes nobles de corazón, capaces de afrontar los retos del siglo XXI con excelencia académica y compromiso social.
                            </p>
                            <Link to="https://www.facebook.com/jadmiraflores" target='_blank'>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{ backgroundColor: '#003B7A', borderColor: '#003B7A' }}
                                >
                                    Conoce más
                                </button>
                            </Link>
                        </div>

                        {/* Imagen */}
                        <div className="col-12 col-lg-5 mt-5 mt-lg-0 text-center">
                            <img
                                src={NosotrosImg}
                                className="img-fluid rounded-4 shadow-sm"
                                alt="Fachada I.E. Juana Alarco de Dammert"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="misionvision" className="py-2">
                <ChooseSection />
            </div>


            <div id="himno" className="py-2">
                <HimnoSection />
            </div>

            <div id="comunicados" className='py-2'>
                <ComunicadosSection />
            </div>

        </div>
    )
}

export default Home;