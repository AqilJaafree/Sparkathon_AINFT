import React, { useState } from 'react';

const Chatbox = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleChat = async () => {
    try {
      // Make a POST request to your server (backend) to interact with the OpenAI model
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch AI response');
      }

      const data = await response.json();
      setAiResponse(data.response);
    } catch (error) {
      console.error('Error communicating with the backend:', error);
    }
  };

  return (
    <div className="chatbox">
  <div className="chatbox-messages">
    {/* Messages displayed here */}
  </div>
  <div className="chatbox-input">
    <input
      type="text"
      placeholder="Type your message..."
      value={userInput}
      onChange={handleUserInput}
    />
    <button onClick={handleChat}>Send</button>
  </div>
</div>

  );
};

export default Chatbox;
