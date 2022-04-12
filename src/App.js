// import Route from "react-route/lib/route";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Experts from "./components/Home/Experts/Experts";
import Home from "./components/Home/Home";
import Services from "./components/Home/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/experts" element={<Experts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
