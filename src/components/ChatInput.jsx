import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="outline-secondary" onClick={handleSend}>
        Send
      </Button>
    </InputGroup>
  );
}

export default ChatInput;