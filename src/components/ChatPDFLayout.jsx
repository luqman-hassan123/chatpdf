import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import "../styles/ChatPDFLayout.css";
import styled from "styled-components";
import { GrUploadOption } from "react-icons/gr";

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

  // -----*******************************************************************
  const CardContainer = styled.div`
    background: #ffffff; /* White card background */
    border-radius: 16px; /* Smooth edges for the card */
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    margin-top: 2%;
    margin-left: 35%;
  `;
  const UploadContainer = styled.div`
    border: 2px dashed #fd6114; /* Purple border */
    border-radius: 12px;
    padding: 50px;
    text-align: center;
    background: #faf5ff; /* Light purple background */
    position: relative;
    &:hover {
      background: #f0f0f0; /* Light gray background on hover */
    }
  `;

  const DragText = styled.p`
    font-family: "Poppins", sans-serif;
    color: black;
    font-weight: 600;
    margin-bottom: 16px;
    font-size: 16px;
  `;

  const FileIcon = styled.div`
    display: inline-block;
    background: #ffffff;
    border-radius: 50%;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  `;

  const Button = styled.button`
    background-color: #fd6114;
    border: none;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 37%;
    gap: 8px;
    &:hover {
      background-color: #f2560e; /* Darker purple */
    }
  `;

  const UploadInput = styled.input`
    display: none;
  `;

  // ****************************************************

  return (
    <CardContainer>
      <UploadContainer onDragOver={handleDragOver} onDrop={handleDrop}>
        <FileIcon>
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="File Icon"
            width="50"
          />
        </FileIcon>
        <DragText>Click to upload, or drag PDF file here</DragText>

        <Form.Group controlId="formFile" className="my-4">
          <Form.Control
            type="file"
            className="file-input"
            onChange={handleFileChange}
            accept=".pdf"
          />
        </Form.Group>

        <UploadInput
          type="file"
          id="fileUpload"
          accept=".pdf"
          onChange={handleFileChange}
        />

        <Button
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
           onClick={() => document.getElementById("fileUpload").click()}
        >
          <GrUploadOption size={20} />
          Upload PDF
        </Button>
      </UploadContainer>
    </CardContainer>

  );
}

export default ChatPDFLayout;
