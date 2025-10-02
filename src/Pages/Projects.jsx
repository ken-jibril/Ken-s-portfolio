function Projects() {
    return ( 
         <div className="">
            <h1 className="text-white text-4xl text-center my-3">My Projects</h1>
            <div className="place-items-center gap-8 my-10 grid grid-cols-3">
                <div className="w-120 mx-2 hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl">
                    <img src="/src/assets/Frontend_Mentor.io .png" alt="QR Code" className="rounded-2xl px-2 py-2" />
                    <h2 className="text-white text-center text-2xl my-1">QR Code Component</h2>
                    <p className="text-white text-xl leading-relaxed mx-2">The QR Code above is to be used to give access to <br />Front-End mentor challenges for practice.</p>
                        <div className="flex justify-center mt-4 mb-4">
                            <a 
                            href="https://qr-code-component-pied-phi-87.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
                            >
                            View Live
                            </a>
                        </div>
                </div>
                <div className="w-120 mx-2 hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl">
                    <img src="/src/assets/Screenshot 2025-08-21 125557.png" alt="Blog Card Photo" className="rounded-2xl px-2 py-2" />
                    <h2 className="text-white text-center text-2xl my-1">Blog Preview Card</h2>
                    <p className="text-white text-xl leading-relaxed mx-2">The Blog Card is used as a clickable card to view more details on the Front-end Techonologies.</p>
                        <div className="flex justify-center mt-4 mb-4">
                            <a 
                            href="https://blog-preview-card-weld-delta.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
                            >
                            View Live
                            </a>
                        </div>
                </div>
                <div className="w-120 mx-2 hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl">
                    <img src="/src/assets/Screenshot 2025-08-23 195239.png" alt="Profile Card Photo" className="rounded-2xl px-2 py-2" />
                    <h2 className="text-white text-center text-2xl my-1">Social Link's Profile</h2>
                    <p className="text-white text-xl leading-relaxed  mx-2">This Social Links Profile serves as a personal hub, allowing users to easily access and connect with the owner's various social media platforms</p>
                        <div className="flex justify-center mt-4 mb-4">
                            <a 
                            href="https://social-links-profile-nu-khaki.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
                            >
                            View Live
                            </a>
                        </div>
                </div>
                <div className="w-120 mx-2 hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_magenta] rounded-xl">
                    <img src="/src/assets/Screenshot 2025-10-02 131425.png" alt="Recipe Photo" className="rounded-2xl px-2 py-2" />
                    <h2 className="text-white text-center text-2xl my-1">Recipe Page</h2>
                    <p className="text-white text-xl leading-relaxed mx-2">This Recipe Details Page provides a complete breakdown of a dish, featuring its image, title, brief description, step-by-step instructions, ingredients list, and nutritional information for easy reference</p>
                        <div className="flex justify-center mt-4 mb-4">
                            <a 
                            href="https://recipe-mu-gules.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-amber-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300"
                            >
                            View Live
                            </a>
                        </div>
                </div>
            </div>
         </div>
     );
}

export default Projects;