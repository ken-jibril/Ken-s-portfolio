import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


function Contact() {
     
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission logic here

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can add form validation and submission logic here
        console.log({ firstname, lastname, email, message });
        const res = await fetch('https://formspree.io/f/xeorkndp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                message
            })
        });

        // Handle successful submission (e.g., show a success message, clear the form)
        if (res.ok) {
            alert('✅Message sent successfully!');
            setFirstname('');
            setLastname('');
            setEmail('');
            setMessage('');
        }
        else {
            alert('❌Failed to send message. Please try again later.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-4 w-96 mt-10 mb-10 bg-white p-6 rounded-xl shadow-[0_0_15px_blue]">
                <label htmlFor="firstname" className="font-semibold">First Name</label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First name"
                    className="border-2 border-gray-400 py-1 rounded px-1 font-semibold"
                    required
                    value={firstname}
                    onChange={e => setFirstname(e.target.value)}
                />
                <label htmlFor="lastname" className="font-semibold">Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last name"
                    className="border-2 border-gray-400 py-1 rounded px-1"
                    required
                    value={lastname}
                    onChange={e => setLastname(e.target.value)}
                />
                <label htmlFor="email" className="font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="border-2 border-gray-400 py-1 rounded px-1"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="message" className="font-semibold">Message</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Your message here..."
                    className="border border-gray-300 rounded px-2 py-1 font-semibold"
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300">Submit</button>
            </form>
            <div className="flex justify-center flex-row gap-6 mb-10">
               <a href="https://github.com/ken-jibril" target="_blank" rel="noopener noreferrer">
                <FaGithub size={35} className="text-white" />
               </a>

               <a href="https://www.linkedin.com/in/kennedy-njoroge-35b84a366/" target='_blank' rel='noopener noreferrer'>
               <FaLinkedin size={35} className="text-blue-700 mx-2" />
               </a>
               <a href="https://x.com/JibrilKen42083" target='_blank' rel='noopener noreferrer'>
               <FaTwitter size={35} className="text-blue-400 hover:text-blue-500 mx-2" />
               </a> 
            </div>
        </> 
    );
}

export default Contact;