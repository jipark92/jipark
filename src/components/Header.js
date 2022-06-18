import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className='text-light' disabled>JI PARK</Navbar.Brand>
                <Nav className="d-flex-row-reverse">
                    <Link to='/'>
                        <Nav.Link className='text-light' disabled>Home</Nav.Link>
                    </Link>
                    <Link to='/projects'>
                        <Nav.Link className='text-light' disabled>Projects</Nav.Link>
                    </Link>
                    <Link to='/contact'>
                        <Nav.Link className='text-light' disabled>Contact</Nav.Link>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}