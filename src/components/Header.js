import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand disabled>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Link to='/'>
                            <Nav.Link className='text-light' disabled>Home</Nav.Link>
                        </Link>
                        <Link to='/projects'>
                            <Nav.Link className='text-light' disabled>Projects</Nav.Link>
                        </Link>
                        <Link to='/experience'>
                            <Nav.Link className='text-light' disabled>Experience</Nav.Link>
                        </Link>
                        <Link to='/contact'>
                            <Nav.Link className='text-light' disabled>Contact</Nav.Link>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}