import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiX } from "react-icons/si";

function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ firstname, lastname, email, message });

    const res = await fetch('https://formspree.io/f/xeorkndp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, lastname, email, message }),
    });

    if (res.ok) {
      alert('✅ Message sent successfully!');
      setFirstname('');
      setLastname('');
      setEmail('');
      setMessage('');
    } else {
      alert('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className="mx-auto flex flex-col gap-4 w-full max-w-lg mt-10 mb-10 
                   bg-white p-6 md:p-8 rounded-xl 
                   shadow-[0_0_15px_blue] transition-all duration-300"
      >
        <label htmlFor="firstname" className="font-semibold">First Name</label>
        <input
          type="text"
          id="firstname"
          placeholder="First name"
          className="border-2 border-gray-400 py-2 px-3 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
        />

        <label htmlFor="lastname" className="font-semibold">Last Name</label>
        <input
          type="text"
          id="lastname"
          placeholder="Last name"
          className="border-2 border-gray-400 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
          value={lastname}
          onChange={e => setLastname(e.target.value)}
        />

        <label htmlFor="email" className="font-semibold">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border-2 border-gray-400 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="message" className="font-semibold">Message</label>
        <textarea
          id="message"
          placeholder="Your message here..."
          rows="5"
          className="border-2 border-gray-400 py-2 px-3 rounded font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>

        <button 
          type="submit" 
          className="bg-amber-500 text-black font-semibold px-6 py-2 
                     rounded-xl hover:bg-amber-400 hover:scale-105 
                     transition-all duration-300"
        >
          Submit
        </button>
      </form>

      {/* Socials */}
      <div className="flex justify-center gap-6 mb-10">
        <a href="https://github.com/ken-jibril" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="text-white hover:text-white transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/kennedy-njoroge-35b84a366/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="text-blue-700 hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://x.com/JibrilKen42083" target="_blank" rel="noopener noreferrer">
          <SiX size={40} className="text-white hover:text-gray-400" />
        </a>
      </div>
    </>
  );
}

export default Contact;
