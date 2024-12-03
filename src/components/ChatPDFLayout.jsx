import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import '../styles/ChatPDFLayout.css';

function ChatPDFLayout({ onFileUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="d-flex">
      <div className="content flex-grow-1 mb-6 d-flex justify-content-center align-items-center">
        <Container className="text-center">
          <div 
            className="upload-container bg-light p-5 rounded "
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <h3>Drag PDF Here or Select PDF</h3>
            <Form.Group controlId="formFile" className="my-4">
              <Form.Control 
                type="file" 
                className="file-input" 
                onChange={handleFileChange} 
                accept=".pdf"
              />
            </Form.Group>
            <Button 
              variant="primary" 
              className="btn btn-primary btn-md"
              onClick={() => document.getElementById('formFile').click()}
            >
              Upload
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ChatPDFLayout;
