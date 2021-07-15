import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'


function MyNavBar(props) {
    return (
        <Navbar bg="dark" expand="lg" className="justify-content-center row">
            <Container className="mx-3 px-3">
                <Navbar.Brand href="#home"><img src="https://images.all-free-download.com/images/graphiclarge/ancient_books_vector_287426.jpg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                        <Nav.Link className="text-white" href="#link">About</Nav.Link>
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavBar
