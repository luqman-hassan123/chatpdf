import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

function FileUpload({ onFileUpload }) {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFileName(uploadedFile.name);
      setFile(uploadedFile);
      setError('');
      onFileUpload(uploadedFile);
    } else {
      setError('Please upload a valid PDF file.');
      setFileName('');
      setFile(null);
    }
  };

  return (
    <div className="file-upload mb-4">
      <Form>
        <Form.Group>
          <Form.Label>Choose a PDF file</Form.Label>
          <Form.Control
            type="file"
            id="pdf-file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </Form.Group>
        {fileName && <p className="mt-2">Selected file: {fileName}</p>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Button variant="primary" className="mt-2" disabled={!file}>
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default FileUpload;