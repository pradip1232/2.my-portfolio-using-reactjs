import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Me</h1>
      <p>If you have any questions or want to reach out, feel free to use the form below or connect with me on LinkedIn or GitHub.</p>
      
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/pradipmourya-61a387218" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/pradip1232" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
