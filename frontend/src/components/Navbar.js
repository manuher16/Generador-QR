import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const NavBar = () => {
    const session = useSelector(state => state.session.login)
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    let navOption = null
    if (session) {

        navOption = (<Nav>
            <NavDropdown title="Cuenta" id="navbarScrollingDropdown">
                <NavDropdown.Item href="dashboard">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="manage">Codigos QR</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout" onClick={() => logout()}>
                    Cerrrar session
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>)
    } else {
        navOption = (<Nav>
            <Nav.Link href="login">Iniciar sesion </Nav.Link>
            <Nav.Link href="register">Registrarse </Nav.Link>
        </Nav>)
    }
    const style = {

    }
    return (
        <Navbar bg="light" expand="lg" >
            <Container style={style}>
                <Navbar.Brand href="/">Generador QR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="generator">Generar</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                    </Nav>
                    {navOption}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;