import React from 'react';
import { Card } from 'react-bootstrap';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.user === 'User' ? 'user-message' : 'bot-message'}`}>
          <Card className={`mb-2 ${msg.user === 'User' ? 'bg-primary text-white' : 'bg-light'}`}>
            <Card.Body>
              <strong>{msg.user}</strong>: {msg.message}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
