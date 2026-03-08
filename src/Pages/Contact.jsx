import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

function Contact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ firstname, lastname, email, message });

    const res = await fetch("https://formspree.io/f/xeorkndp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, email, message }),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    } else {
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="px-4 py-20">
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        Get In Touch
      </h1>
      <p className="text-gray-300 text-base sm:text-lg text-center mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out!
        I'm always open to discussing new opportunities and ideas.
      </p>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* Left side - Contact Info Card */}
        <div className="w-full lg:w-1/2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:jibken80@gmail.com"
              className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-amber-500/20 transition-colors duration-300 group"
            >
              <div className="bg-amber-500 p-3 rounded-full">
                <FaEnvelope className="text-black text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium group-hover:text-amber-400 transition-colors">
                  jibken80@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254702771481"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-amber-500/20 transition-colors duration-300 group"
            >
              <div className="bg-green-500 p-3 rounded-full">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-white font-medium group-hover:text-amber-400 transition-colors">
                  +254 702 771 481
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
              <div className="bg-blue-500 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-4">Follow me on</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ken-jibril"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-amber-500/20 transition-colors duration-300"
              >
                <FaGithub className="text-white text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/kennedy-njoroge-35b84a366/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-amber-500/20 transition-colors duration-300"
              >
                <FaLinkedin className="text-blue-500 text-xl" />
              </a>
              <a
                href="https://x.com/JibrilKen42083"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-amber-500/20 transition-colors duration-300"
              >
                <SiX className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 flex flex-col gap-4 bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg transition-all duration-300"
        >
          <label htmlFor="firstname" className="font-semibold text-white">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="First name"
            className="border-2 border-gray-400 py-2 px-3 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 text-white placeholder-gray-400"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="lastname" className="font-semibold text-white">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Last name"
            className="border-2 border-gray-400 py-2 px-3 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 text-white placeholder-gray-400"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="email" className="font-semibold text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border-2 border-gray-400 py-2 px-3 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 text-white placeholder-gray-400"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message" className="font-semibold text-white">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message here..."
            rows="5"
            className="border-2 border-gray-400 py-2 px-3 rounded font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 text-white placeholder-gray-400"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
