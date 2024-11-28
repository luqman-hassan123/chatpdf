
// src/components/ChatWindow.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';


function ChatWindow({ chatHistory }) {
  return (
    <div className="chat-window mb-4">
      <h3 className="text-center mb-3">Chat History</h3>
      <ListGroup variant="flush">
        {chatHistory.map((chat, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <div><strong>{chat.user}:</strong> {chat.message}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ChatWindow; 