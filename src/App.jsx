import React, { useState } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import ChatPDFLayout from "./components/ChatPDFLayout";
import { processPDF } from "./services/api";
import ChatSection from "./components/ChatSection";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import styles
import "./App.css";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [processedContent, setProcessedContent] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { title: "Chat 1", messages: [] },
    { title: "Chat 2", messages: [] },
  ]);
  const [userInput, setUserInput] = useState("");

  // Handle file upload
  const handleFileUpload = async (file) => {
    setPdfFile(file);
    setIsProcessing(true);

    try {
      const extractedText = await processPDF(file); // Call your API
      setProcessedContent(extractedText);
      setShowModal(true);
    } catch (error) {
      console.error("Error processing PDF:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle sending a chat message
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setChatHistory([
        ...chatHistory,
        {
          title: `Chat ${chatHistory.length + 1}`,
          messages: [{ user: "User", message: userInput }],
        },
      ]);
      setUserInput(""); // Clear input field after sending
    }
  };

  const handleSelectChat = (index) => {
    console.log("Selected chat:", chatHistory[index]);
    // Additional logic for updating the chat UI can go here
  };

  return (
    <div className="App">
      {/* Header with file upload */}
      <Header chatHistory={chatHistory} onSelectChat={handleSelectChat} />

      {/* Additional header section */}
      <HeaderSection />

      {/* ChatPDF Layout */}
      <ChatPDFLayout onFileUpload={handleFileUpload} />

      {/* Display spinner during processing */}
      {isProcessing && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Processing...</span>
          </Spinner>
        </div>
      )}

      {/* Display extracted content */}
      {!isProcessing && processedContent && (
        <div className="output-section bg-light p-4 rounded shadow my-4">
          <h3>Extracted PDF Content</h3>
          <p>{processedContent}</p>
        </div>
      )}

      {/* Main content: PDF Viewer and Chat Section */}
      {pdfFile && !isProcessing && (
        <Row className="my-8">
          {/* PDF Viewer with increased width */}
          <Col md={8} className="pdf-viewer-container">
            <h3>PDF Viewer</h3>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={URL.createObjectURL(pdfFile)} />
            </Worker>
          </Col>

          {/* Chat Section with reduced width */}
          <Col md={4} className="chat-section-container">
            <ChatSection
              processedContent={processedContent}
              chatHistory={chatHistory}
            />
          </Col>
        </Row>
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
