import React from "react";
import '../styles/Header.css'
import { Container, Row, Col, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      {/* Sidebar for larger screens */}
      <div className="d-none d-lg-block sidebar bg-dark text-white position-fixed top-0 start-0 h-100 w-25 p-4">
      <h3 className="sidebar-title d-flex align-items-center">
  <FaFilePdf 
    className="me-2 text-danger" 
    style={{ fontSize: "24px" }} 
  /> {/* Text-danger gives a red color to the icon */}
  ChatPDF
</h3>
        <div class="sidebar-content mt-4">
          <h2>Upload File</h2>
          <form>
            <div class="mb-3">
              <label for="fileUpload" class="form-label">
                Choose a file to upload
              </label>
              <input className="form-control" type="file" id="fileUpload" />
            </div>
            <button type="submit" class="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </div>

      {/* Top navbar for smaller screens */}
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3 d-lg-none">
        <Container>
          <Navbar.Brand href="#">ChatPDF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Sign In</Nav.Link>
              <Nav.Link href="#">Upload PDF</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;