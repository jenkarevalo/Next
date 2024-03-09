import Principal from "./Components/Principal";
import NavBar from "./Components/Navbar";
import SlideBar from "./Components/SlideBar";
import About from "./Components/About";
import Projects from "../app/Components/Projects";
import Contact from "./Components/Contact";

function Home() {
  return (
    <main className="">
      <NavBar />
      <SlideBar />
      <Principal />
      <About />
      <Projects />
      <Contact />
    </main>

  );
}

export default Home 