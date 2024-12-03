import React, { useState } from 'react';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import ChatPDFLayout from './components/ChatPDFLayout';
import { processPDF } from './services/api';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [processedContent, setProcessedContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle file upload
  const handleFileUpload = async (file) => {
    setPdfFile(file);
    setIsProcessing(true);

    try {
      const extractedText = await processPDF(file); // Call your API
      setProcessedContent(extractedText);
      setShowModal(true);
    } catch (error) {
      console.error('Error processing PDF:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="App">
      <Header onFileUpload={handleFileUpload} />
      <HeaderSection /> {/* Added HeaderSection */}
      <ChatPDFLayout onFileUpload={handleFileUpload} /> {/* Added ChatPDFLayout */}

      {isProcessing && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Processing...</span>
          </Spinner>
        </div>
      )}

      {!isProcessing && processedContent && (
        <div className="output-section bg-light p-4 rounded shadow my-4">
          <h3>Extracted PDF Content</h3>
          <p>{processedContent}</p>
        </div>
      )}

      {/* Modal for displaying extracted content */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Extracted Content</h3>
            <p>{processedContent}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
