import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Store from "./Page/Store";
import Home from "./Page/Home";
import ContactUs from "./Page/Contactus";
import ProductView from "./Page/ProductView";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Store />} path="/store"></Route>
          <Route element={<ContactUs />} path="/contactus"></Route>
          <Route element={ <ProductView /> } path="/productview/:id/:title"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
