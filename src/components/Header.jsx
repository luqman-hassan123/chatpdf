import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import {
  Form,
  Button,
  Navbar,
  Nav,
  Container,
  ListGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/Header.css";

function Header({ onSelectChat }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [pdfFile, setPdfFile] = useState(null); // State for storing the uploaded PDF

  // Fetch messages (chat history) from Redux store
  const chatHistory = useSelector((state) => state.chat.chatHistory);


  const toggleSidebar = () => {s
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]); // Store the uploaded PDF file
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pdfFile) {
      console.log("File uploaded:", pdfFile);
      // Add your file upload logic here
    } else {
      alert("Please select a PDF file.");
    }
  };

  return (
    <header className="header">
      {/* Sidebar for larger screens */}
      <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
        <h3 className="sidebar-title">
          <FaFilePdf
            className="me-2 text-danger"
            style={{ fontSize: "24px" }}
          />
          ChatPDF
        </h3>

        {/* Upload form */}
        <div className="card card-sm custom-card p-4 mb-4">
          <h4 className="card-title text-center mb-4 text-primary">
            Upload Your PDF
          </h4>
          <Form onSubmit={handleSubmit} className="upload-form">
            <Form.Group controlId="fileUpload" className="mb-4">
              <Form.Label className="upload-label">Upload PDF</Form.Label>
              <Form.Control
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="upload-input"
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="upload-btn w-100"
            >
              Upload PDF
            </Button>
          </Form>
        </div>

        {/* Chat history */}
        <div className="card card-sm custom-card p-4">
          <h4 className="card-title text-center mb-4 text-primary">
            Chat History
          </h4>
          <ListGroup className="chat-history-list">
            {Array.isArray(chatHistory) && chatHistory.length > 0 ? (
              chatHistory.map((chat, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => onSelectChat(index)}
                  className="chat-history-item"
                >
                  {chat.text.slice(0, 30) || `Chat ${index + 1}`}...
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>No chat history available.</ListGroup.Item> // Fallback message
            )}
          </ListGroup>
        </div>
      </div>

      {/* Main content */}
      <div className={`content ${isSidebarVisible ? "content-shift" : ""}`}>
        {/* Main content goes here */}
      </div>

      {/* Mobile Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3 d-lg-none">
        <Container>
          <Navbar.Brand href="#">ChatPDF</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleSidebar}
          />
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
