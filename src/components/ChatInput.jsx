import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div className="chat-input">
      <Form className="d-flex align-items-center">
        <Form.Control
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question about the PDF..."
          className="me-2" // margin-end for spacing
        />
        <Button variant="primary" onClick={handleSend}>
          Send
        </Button>
      </Form>
    </div>
  );
}

export default ChatInput;
