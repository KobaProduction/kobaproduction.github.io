import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
    return <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Koba Production</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="button-sm"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Organization" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                href="https://github.com/KobaProduction/">
                                Page on GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="https://t.me/koba_production">
                                Telegram Channel
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="https://t.me/koba_production_chat">
                                Telegram Chat
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}

export default CustomNavbar;