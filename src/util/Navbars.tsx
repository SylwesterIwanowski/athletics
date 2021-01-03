import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



export const Navbars: React.FC = () => {

    return (<>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Atletyka</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Wykonaj test</Nav.Link>
                    <Nav.Link href="#pricing">Pokaż wyniki</Nav.Link>
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