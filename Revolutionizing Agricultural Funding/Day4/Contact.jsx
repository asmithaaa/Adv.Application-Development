import { useState } from 'react';
import '../assets/css/Contact.css';
import video from'../assets/videos/cust.mp4'


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="query">Query:</label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      <div className="video-container">
       <video src={video} autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default ContactForm;
