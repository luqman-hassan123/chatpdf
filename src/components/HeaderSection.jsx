import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFilePdf, FaUpload } from 'react-icons/fa';
import '../Styles/HeaderSection.css';

function HeaderSection() {
  return (
    <div className="header-section bg-light py-5">
      <Container>
        <Row className="text-center align-items-center">
          {/* Column for heading and description */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h1 className="display-5">Welcome to ChatPDF</h1>
            <p className="lead">Easily upload your PDF files and interact with them like never before.</p>
          </Col>
          
          {/* Column for icons */}
          <Col xs={12} md={6}>
            <div className="icons-display">
              <FaFilePdf size={80} className="text-primary me-3" />
              <FaUpload size={80} className="text-success" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderSection;
