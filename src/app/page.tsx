import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <About/>
        <ProjectsSection />
        <Contact/>
      </div>
        <Footer/>
    </main>
  );
}