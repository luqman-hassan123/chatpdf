import React, { useState } from 'react';
import Header from './components/Header';
import HeaderSection from './components/HeaderSection';
import ChatPDFLayout from './components/ChatPDFLayout';
import Modal from './components/Modal';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { processPDF } from './services/api';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedContent, setProcessedContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = async (file) => {
    setPdfFile(file);
    setIsProcessing(true); // Show loader

    try {
      const extractedText = await processPDF(file); // Simulate API call
      setProcessedContent(extractedText);
      setShowModal(true); // Show modal for confirmation (optional)
    } catch (error) {
      console.error('Error processing PDF:', error);
    } finally {
      setIsProcessing(false); // Hide loader
    }
  };

  const addMessage = (message) => {
    setChatHistory([...chatHistory, { user: 'User', message }]);
  };

  return (
    <div className="App">
      <Header />
      <HeaderSection />
      <ChatPDFLayout onFileUpload={handleFileUpload} />

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

      {pdfFile && !isProcessing && (
        <>
          <ChatWindow chatHistory={chatHistory} />
          <ChatInput onSendMessage={addMessage} />
        </>
      )}

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="PDF Content"
        content={processedContent}
      />
    </div>
  );
}

export default App;
