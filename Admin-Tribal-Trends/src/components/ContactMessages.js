// Frontend - ContactMessages.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ContactMessages.css'; // Import the CSS file for ContactMessages

const ContactMessages = () => {
  const [contactMessages, setContactMessages] = useState([]);

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get('https://trible-trands.onrender.com/api/contact');
      setContactMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await axios.delete(`https://trible-trands.onrender.com/api/contact/${id}`);
      fetchContactMessages(); // Refresh the messages after successful deletion
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContactMessages();
  }, []);

  return (
    <div className="contact-messages">
      <h2>Contact Messages From Tribal-Trends</h2>
      {contactMessages.map((message) => (
        <div key={message._id} className="message">
          <p>
            <strong>Name:</strong> {message.name}
          </p>
          <p>
            <strong>Email:</strong> {message.email}
          </p>
          <p>
            <strong>Message:</strong> {message.message}
          </p>
          <button onClick={() => handleDeleteMessage(message._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactMessages;
