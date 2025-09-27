import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="flex flex-row gap-4 items-center justify-center py-2 bg-gray-700 max-w-fit px-4 mx-auto my-1.5 rounded-3xl">
            <Link to= '/'className="text-white text-xl hover:underline transition-all duration-300 ease-in-out">Home</Link>
            <Link to= '/about'className="text-white text-xl hover:underline transition-all duration-300 ease-in-out">About</Link>
            <Link to= '/projects'className="text-white text-xl hover:underline transition-all duration-300 ease-in-out">Projects</Link>
            <Link to= '/contact'className="text-white text-xl hover:underline transition-all duration-300 ease-in-out">Contact</Link>
        </nav>
     );
}

export default Navbar;