import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';

function ChatSection({ processedContent }) {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (userInput) => {
    if (!userInput.trim()) return;

    const botResponse = getBotResponse(userInput);
    setMessages([...messages, { user: userInput, bot: botResponse }]);
  };

  const getBotResponse = (userInput) => {
    if (processedContent.includes(userInput)) {
      return 'Found relevant content in the uploaded PDF!';
    } else {
      return 'Sorry, I could not find relevant content for your query.';
    }
  };

  return (
    <Container className="mt-4 chat-container">
      <Card className="shadow-lg border-0">
        {/* Chat Header */}
        <Card.Header className="bg-primary text-white text-center py-3">
          Chat with PDF
        </Card.Header>

        {/* Chat Body */}
        <Card.Body
          className="d-flex flex-column"
          style={{ height: '600px', overflow: 'hidden' }}
        >
          {/* Placeholder / Context */}
          <div
            className="text-secondary mb-3"
            style={{ fontStyle: 'italic', fontSize: '14px' }}
          >
            You can ask questions about the uploaded PDF content.
          </div>

          {/* Chat Messages */}
          <div
            className="flex-grow-1 overflow-auto px-3 py-2"
            style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
            }}
          >
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                {/* User Message */}
                <div
                  className="text-end mb-1"
                  style={{
                    backgroundColor: '#d1e7dd',
                    borderRadius: '15px',
                    padding: '10px',
                    maxWidth: '70%',
                    marginLeft: 'auto',
                  }}
                >
                  {message.user}
                </div>

                {/* Bot Response */}
                <div
                  className="text-start"
                  style={{
                    backgroundColor: '#e9ecef',
                    borderRadius: '15px',
                    padding: '10px',
                    maxWidth: '70%',
                    marginRight: 'auto',
                  }}
                >
                  {message.bot}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <Form
            className="d-flex align-items-center mt-3"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.target.elements.userMessage.value;
              handleSendMessage(input);
              e.target.reset();
            }}
          >
            <Form.Control
              name="userMessage"
              type="text"
              placeholder="Type your message..."
              className="me-2"
            />
            <Button type="submit" variant="primary">
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ChatSection;
