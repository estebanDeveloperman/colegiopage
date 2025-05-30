// src/App.js
import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

import logoColegio from "./utils/assets/logo_colegio.jpg";

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src={logoColegio}
                alt="Logo"
                width="60"
                height="60"
                className="d-inline-block align-top"
                style={{ borderRadius: "50%" }}
              />
              <span className="mx-2 text-light lh-1 fw-semibold">
                I.E. Juana
                <br />
                Alarco
                <br />
                Dammert
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link
                as="button"
                onClick={() => scrollTo("inicio")}
                className="text-uppercase btn btn-link"
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                as="button"
                onClick={() => scrollTo("nosotros")}
                className="text-uppercase btn btn-link"
              >
                Nosotros
              </Nav.Link>
              <Nav.Link
                as="button"
                onClick={() => scrollTo("misionvision")}
                className="text-uppercase btn btn-link"
              >
                Visión / Misión
              </Nav.Link>
              <Nav.Link
                as="button"
                onClick={() => scrollTo("himno")}
                className="text-uppercase btn btn-link"
              >
                Himno
              </Nav.Link>
              <Nav.Link
                as="button"
                onClick={() => scrollTo("comunicados")}
                className="text-uppercase btn btn-link"
              >
                Comunicados
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer id="contact">
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center">
            {/* Redes Sociales */}
            <div className="col-md-4">
              <a
                href="https://www.facebook.com/jadmiraflores"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mb-5 mb-md-4"
                >
                  Redes Sociales
                </button>
              </a>
              <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
                <a
                  href="https://www.facebook.com/jadmiraflores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/jadmiraflores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/jadmiraflores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/jadmiraflores"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </a>
              </ul>
            </div>

            {/* Navegación interna */}
            <div className="col-md-7 col-lg-6">
              <div className="d-md-flex justify-content-between align-items-center">
                <div className="mb-5 mt-4">
                  <ul className="footer-navigation list-unstyled mb-0">
                    <li>
                      <a
                        onClick={() => scrollTo("inicio")}
                        className="cursor-pointer text-decoration-none text-danger text-uppercase fw-semibold"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollTo("nosotros")}
                        className="text-decoration-none text-danger text-uppercase fw-semibold"
                      >
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollTo("misionvision")}
                        className="text-decoration-none text-danger text-uppercase fw-semibold"
                      >
                        Visión/Misión
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollTo("himno")}
                        className="text-decoration-none text-danger text-uppercase fw-semibold"
                      >
                        Himno
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => scrollTo("comunicados")}
                        className="text-decoration-none text-danger text-uppercase fw-semibold"
                      >
                        Comunicados
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Datos de contacto */}
                <div style={{ marginLeft: "35px" }}>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p>
                        Dirección: Av. Alfredo Benavides 2315, Miraflores 15048
                      </p>
                    </li>
                    <li>
                      <p>Teléfono: (01) 4490468</p>
                    </li>
                    <li>
                      <p>Email: juanaalarcodammert@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-body-tertiary">
          <div className="container">
            <p className="p-3 m-0 text-center">
              © 2025 I.E. Juana Alarco de Dammert. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
