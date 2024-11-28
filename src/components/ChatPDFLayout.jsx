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

  return (
    <div className="d-flex">
      <div className="content flex-grow-1 mb-6 d-flex justify-content-center align-items-center">
        <Container className="text-center">
          <div className="upload-container bg-light p-5 rounded shadow">
            <h3>Draggg File Here or Select File</h3>
            <Form.Group controlId="formFile" className="my-4">
              <Form.Control 
                type="file" 
                className="file-input" 
                onChange={handleFileChange} 
              />
            </Form.Group>
            <Button 
              variant="primary" 
              className="upload-button"
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