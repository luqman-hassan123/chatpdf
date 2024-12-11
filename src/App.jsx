import React, { useState } from "react";
import { Spinner, Row, Col, Button } from "react-bootstrap";
import { Worker, Viewer, defaultLayoutPlugin } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Import styles
import "@react-pdf-viewer/zoom/lib/styles/index.css"; // Import zoom styles
import Header from "./components/Header";
import HeaderSection from "./components/HeaderSection";
import ChatPDFLayout from "./components/ChatPDFLayout";
import ChatSection from "./components/ChatSection";
import "./App.css";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [processedContent, setProcessedContent] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");

  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, Zoom } = zoomPluginInstance;

  const handleFileUpload = async (file) => {
    if (!file) return;
    setPdfFile(file);
    setIsProcessing(true);

    try {
      // Call your API to process the PDF
      setShowModal(true);
    } catch (error) {
      console.error("Error processing PDF:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="App">
      <Header chatHistory={chatHistory} />
      {!pdfFile && <HeaderSection />}
      {!pdfFile ? (
        <ChatPDFLayout onFileUpload={handleFileUpload} />
      ) : (
        <div className="viewer-layout">
          <Row className="my-4">
            <Col md={8} className="pdf-viewer-container">
              <div className="pdf-viewer-content">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <div className="zoom-controls">
                    <Button variant="outline-primary">
                      <ZoomOut />
                    </Button>
                    <Button variant="outline-primary">
                      <ZoomIn />
                    </Button>
                    <Button variant="outline-secondary">
                      <Zoom />
                    </Button>
                  </div>
                  <Viewer
                    fileUrl={URL.createObjectURL(pdfFile)}
                    plugins={[zoomPluginInstance]}
                  />
                </Worker>
              </div>
            </Col>
            <Col md={4} className="chat-section-container">
              <ChatSection
                processedContent={processedContent}
                chatHistory={chatHistory}
              />
            </Col>
          </Row>
        </div>
      )}
      {isProcessing && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Processing...</span>
          </Spinner>
        </div>
      )}
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
