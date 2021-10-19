import {Nav,NavDropdown , Navbar,Container} from 'react-bootstrap'
export default function SiteMenu(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Azure Lightning Starer-Kit for JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/t/random">Add New Item</Nav.Link>
            <Nav.Link href="/t/random">News</Nav.Link>
            <NavDropdown title="Getting Started" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GitHub Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Azure Static WebSites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Azure Cosmos DB</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">React Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Apollo GraphQL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">React Hook Forms</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}