import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./components/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
