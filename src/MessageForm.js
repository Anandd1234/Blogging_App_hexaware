import React, { useState } from 'react';

const MessageForm = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can submit the message or perform any necessary action
    // Reset the form or close it after submission
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={toggleForm}>Message Me</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Message:
            <input type="text" /* Add necessary input fields */ />
          </label>
          {/* Add other necessary input fields */}
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default MessageForm;
