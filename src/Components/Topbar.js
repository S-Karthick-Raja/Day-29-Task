import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <div className="topbar">
      <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Link to="/" className="home">HOME</Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="topbar">
                😉 DASHBOARD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <hr />
                <Link to="/users" className="home1">USERS</Link>
                <hr />
                <Link to="/create-user" className="home1">CREATE USER</Link>
                <hr />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
