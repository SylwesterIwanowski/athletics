import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css'


export const Navbars: React.FC = () => {

    return (<>
        <Navbar className='navbarLink' sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Navbar.Brand href="#home">Atletyka</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className='navbarLink' to="/perform-test">Wykonaj test</Link></Nav.Link>
                    <Nav.Link><Link className='navbarLink' to="/player-list">Lista zawodników</Link></Nav.Link>
                    <Nav.Link><Link className='navbarLink' to="/group-list">Lista grup</Link></Nav.Link>
                    <Nav.Link><Link className='navbarLink' to="/test-results">Pokaż wyniki</Link></Nav.Link>
                    <NavDropdown title="Statystyka" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Statystyka</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Kontakt</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Zaloguj się
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>)
}