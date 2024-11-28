import React, { useState } from "react";
import axios from "axios";
import AnswerViewer from "./AnswerViewer"; // Component to display answers

function PDFProcessor() {
  const [pdfFile, setPdfFile] = useState(null); // Store uploaded file
  const [output, setOutput] = useState(""); // Store processed content
  const [loading, setLoading] = useState(false); // Show loader during processing

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      alert("Please select a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile);

    try {
      setLoading(true); // Start loader
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setOutput(response.data.content); // Backend should send `content`
    } catch (error) {
      console.error("Error processing PDF:", error);
      alert("An error occurred while processing the PDF.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="pdf-processor">
      <h1>PDF Processor</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload and Process"}
      </button>

      {/* Loader */}
      {loading && <div className="loader">Processing your PDF...</div>}

      {/* Display Output */}
      {output && <AnswerViewer content={output} />}
    </div>
  );
}

export default PDFProcessor;
