import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/slices/chatSlice';

function ChatInput({ chatId }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      // Dispatch the action to Redux
      dispatch(
        addMessage({
          chatId, // Associate the message with a specific chat
          message: {
            sender: 'User', // Specify the sender
            text: message, // The message text
            timestamp: new Date().toISOString(), // Add a timestamp
          },
        })
      );
      setMessage(''); // Clear the input after sending
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
