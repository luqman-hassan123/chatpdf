// src/components/Message.js
import React from 'react';


function Message({ user, message }) {
  return (
    <div className="message">
      <strong>{user}:</strong> {message}
    </div>
  );
}

export default Message;