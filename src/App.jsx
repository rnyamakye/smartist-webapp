import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
import About from "./Components/Pages/About";
import Community from "./Components/Pages/Community";

export default function App() {
  return (
    <BrowserRouter>
      <header className="flex flex-col items-center">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/community" element={<Community />} />

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
