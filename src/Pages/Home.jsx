import { Link } from "react-router-dom";
function Home() {
    return ( 
        <div className="flex flex-row mx-auto items-center justify-center gap-30 py-20">
            <div className="flex flex-col items-start justify-center ">
                <h1 className="text-white text-6xl py-3 leading-snug">Hi I'm Ken <br /> A Front-End Developer</h1>
                <p className="text-white text-3xl py-3 leading-relaxed my-4">I create websites that are UI friendly <br /> and experiences modern web dev vibe. <br /> I Focus on creating elegant solutions.</p>
                <div className="flex flex-row gap-2 items-center">
                    <p className=" text-amber-600 hover:text-amber-500 font-semi-bold text-xl py-1 px-2.5 rounded-3xl text-center">Creative</p>
                    <span className="text-xl text-amber-800">-</span>
                    <p className=" text-amber-600 hover:text-amber-500 font-semi-bold text-xl py-1 px-2.5 rounded-3xl text-center"> Passionate</p>
                    <span className="text-xl text-amber-800">-</span>
                    <p className=" text-amber-600 hover:text-amber-500 font-semi-bold text-xl py-1 px-2.5 rounded-3xl text-center">Focused</p>
                    <span className="text-xl text-amber-800">-</span>
                    <p className="text-amber-600 hover:text-amber-500 font-semi-bold text-xl py-1 px-2.5 rounded-3xl text-center">Detail-Oriented</p>
                </div>
                <Link to='/about' className="bg-amber-800 hover:bg-amber-700 text-2xl text-white rounded-3xl py-2 px-2 text-center my-3 mt-4 flex items-center justify-center">About Me <span className="text-2xl">→</span></Link>
            </div>
            <div className="w-120 h-120">
                <img src="/src/assets/ken's image.jpg" alt="Ken's Photo" className="w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out hover:shadow-[0_0_30px_cyan]"/>
            </div>
        </div>
     );
}

export default Home;