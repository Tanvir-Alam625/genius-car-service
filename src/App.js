// import Route from "react-route/lib/route";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Checkout from "./components/Home/Checkout/Checkout";
import Experts from "./components/Home/Experts/Experts";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login/Login";
import Reset from "./components/Home/Login/Reset";
import AddService from "./components/Home/Services/AddService";
import RequireAuth from "./components/Home/Services/RequireAuth";
import ServiceDetails from "./components/Home/Services/ServiceDetails";
import Services from "./components/Home/Services/Services";
import Signup from "./components/Home/Signup/Signup";
import User from "./components/Home/User/User";
import Manage from "./components/Manage/Manage";
import UpdateService from "./components/Manage/UpdateService";
import NotFound from "./components/NotFound/NotFound";

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
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <RequireAuth>
              <User />
            </RequireAuth>
          }
        ></Route>

        <Route path="/service/:serviceId" element={<ServiceDetails />} />
        <Route path="/reset" element={<Reset />}></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <RequireAuth>
              <UpdateService />
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
