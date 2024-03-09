import Principal from "./Components/Principal";
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "../app/Components/Projects";
import Contact from "./Components/Contact";
import SlideBar from "./Components/SlideBar";

function Home() {
  return (
    <main className="">
      <NavBar />
      <Principal />
      <About />
      <Projects />
      <Contact />
      <SlideBar />
    </main>

  );
}

export default Home 