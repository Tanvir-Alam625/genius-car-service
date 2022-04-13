// import Route from "react-route/lib/route";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Experts from "./components/Home/Experts/Experts";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login/Login";
import ServiceDetails from "./components/Home/Services/ServiceDetails";
import Services from "./components/Home/Services/Services";
import Signup from "./components/Home/Signup/Signup";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
