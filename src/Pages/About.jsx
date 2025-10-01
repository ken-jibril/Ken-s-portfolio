function About() {
    return ( 
        <>
                <h1 className="text-white text-4xl text-center my-3">About Me</h1>
        <div className="flex flex-col mx-auto">
            <div className="rounded-2xl max-w-fit flex flex-col items-center justify-center text-white w-4xl h-96 mx-auto leading-relaxed gap-1">
              <p className="font-bold text-xl my-2 ">Hey, I'm Ken — a Front-End Developer passionate about creating fast, responsive, and visually engaging web experiences. <br /> I enjoy crafting clean, reusable components that make development smoother and more scalable.
                <p className="font-bold text-xl ">Over time, I've built projects ranging from responsive websites to interactive apps with API integrations. <br /> My focus is always on delivering intuitive, accessible interfaces that users actually enjoy using.</p>
                <p className="font-bold text-xl ">When I'm not coding, you'll probably find me watching a good series or vibing to some jams — both <br /> keep me inspired and fuel my creativity when I get back to the code.</p>
              </p>
            </div>
            <div className=" w-lg mx-auto my-4">
                  <h1 className="text-white text-3xl text-center my-3">Tech Stack</h1>
                  <div className="grid grid-cols-3 gap-2">
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-1 px-1 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]">HTML5</p>
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-1 px-1 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]">CSS3</p>
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-1 px-1 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]">JavaScript (ES6+)</p>
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-1 px-1 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]">React.js</p>
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-1 px-1 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]">Node.js</p>
                    <p className="bg-white text-amber-700 text-3xl text-center flex items-center justify-center rounded py-2 px-2 my-2 font-bold hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-[0_0_30px_cyan] w-fit">Tailwind.css</p>
                  </div>
            </div>
        </div>
        
        </>
     );
}

export default About;